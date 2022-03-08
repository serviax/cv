export interface CvEnvironmentEnvs extends NodeJS.ProcessEnv {
  MONGO_DB_CONNECTION_STRING: string,
  TOKEN_ISS: string,
  TOKEN_AUD: string,
  DEFAULT_LANGUAGE: string;
}

const NODE_ENVS = <CvEnvironmentEnvs>process.env;


export default NODE_ENVS;