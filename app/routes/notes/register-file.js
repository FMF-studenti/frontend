import Ember from 'ember';
import SessionLoginStay from 'fmf/mixins/session-login-stay';

export default Ember.Route.extend(SessionLoginStay, {
  titleToken: 'Vnos',

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('filters', this.modelFor('notes'));

    Ember.run.scheduleOnce('afterRender', function() {
      var form = Ember.$('#note-register');
      form.form({
        fields: {
          title: 'empty',
          author: 'empty',
          uploader: 'empty',
          department: 'empty',
          level: 'empty',
          year: 'empty',
          subject: 'empty',
          description: 'empty'
        }
      });
      form.find('.ui.dropdown').dropdown();

      controller.processSubjects();
    });
  },

  model: function(params) {
    return this.store.findRecord('notes/file', params.file_id);
  },

  actions: {
    registerNote: function() {
      var store = this.get('store');
      var note = store.createRecord('notes/note', {
        file: this.get('controller.model').get('name'),
        title: this.get('controller.title'),
        author: this.get('controller.author'),
        uploader: this.get('controller.uploader'),
        subject: this.get('controller.subject'),
        description: this.get('controller.description')
      });

      var controller = this.get('controller');

      function transitionTo() {
        controller.set('title', null);
        controller.set('author', null);
        controller.set('uploader', null);
        controller.set('department', null);
        controller.set('level', null);
        controller.set('year', null);
        controller.set('subject', null);
        controller.set('description', null);

        controller.get('model').deleteRecord();
        controller.transitionToRoute('notes.list');
      }

      function failure() {
        // handle the error
      }

      note.save().then(transitionTo).catch(failure);
    }
  }
});
