import Ember from 'ember';

export default Ember.Component.extend({
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
