/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'fmf',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    dotEnv: {
      clientAllowedKeys: ['AUTH_REDIRECT', 'AUTH_CLIENT', 'AUTH_KEY', 'BACKEND_URI']
    },
    moment: {
      includeLocales: ['sl']
    },

    APP: {
      authKey: process.env.AUTH_KEY,
      backendUri: process.env.BACKEND_URI
    }
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:oauth2-bearer',
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: process.env.BACKEND_URI + '/auth/token/',
    serverTokenRevocationEndpoint: process.env.BACKEND_URI + '/auth/revoke_token/'
  };

  ENV.torii = {
    providers: {
      'fmf-oauth2': {
        'apiKey': process.env.AUTH_CLIENT,
        'baseUri': process.env.BACKEND_URI + '/auth/authorize/',
        'redirectUri': process.env.AUTH_REDIRECT
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.contentSecurityPolicy = {
      'connect-src': "'self' " + process.env.BACKEND_URI,
      'font-src': "'self' https://fonts.gstatic.com data:",
      'img-src': "'self' data:",
      'script-src': "'self' 'unsafe-inline' http://ember-extension.s3.amazonaws.com",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com"
    };

    ENV['simple-auth']['crossOriginWhitelist'] = [process.env.BACKEND_URI];
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
