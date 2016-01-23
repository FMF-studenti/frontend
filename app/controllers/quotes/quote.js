import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    deleteQuote: function() {
      var controller = this;

      function transitionTo() {
        controller.transitionToRoute('quotes');
      }

      function failure() {
        // handle the error
      }

      this.get('model').destroyRecord().then(transitionTo).catch(failure);
    }
  }
});
