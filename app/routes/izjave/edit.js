import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  titleToken: 'Uredi',

  setupController: function(controller, model) {
    controller.set('model', model);
    Ember.run.scheduleOnce('afterRender', function() {
      Ember.$('#quote-edit').form({
        fields: {
          author: 'empty',
          content: 'empty'
        }
      });
    });
  },
  model: function(params) {
    return this.store.findRecord('quote', params.quote_id);
  },

  actions: {
    updateQuote: function() {
      var controller = this.get('controller');
      var item = this.get('controller.model');

      function transitionTo() {
        controller.transitionToRoute('izjave.quote', item);
      }

      function failure() {
        // handle the error
      }

      item.save().then(transitionTo).catch(failure);
    }
  }
});
