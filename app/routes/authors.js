import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Avtorji',
  model: function() {
    return this.store.findAll('author');
  }
});
