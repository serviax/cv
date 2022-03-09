import Router from 'express';
import jwt, { secretType } from 'express-jwt';
import axios from 'axios';
import NODE_ENVS from '../config';
import unless from 'express-unless';
import { sendErrorResponse } from '../routes/utils';

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
    return done(<Error>{ message: 'The keys from Microsoft could not be loaded, impossible to decrypt the JWT token', name: 'MissingPublicTokens' });

  const { kid } = header;
  const { iss, aud } = payload;

  if (iss != NODE_ENVS.TOKEN_ISS)
    return done(<Error>{ message: 'The ISS of the token is not what was expected', name: 'TokenValidationError' });
  if (aud != NODE_ENVS.TOKEN_AUD)
    return done(<Error>{ message: 'This JWT token is not intended for this application', name: 'TokenValidationError' });

  const key = secretKeys.keys.find(x => x.kid == kid);
  if (key) {
    const pem = key.x5c[0];// _.get(key, 'x5c[0]');

    if (pem) {
      return done(null, `-----BEGIN CERTIFICATE-----\n${pem}\n-----END CERTIFICATE-----`);
    }

    return done(<Error>{ message: `the key that identifies as ${kid} is found, however the PEM identified as x5c could not be found.`, name: 'MissingPublicTokens' });
  }

  return done(<Error>{ message: `The key that identifies as ${kid} could not be found in the keys provided by Microsoft.`, name: 'MissingPublicTokens' });
};

const authorizationHeaderNeeded = (request: any, response: any, next: any) => {
  console.log('checking header');
  if (!request.headers.authorization)
    return sendErrorResponse(response, 401, 'You need to be logged in to perform this action.');

  next();
};

authorizationHeaderNeeded.unless = unless;

const authenticationMiddleware = Router();

// according to express-jwt documentation you can specify issuer and audience, however there is no reference to it in the typed definition
authenticationMiddleware.use(authorizationHeaderNeeded.unless({ method: 'GET' }));
authenticationMiddleware.use(jwt({ secret: extractSecret, algorithms: ['RS256'], }).unless({ method: 'GET' }));

export default authenticationMiddleware;