import Ember from 'ember';

export default Ember.Controller.extend({
  parentController: Ember.inject.controller('notes/list')
});
