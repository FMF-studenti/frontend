import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.controllerFor('application').send('invalidateSession');
    this.transitionTo('index');
  }
});
