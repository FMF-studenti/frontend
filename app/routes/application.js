import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import moment from 'moment';

export default Ember.Route.extend(ApplicationRouteMixin, {
  title: function(tokens) {
    var base = this.get('settings.name');
    var hasTokens = tokens && tokens.length;

    return hasTokens ? tokens.reverse().join(' - ') + ' - ' + base : base;
  },

  beforeModel() {
    moment.locale('sl');
  },

  model: function() {
    return this.store.findAll('externalLink');
  }
});
