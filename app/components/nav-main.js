import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui', 'primary', 'fixed', 'inverted', 'borderless', 'main', 'menu'],
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
    authenticate: function(provider) {
      this.sendAction('action', provider);
    },
    invalidateSession: function() {
      this.get('session').invalidate();
    }
  }
});
