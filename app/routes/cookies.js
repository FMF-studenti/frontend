import Ember from 'ember';
import SessionLoginStay from 'fmf/mixins/session-login-stay';

export default Ember.Route.extend(SessionLoginStay, {
  titleToken: 'Piškotki',

  actions: {
    cookieConfirm: function() {
      Ember.$('.ui.inline.nag').find('.close').click();
    },

    cookieDelete: function() {
      Ember.$('.ui.inline.nag').nag('clear').nag('show');
    }
  }
});
