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
      clientAllowedKeys: ['AUTH_REDIRECT', 'AUTH_CLIENT', 'AUTH_KEY', 'BACKEND_URI', 'FORUM_URI']
    },
    moment: {
      includeLocales: ['sl']
    },

    APP: {
      authKey: process.env.AUTH_KEY,
      authTokenEndpoint: process.env.BACKEND_URI + '/auth/token/',
      authTokenRevocationEndpoint: process.env.BACKEND_URI + '/auth/revoke_token/',
      authExtraEndpoint: process.env.BACKEND_URI + '/auth/forum_logout/',
      backendUri: process.env.BACKEND_URI
    },

    metricsAdapters: [{
      name: 'GoogleAnalytics',
      environments: ['production'],
      config: {
        id: process.env.GA_CODE
      }
    }],

    contentSecurityPolicy: {
      'connect-src': "'self' www.google-analytics.com " + process.env.BACKEND_URI,
      'font-src': "'self' https://fonts.gstatic.com data:",
      'img-src': "'self' www.google-analytics.com " + process.env.FORUM_URI + " https://avatars.discourse.org data:",
      'script-src': "'self' 'unsafe-inline' www.google-analytics.com http://ember-extension.s3.amazonaws.com",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com"
    }
  };

  ENV['simple-auth-oauth2'] = {

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
    ENV.contentSecurityPolicyHeader = 'Content-Security-Policy';
  }

  return ENV;
};
