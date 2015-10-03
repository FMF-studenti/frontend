import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var session = this.get('session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    this.transitionTo('index');
  }
});
