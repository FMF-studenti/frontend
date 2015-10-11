import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui', 'stackable', 'grid', 'notes-filter'],

  setupFilters: function() {
    var control = this.get('control');

    this.setProperties({
      department: control['department'] ? control['department'] : 0,
      level: control['level'] ? control['level'] : 0,
      year: control['year'] ? control['year'] : 0,
      subject: control['subject'] ? control['subject'] : 0,
      search: control['search'] ? control['search'] : ''
    });

    this.$('#notes-department-dropdown').dropdown('set selected', String(control['department'] ? control['department'] : 0));
    this.$('#notes-level-dropdown').dropdown('set selected', String(control['level'] ? control['level'] : 0));
    this.$('#notes-year-dropdown').dropdown('set selected', String(control['year'] ? control['year'] : 0));
    this.$('#notes-subject-dropdown').dropdown('set selected', String(control['subject'] ? control['subject'] : 0));
  }.observes('initFilters'),

  prepareDropdown: function() {
    this.$('.ui.dropdown').dropdown();
    this.levelObserver();
  }.on('didInsertElement'),

  department: '0',
  level: '0',
  year: '0',
  subject: '0',
  search: '',

  filterChanged: function() {
    this.sendAction('action', {
      department: Number(this.get('department')),
      level: Number(this.get('level')),
      year: Number(this.get('year')),
      subject: Number(this.get('subject')),
      search: this.get('search')
    });
  }.observes('department', 'level', 'year', 'subject'),

  searchChanged: function() {
    Ember.run.debounce(this, this.filterChanged, 300);
  }.observes('search'),

  departmentObserver: function() {
    this.processSubjects();
  }.observes('department'),

  levelObserver: function() {
    this.processSubjects();

    var levelId = this.get('level');
    var level = this.get('model.levels').findBy('id', levelId);
    var yearsDropdown = this.$('#notes-year-dropdown');
    if (!yearsDropdown) {
      return;
    }

    if (level) {
      var years = level.get('years');
      if (years.indexOf(Number(this.get('year'))) === -1) {
        yearsDropdown.dropdown('set selected', "0");
      }

      yearsDropdown.find('.item').addClass('disabled');
      for (var i = 0; i < years.length; i++) {
        yearsDropdown.find('.item[data-value=' + years[i] + ']').removeClass('disabled');
      }
      yearsDropdown.find('.item').first().removeClass('disabled');
    } else {
      yearsDropdown.find('.item').removeClass('disabled');
    }
  }.observes('level'),

  yearObserver: function() {
    this.processSubjects();
  }.observes('year'),

  processSubjects: function() {
    var departmentId = Number(this.get('department'));
    var department = this.get('model.departments').findBy('id', String(departmentId));
    var levelId = Number(this.get('level'));
    var level = this.get('model.levels').findBy('id', String(levelId));
    var yearId = Number(this.get('year'));
    var year = this.get('model.years').findBy('id', String(yearId));

    var subjectsDropdown = this.$('#notes-subject-dropdown');
    if (!subjectsDropdown) {
      return;
    }

    var subjects = this.get('model.subjects');
    var currentSubject = subjects.findBy('id', this.get('subject'));
    if (currentSubject) {
      if (currentSubject.get('department') !== departmentId || currentSubject.get('level') !== levelId || currentSubject.get('year') !== yearId) {
        subjectsDropdown.dropdown('set selected', "0");
      }
    }

    subjects.forEach(function(subject) {
      if (department && subject.get('department') !== departmentId || level && subject.get('level') !== levelId || year && subject.get('year') !== yearId) {
        subjectsDropdown.find('.item[data-value=' + subject.get('id') + ']').addClass('disabled');
      } else {
        subjectsDropdown.find('.item[data-value=' + subject.get('id') + ']').removeClass('disabled');
      }
    });
    subjectsDropdown.find('.item').first().removeClass('disabled');
  }
});
