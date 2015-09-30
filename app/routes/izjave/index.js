import Ember from 'ember';
import InfinityRoute from 'ember-infinity/mixins/route';
import InfinityExtra from 'fmf/mixins/infinity-extra';

export default Ember.Route.extend(InfinityRoute, InfinityExtra, {
  model: function() {
    return this.infinityModel('quote', {
      perPage: 12,
      startingPage: 1
    });
  }
});
