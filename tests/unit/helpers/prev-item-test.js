import Ember from 'ember';
import {
  prevItem
}
from '../../../helpers/prev-item';
import {
  module, test
}
from 'qunit';

module('Unit | Helper | prev-item');

test('it works', function(assert) {
  let model = Ember.A([10, 1, 2, 3]);

  let result1 = prevItem([model, 1]);
  assert.equal(result1, 10);

  let result2 = prevItem([model, 0]);
  assert.equal(result2, 0);
});
