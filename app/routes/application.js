import Ember from 'ember';

export default Ember.Route.extend({
  title: function(tokens) {
    var base = this.get('settings.name');
    var hasTokens = tokens && tokens.length;

    return hasTokens ? tokens.reverse().join(' - ') + ' - ' + base : base;
  }
});
