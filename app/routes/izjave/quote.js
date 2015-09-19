import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('quote', params.quote_id);
  },

  actions: {
    deleteQuote() {
      var controller = this.get('controller');
      function transitionTo() {
        controller.transitionToRoute('izjave');
      }

      function failure(reason) {
        // handle the error
      }

      this.get('controller.model').destroyRecord().then(transitionTo).catch(failure);
    }
  }
});
