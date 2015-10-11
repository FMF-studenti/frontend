import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Zapiski',

  model: function() {
    return Ember.RSVP.hash({
      departments: this.store.findAll('notes/department'),
      levels: this.store.findAll('notes/level'),
      years: this.store.findAll('notes/year'),
      subjects: this.store.findAll('notes/subject')
    });
  }
});
