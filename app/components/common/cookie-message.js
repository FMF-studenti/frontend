import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui', 'inline', 'nag'],

  cookieMessage: function() {
    this.$().nag({
      key: 'cookies_enable',
      value: true,
      path: '/',
      domain: 'fmf.si',
      expires: 365
    });
  }.on('didInsertElement')
});
