import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: [
    'department',
    'level',
    'year',
    'subject'
  ],
  department: null,
  level: null,
  year: null,
  subject: null,

  notesQuery: function() {
    return {
      'department': this.get('department'),
      'level': this.get('level'),
      'year': this.get('year'),
      'subject': this.get('subject')
    };
  }.property('department', 'level', 'year', 'subject'),

  actions: {
    filtersChanged: function(filters) {
      this.set('department', filters.department ? filters.department : null);
      this.set('level', filters.level ? filters.level : null);
      this.set('year', filters.year ? filters.year : null);
      this.set('subject', filters.subject ? filters.subject : null);
    }
  }
});
