import Ember from 'ember';
import ENV from 'fmf/config/environment';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  torii: Ember.inject.service(),
  session: Ember.inject.service('session'),

  clientId: ENV.APP.authKey,
  serverExtraEndpoint: ENV.APP.authExtraEndpoint,
  serverTokenEndpoint: ENV.APP.authTokenEndpoint,
  serverTokenRevocationEndpoint: ENV.APP.authTokenRevocationEndpoint,

  authenticate: function() {
    return this.fetchOauthData().then(this.fetchAccessToken.bind(this));
  },

  makeRequest(url, data, authenticated) {
    const options = {
      url,
      data,
      type: 'POST',
      dataType: 'json',
      contentType: 'application/x-www-form-urlencoded'
    };
    const clientId = this.get('clientId');

    if (!Ember.isEmpty(authenticated)) {
      this.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
        const headers = {};
        headers[headerName] = headerValue;
        Ember.merge(options, {
          headers: headers
        });
      });
    } else if (!Ember.isEmpty(clientId)) {
      const base64ClientId = clientId;
      Ember.merge(options, {
        headers: {
          Authorization: `Basic ${base64ClientId}`
        }
      });
    }

    return Ember.$.ajax(options);
  },

  fetchAccessToken: function(oauthCredentials) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      const serverTokenEndpoint = this.get('serverTokenEndpoint');
      this.makeRequest(serverTokenEndpoint, oauthCredentials).then((response) => {
        Ember.run(() => {
          const expiresAt = this._absolutizeExpirationTime(response['expires_in']);
          this._scheduleAccessTokenRefresh(response['expires_in'], expiresAt, response['refresh_token']);
          if (!Ember.isEmpty(expiresAt)) {
            response = Ember.merge(response, {
              'expires_at': expiresAt
            });
          }
          resolve(response);
        });
      }, (xhr) => {
        Ember.run(null, reject, xhr.responseJSON || xhr.responseText);
      });
    });
  },

  fetchOauthData: function() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.get('torii').open('fmf-oauth2').then((oauthData) => {
        Ember.run(() => {
          resolve({
            grant_type: 'authorization_code',
            code: oauthData.authorizationCode,
            redirect_uri: oauthData.redirectUri
          });
        });
      }, (error) => {
        Ember.run(null, reject, error);
      });
    });
  },

  invalidate: function(data) {
    const serverExtraEndpoint = this.get('serverExtraEndpoint');
    const serverTokenRevocationEndpoint = this.get('serverTokenRevocationEndpoint');

    function success(resolve) {
      Ember.run.cancel(this._refreshTokenTimeout);
      delete this._refreshTokenTimeout;
      resolve();
    }
    return new Ember.RSVP.Promise((resolve) => {
      if (Ember.isEmpty(serverTokenRevocationEndpoint)) {
        success.apply(this, [resolve]);
      } else {
        this.makeRequest(serverExtraEndpoint, null, true).then(() => {
          const requests = [];
          Ember.A(['access_token', 'refresh_token']).forEach((tokenType) => {
            const token = data[tokenType];
            if (!Ember.isEmpty(token)) {
              requests.push(this.makeRequest(serverTokenRevocationEndpoint, {
                'token_type_hint': tokenType,
                token
              }));
            }
          });
          const succeed = () => {
            success.apply(this, [resolve]);
          };
          Ember.RSVP.all(requests).then(succeed, succeed);
        });
      }
    });
  }
});
