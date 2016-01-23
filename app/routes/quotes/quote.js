import Ember from 'ember';
import SessionLoginStay from 'fmf/mixins/session-login-stay';

export default Ember.Route.extend(SessionLoginStay, {
  titleToken: 'Izbrana modrost',

  model: function(params) {
    return this.store.findRecord('quote', params.quote_id);
  }
});
