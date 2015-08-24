import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params, hash) {
    let key = params[0];

    switch (key) {
      case 'name':
        return this.get('settings.name');
      default:
      return 'UNKNOWN!';
    }
  }
});
