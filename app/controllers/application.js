import Ember from 'ember';

export default Ember.Controller.extend({
  isErrorPage: function() {
    var value = this.get('currentRouteName').indexOf('error-') !== -1;
    return value;
  }.observes('currentRouteName')
});
