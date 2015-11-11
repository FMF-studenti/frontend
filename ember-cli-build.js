/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    gzip: {
      keepUncompressed: true
    },
    lessOptions: {
      useFileCache: true,
      paths: [
        'app/styles/fake/dir',
        'bower_components/semantic-ui/src'
      ]
    },
    SemanticUI: {
      css: false
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/js-cookie/src/js.cookie.js');

  app.import('vendor/errors/400.html', {
    destDir: 'errors/'
  });
  app.import('vendor/errors/401.html', {
    destDir: 'errors/'
  });
  app.import('vendor/errors/403.html', {
    destDir: 'errors/'
  });
  app.import('vendor/errors/404.html', {
    destDir: 'errors/'
  });
  app.import('vendor/errors/500.html', {
    destDir: 'errors/'
  });

  return app.toTree();
};
