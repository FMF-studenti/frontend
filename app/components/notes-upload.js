import Ember from 'ember';
import EmberUploader from 'ember-uploader';
import ENV from 'fmf/config/environment';

export default EmberUploader.FileField.extend({
  session: Ember.inject.service('session'),
  url: ENV.APP.backendUri + '/api/notes/files',

  supportedTypes: [
    'application/pdf'
  ],

  prepare: function() {
    Ember.$('#notes-upload-progress').progress({
      percent: 0
    }).find('.label').text('Izberi datoteko za prenos');
  }.on('didInsertElement didRender'),

  filesDidChange: function(files) {
    var uploadUrl = this.get('url');
    var progressBar = Ember.$('#notes-upload-progress');

    var uploader = EmberUploader.Uploader.create({
      url: uploadUrl,
      session: this.get('session'),

      ajaxSettings: function(url, params, method) {
        var self = this;
        var settings = {
          url: url,
          type: method || 'POST',
          contentType: false,
          processData: false,
          xhr: function() {
            var xhr = Ember.$.ajaxSettings.xhr();
            xhr.upload.onprogress = function(e) {
              self.didProgress(e);
            };
            self.one('isAborting', function() {
              xhr.abort();
            });
            return xhr;
          },
          data: params
        };

        this.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
          const headers = {};
          headers[headerName] = headerValue;

          settings.headers = headers;
        });

        return settings;
      }
    });

    var validType = this.get('supportedTypes').indexOf(files[0].type) !== -1;
    var validSize = files[0].size < 314572800;

    if (!Ember.isEmpty(files) && validType && validSize) {
      progressBar.removeClass('error').addClass('active');
      progressBar.find('.label').text('Nalagam ...');
      uploader.on('progress', function(e) {
        progressBar.progress({
          percent: e.percent
        });
      });

      var component = this;
      var promise = uploader.upload(files[0]);

      promise.then(function(data) {
        component.sendAction('action', data);
      }, function() {
        progressBar.addClass('error');
        progressBar.find('.label').text('Nekaj je šlo narobe, poskusi znova');
      });
    } else {
      progressBar.addClass('error');

      if (!validType) {
        progressBar.find('.label').text('Naložiš lahko le datoteke PDF');
      } else if (!validSize) {
        progressBar.find('.label').text('Naložiš lahko le datoteke PDF manjše od 300 MiB');
      } else {
        progressBar.find('.label').text('Nekaj je šlo narobe, poskusi znova');
      }
    }
  }
});
