import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  titleToken: 'Dodaj',

  setupController: function() {
    Ember.run.scheduleOnce('afterRender', function() {
      Ember.$('#quote-add').form({
        fields: {
          author: 'empty',
          content: 'empty'
        }
      });
    });
  },

  actions: {
    addQuote: function() {
      var store = this.get('store');
      var quote = store.createRecord('quote', {
        author: this.get('controller.author'),
        content: this.get('controller.content')
      });

      var controller = this.get('controller');

      function transitionTo(quote) {
        controller.set('author', null);
        controller.set('content', null);
        controller.transitionToRoute('quotes.quote', quote);
      }

      function failure() {
        // handle the error
      }

      quote.save().then(transitionTo).catch(failure);
    }
  }
});
