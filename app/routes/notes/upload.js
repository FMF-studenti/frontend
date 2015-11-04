import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Naloži',

  actions: {
    uploadCompleted: function(data) {
      var name = data['file']['name'];
      this.get('controller').transitionTo('notes.register-file', Number(name.substring(0, name.length - 4)));
    }
  }
});
