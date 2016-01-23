import Ember from 'ember';

export default Ember.Mixin.create({
  session: Ember.inject.service('session'),

  beforeModel: function(transition) {
    if (!this.get('session.isAuthenticated')) {
      this.set('session.attemptedTransition', transition);
    }
  }
});
