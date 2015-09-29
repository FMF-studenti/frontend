import DS from 'ember-data';

export default DS.Model.extend({
  file: DS.attr('string'),
  title: DS.attr('string'),
  subject: DS.attr('string'),
  author: DS.attr('string'),
  uploader: DS.attr('string'),
  description: DS.attr('string'),
  time: DS.attr('date')
});
