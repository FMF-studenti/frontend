import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  setupController(controller) {
    Ember.run.scheduleOnce('afterRender', function() {
      Ember.$('#quote-add').form({
        fields: {
          author   : 'empty',
          content  : 'empty'
        }
      });
    });
  },

  actions: {
    addQuote() {
      var store = this.get('store');
      var quote = store.createRecord('quote', {
        author: this.get('controller.author'),
        content: this.get('controller.content')
      });

      var controller = this.get('controller');
      function transitionTo(quote) {
        controller.set('author', null);
        controller.set('content', null);
        controller.transitionToRoute('izjave.quote', quote);
      }

      function failure(reason) {
        // handle the error
      }

      quote.save().then(transitionTo).catch(failure);
    }
  }
});
