import Ember from 'ember';
import ENV from 'fmf/config/environment';
import OAuth2 from 'simple-auth-oauth2/authenticators/oauth2';

export default OAuth2.extend({
  serverExtraEndpoint: null,

  init: function() {
    this.serverExtraEndpoint = ENV['simple-auth-oauth2'].serverExtraEndpoint;

    return this._super();
  },

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
  },

  invalidate: function(data) {
    var _this = this;

    function success(resolve) {
      Ember.run.cancel(_this._refreshTokenTimeout);
      delete _this._refreshTokenTimeout;
      resolve();
    }
    return new Ember.RSVP.Promise(function(resolve) {
      if (Ember.isEmpty(_this.serverTokenRevocationEndpoint)) {
        success(resolve);
      } else {
        Ember.$.ajax({
          url: _this.serverExtraEndpoint,
          type: "POST"
        }).then(function() {
          var requests = [];

          Ember.A(['access_token']).forEach(function(tokenType) {
            var token = data[tokenType];
            if (!Ember.isEmpty(token)) {
              requests.push(_this.makeRequest(_this.serverTokenRevocationEndpoint, {
                token_type_hint: tokenType,
                token: token
              }));
            }
          });
          Ember.$.when.apply(Ember.$, requests).always(function() {
            success(resolve);
          });
        });
      }
    });
  }
});
