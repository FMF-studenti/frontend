import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: [
    'department',
    'level',
    'year',
    'subject',
    'search'
  ],
  department: null,
  level: null,
  year: null,
  subject: null,
  search: null,

  initFilters: false,

  notesQuery: function() {
    return {
      'department': this.get('department'),
      'level': this.get('level'),
      'year': this.get('year'),
      'subject': this.get('subject'),
      'search': this.get('search')
    };
  }.property('department', 'level', 'year', 'subject', 'search'),

  actions: {
    filtersChanged: function(filters) {
      this.set('department', filters.department ? filters.department : null);
      this.set('level', filters.level ? filters.level : null);
      this.set('year', filters.year ? filters.year : null);
      this.set('subject', filters.subject ? filters.subject : null);
      this.set('search', filters.search ? filters.search : null);
    },

    report: function(id) {
      let modal = Ember.$('.ui.modal.report-note');
      modal.find('input[name=item-number]').val(id);
      modal.find('.item-number').text('#' + id);
      modal.modal('show');
    }
  }
});
