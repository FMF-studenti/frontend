import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Izbrana modrost',

  model: function(params) {
    return this.store.findRecord('quote', params.quote_id);
  },

  actions: {
    deleteQuote: function() {
      var controller = this.get('controller');

      function transitionTo() {
        controller.transitionToRoute('izjave');
      }

      function failure() {
        // handle the error
      }

      this.get('controller.model').destroyRecord().then(transitionTo).catch(failure);
    }
  }
});
