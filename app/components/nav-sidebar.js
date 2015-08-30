import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui', 'left', 'vertical', 'primary', 'inverted', 'menu', 'sidebar'],
  prepareSidebar: function() {
    Ember.$('body').prepend(this.$());
  }.on('didInsertElement'),
});
