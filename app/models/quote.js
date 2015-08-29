import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  content: DS.attr('string')
});
