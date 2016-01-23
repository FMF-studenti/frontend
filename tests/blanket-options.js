/* globals blanket, module */

var options = {
  modulePrefix: 'fmf',
  filter: '//.*fmf/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    jsonOptions: {
      outputFile: 'coverage/coverage.json'
    },
    lcovOptions: {
      outputFile: 'coverage/lcov.info',
      //provide a function to rename es6 modules to a file path
      renamer: function(moduleName) {
        return moduleName.replace('fmf', 'app') + '.js';
      }
    },
    reporters: ['lcov', 'json'],
    autostart: true
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
