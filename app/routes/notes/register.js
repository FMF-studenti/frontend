import Ember from 'ember';
import SessionLoginStay from 'fmf/mixins/session-login-stay';

export default Ember.Route.extend(SessionLoginStay, {
  titleToken: 'Vnos',

  model: function() {
    if (this.get('session.isAuthenticated')) {
      return this.store.findAll('notes/file');
    } else {
      return [];
    }
  }
});
