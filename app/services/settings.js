import Ember from 'ember';

export default Ember.Service.extend({
  name: 'Študentske strani FMF',

  url: {
    forum: 'http://forum.fmf.si',
    revija: 'http://revija.fmf.si',
    notes: 'http://zapiski.fmf.si'
  }
});
