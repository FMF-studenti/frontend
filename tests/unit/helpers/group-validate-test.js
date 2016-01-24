import Ember from 'ember';
import {
  groupValidate
}
from '../../../helpers/group-validate';
import {
  module, test
}
from 'qunit';

module('Unit | Helper | group-validate');

test('it works', function(assert) {
  let item1 = Ember.Object.create({
    time: new Date(12345678900)
  });
  let item2 = Ember.Object.create({
    time: new Date(1)
  });

  let result1 = groupValidate([item1, item2]);
  assert.equal(result1, true);

  let result2 = groupValidate([item1, item1]);
  assert.equal(result2, false);

  let result3 = groupValidate([item1, 0]);
  assert.equal(result3, true);
});
