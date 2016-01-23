import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  isErrorPage: function() {
    var value = this.get('currentRouteName').indexOf('error-') !== -1;
    return value;
  }.observes('currentRouteName'),

  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    },
    authenticate: function() {
      this.get('session').authenticate('authenticator:torii-oauth2', this.get('torii')).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
