import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  year: DS.attr('number'),
  level: DS.attr('number'),
  department: DS.attr('number'),
  others: DS.attr('boolean')
});
