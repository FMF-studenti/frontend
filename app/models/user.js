import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  username: DS.attr('string'),
  avatar: DS.attr('string'),
  messages: DS.attr('number'),
  administrator: DS.attr('boolean'),
  error: DS.attr('boolean')
});
