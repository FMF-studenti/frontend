import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  departmentObserver: function() {
    this.processSubjects();
  }.observes('department'),

  levelObserver: function() {
    this.processSubjects();

    var levelId = this.get('level');
    var level = this.get('filters.levels').findBy('id', levelId);
    var yearsDropdown = Ember.$('#notes-add-year-dropdown');
    if (!yearsDropdown) {
      return;
    }

    if (level) {
      var years = level.get('years');
      if (years.indexOf(Number(this.get('year'))) === -1) {
        yearsDropdown.dropdown('restore defaults');
      }

      yearsDropdown.find('.item').hide();
      for (var i = 0; i < years.length; i++) {
        yearsDropdown.find('.item[data-value=' + years[i] + ']').show();
      }
    } else {
      yearsDropdown.find('.item').show();
    }
  }.observes('level'),

  yearObserver: function() {
    this.processSubjects();
  }.observes('year'),

  processSubjects: function() {
    var departmentId = Number(this.get('department'));
    var department = this.get('filters.departments').findBy('id', String(departmentId));
    var levelId = Number(this.get('level'));
    var level = this.get('filters.levels').findBy('id', String(levelId));
    var yearId = Number(this.get('year'));
    var year = this.get('filters.years').findBy('id', String(yearId));

    var subjectsDropdown = Ember.$('#notes-add-subject-dropdown');
    if (!subjectsDropdown) {
      return;
    }

    var subjects = this.get('filters.subjects');
    var currentSubject = subjects.findBy('id', this.get('subject'));
    if (currentSubject) {
      if (currentSubject.get('department') !== departmentId || currentSubject.get('level') !== levelId || currentSubject.get('year') !== yearId) {
        subjectsDropdown.dropdown('restore defaults');
      }
    }

    subjects.forEach(function(subject) {
      if (!department || subject.get('department') !== departmentId || !level || subject.get('level') !== levelId || !year || subject.get('year') !== yearId) {
        subjectsDropdown.find('.item[data-value=' + subject.get('id') + ']').hide();
      } else {
        subjectsDropdown.find('.item[data-value=' + subject.get('id') + ']').show();
      }
    });
  }
});
