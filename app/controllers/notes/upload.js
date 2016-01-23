import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    uploadCompleted: function(data) {
      var name = data['file']['name'];
      this.transitionToRoute('notes.register-file', Number(name.substring(0, name.length - 4)));
    }
  }
});
