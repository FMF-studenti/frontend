import Ember from 'ember';
import SessionLoginStay from 'fmf/mixins/session-login-stay';

export default Ember.Route.extend(SessionLoginStay, {
  titleToken: 'Seznam',

  queryParams: {
    department: {
      replace: true,
      refreshModel: true
    },
    level: {
      replace: true,
      refreshModel: true
    },
    year: {
      replace: true,
      refreshModel: true
    },
    subject: {
      replace: true,
      refreshModel: true
    },
    search: {
      replace: true,
      refreshModel: true
    }
  },

  resetController: function(controller, isExiting) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.set('department', null);
      controller.set('level', null);
      controller.set('year', null);
      controller.set('subject', null);
    }
  },

  model: function() {
    return this.modelFor('notes');
  }
});
