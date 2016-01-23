import Ember from 'ember';
import InfinityRoute from 'ember-infinity/mixins/route';
import InfinityExtra from 'fmf/mixins/infinity-extra';
import SessionLoginStay from 'fmf/mixins/session-login-stay';

export default Ember.Route.extend(SessionLoginStay, InfinityRoute, InfinityExtra, {
  model: function() {
    return this.infinityModel('quote', {
      perPage: 12,
      startingPage: 1
    });
  }
});
