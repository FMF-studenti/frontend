import Ember from 'ember';
import SessionLoginStay from 'fmf/mixins/session-login-stay';

export default Ember.Route.extend(SessionLoginStay, {
  titleToken: 'Pomoč'
});
