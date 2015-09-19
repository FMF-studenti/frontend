import Ember from 'ember';
import ENV from 'fmf/config/environment';
import OAuth2 from 'simple-auth-oauth2/authenticators/oauth2';

export default OAuth2.extend({
  authenticate: function(options) {
    return this.fetchOauthData(options).then(this.fetchAccessToken.bind(this));
  },

  makeRequest: function(url, data) {
    return Ember.$.ajax({
      url: url,
      type: 'POST',
      data: data,
      dataType: 'json',
      contentType: 'application/x-www-form-urlencoded',
      beforeSend: function(request) {
        request.setRequestHeader("Authorization", "Basic " + ENV.APP.authKey);
      }
    });
  },

  fetchAccessToken: function(oauthCredentials) {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      _this.makeRequest(_this.serverTokenEndpoint, oauthCredentials).then(function(response) {
        Ember.run(function() {
          var expiresAt = _this.absolutizeExpirationTime(response.expires_in);
          _this.scheduleAccessTokenRefresh(response.expires_in, expiresAt, response.refresh_token);
          resolve(Ember.$.extend(response, {
            expires_at: expiresAt
          }));
        });
      }, function(xhr) {
        Ember.run(function() {
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  },

  fetchOauthData: function(options) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      options.torii.open(options.provider).then(function(oauthData) {
        resolve({
          grant_type: 'authorization_code',
          code: oauthData.authorizationCode,
          redirect_uri: oauthData.redirectUri
        });
      }, function(error) {
        reject(error);
      });
    });
  }
});
