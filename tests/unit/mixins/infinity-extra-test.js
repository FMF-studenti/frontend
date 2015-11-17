import Ember from 'ember';
import InfinityExtraMixin from '../../../mixins/infinity-extra';
import { module, test } from 'qunit';

module('Unit | Mixin | infinity extra');

// Replace this with your real tests.
test('it works', function(assert) {
  let InfinityExtraObject = Ember.Object.extend(InfinityExtraMixin);
  let subject = InfinityExtraObject.create();
  assert.ok(subject);
});
