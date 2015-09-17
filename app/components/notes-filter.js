import Ember from 'ember';

export default Ember.Component.extend({
  prepareDropdown: function() {
    this.$('.ui.dropdown').dropdown();
  }.on('didInsertElement'),

  department: '0',
  level: '0',
  year: '0',
  subject: '0',

  filterChanged: function() {
    this.sendAction('action', {
      department: this.get('department'),
      level: this.get('level'),
      year: this.get('year'),
      subject: this.get('subject')
    });
  }.observes('department', 'level', 'year', 'subject'),

  levelObserver: function() {
    var levelId = this.get('level');
    var level = this.get('model.levels').findBy('id', levelId);
    var yearsDropdown = this.$('#notes-year-dropdown');

    if (level) {
      var years = level.get('years');
      if (years.indexOf(Number(this.get('year'))) === -1) {
        yearsDropdown.dropdown('set selected', 0);
      }

      yearsDropdown.find('.item').addClass('disabled');
      for (var i = 0; i < years.length; i++) {
        yearsDropdown.find('.item[data-value=' + years[i] + ']').removeClass('disabled');
      }
      yearsDropdown.find('.item').first().removeClass('disabled');
    } else {
      yearsDropdown.find('.item').removeClass('disabled');
    }
  }.observes('level')
});
