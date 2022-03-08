import Router from 'express';


const authenticationMiddleware = Router();
import jwt, { secretType } from 'express-jwt';
import axios from 'axios';
import NODE_ENVS from '../config';

interface SecretKeys {
  keys: { kty: string, kid: string, x5c: string[] }[]
}

let secretKeys: SecretKeys | null = null;

// only run this once when the server boots up
// these keys don't change that often
const fetchKeys = async () => {
  const result = await axios.get('https://login.microsoftonline.com/common/discovery/keys');
  secretKeys = result.data;
};

fetchKeys();

const extractSecret = function (req: Express.Request, header: any, payload: any, done: (err: any, secret?: secretType) => void) {
  if (!secretKeys)
    return done(new Error('The keys from Microsoft could not be loaded, impossible to decrypt the JWT token'));

  const { kid } = header;
  const { iss, aud } = payload;

  if (iss != NODE_ENVS.TOKEN_ISS)
    return done(new Error('The ISS of the token is not what was expected'));
  if (aud != NODE_ENVS.TOKEN_AUD)
    return done(new Error('This JWT token is not intended for this application'));

  const key = secretKeys.keys.find(x => x.kid == kid);
  if (key) {
    const pem = key.x5c[0];// _.get(key, 'x5c[0]');

    if (pem) {
      return done(null, `-----BEGIN CERTIFICATE-----\n${pem}\n-----END CERTIFICATE-----`);
    }

    return done(new Error(`the key that identifies as ${kid} is found, however the PEM identified as x5c could not be found.`));
  }

  return done(new Error(`the key that identifies as ${kid} could not be found in the keys provided by Microsoft.`));
};


// according to express-jwt documentation you can specify issuer and audience, however there is no reference to it in the typed definition
authenticationMiddleware.use(jwt({ secret: extractSecret, algorithms: ['RS256'], }).unless({ method: 'GET' }));

export default authenticationMiddleware;