import {
  capitalizeFirst
}
from '../../../helpers/capitalize-first';
import {
  module, test
}
from 'qunit';

module('Unit | Helper | capitalize-first');

test('it works', function(assert) {
  let result = capitalizeFirst(['word']);
  assert.equal(result, 'Word');
});
