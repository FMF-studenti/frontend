import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import moment from 'moment';

export default Ember.Route.extend(ApplicationRouteMixin, {
  title: function(tokens) {
    var base = this.get('settings.name');
    var hasTokens = tokens && tokens.length;

    return hasTokens ? tokens.reverse().join(' - ') + ' - ' + base : base;
  },

  beforeModel() {
    moment.locale('sl');
  },

  model: function() {
    return this.store.findAll('externalLink');
  },

  actions: {
    authenticate: function(provider) {
      this.get('session').authenticate('authenticator:torii-oauth2', {
        torii: this.get('torii'),
        provider: provider
      }, function(error) {
        alert('There was an error when trying to sign you in: ' + error);
      });
    }
  }
});
