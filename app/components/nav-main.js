import Ember from 'ember';

export default Ember.Component.extend({
  prepareDropdowns: function() {
    this.$().find('.dropdown').dropdown({
      on: 'hover'
    });
  }.on('didInsertElement')
});
