import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params /*, hash*/ ) {
    return this.get('settings.' + params[0]);
  }
});
