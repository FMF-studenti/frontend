import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Zapiski',

  model: function() {
    return Ember.RSVP.hash({
      departments: this.store.findAll('department'),
      levels: this.store.findAll('level'),
      years: this.store.findAll('year'),
      subjects: this.store.findAll('subject')
    });
  }
});
