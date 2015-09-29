import Ember from 'ember';

export function groupValidate(params /*, hash*/ ) {
  if (params[1] === 0 || params[0].get('time').getMonth() !== params[1].get('time').getMonth()) {
    return true;
  } else {
    return false;
  }
}

export default Ember.Helper.helper(groupValidate);
