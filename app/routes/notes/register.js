import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Vnos',

  model: function() {
    return this.store.findAll('notes/file');
  }
});
