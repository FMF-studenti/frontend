import Ember from 'ember';

export default Ember.Service.extend({
  name: 'Študentske strani FMF',

  url: {
    forum: 'https://forum.fmf.si',
    revija: 'https://revija.fmf.si',
    notes: 'https://zapiski.fmf.si'
  }
});
