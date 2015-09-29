import Ember from 'ember';

export function prevItem(params /*, hash*/ ) {
  if (params[1] !== 0) {
    return params[0].objectAt(params[1] - 1);
  } else {
    return 0;
  }
}

export default Ember.Helper.helper(prevItem);
