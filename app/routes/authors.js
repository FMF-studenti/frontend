import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Avtorji',
  model() {
    return this.store.findAll('author');
  }
});
