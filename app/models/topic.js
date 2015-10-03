import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  lastPoster: DS.attr('string'),
  lastPosterAvatar: DS.attr('string'),
  updated: DS.attr('date')
});
