import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui', 'primary', 'fixed', 'inverted', 'borderless', 'main', 'menu'],
  session: Ember.inject.service('session'),
  prepareSidebar: function() {
    Ember.$('body').prepend(this.$());
    Ember.$('.ui.sidebar').sidebar({
      transition: 'overlay'
    }).sidebar('attach events', '.hamburger.item');
  }.on('didInsertElement'),
  prepareDropdowns: function() {
    this.$().find('.dropdown').dropdown({
      on: 'hover',
      action: 'nothing'
    });
  }.on('didRender'),
  actions: {
    authenticate: function() {
      this.sendAction('authenticate');
    },
    invalidateSession: function() {
      this.sendAction('invalidateSession');
    }
  }
});
