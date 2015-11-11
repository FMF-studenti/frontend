import Ember from 'ember';

export default Ember.Route.extend({
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
