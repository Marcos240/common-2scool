export interface IEnvConfig {
  host: string;
  platform?: 'mobile' | 'web';
  oAuthConfig: {
    issuer: string;
    clientId: string;
    clientSecret: string;
    scope: string;
  };
  enableLogger: boolean;
}

export interface IEnv {
  development: IEnvConfig;
  production: IEnvConfig;
}

export const ENV_NAME: {[key: string]: string} = {
  development: 'development',
  production: 'production'
};

export const Platform = {
  MOBILE: 'mobile',
  WEB: 'web'
};