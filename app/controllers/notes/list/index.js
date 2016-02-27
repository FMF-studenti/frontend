import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  parentController: Ember.inject.controller('notes/list'),

  actions: {
    report: function(id) {
      let modal = Ember.$('.ui.modal.report-note');
      modal.find('input[name=item-number]').val(id);
      modal.find('.item-number').text('#' + id);
      modal.modal('show');
    }
  }
});
