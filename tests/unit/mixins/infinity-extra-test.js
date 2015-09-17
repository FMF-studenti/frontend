import Ember from 'ember';
import InfinityExtraMixin from '../../../mixins/infinity-extra';
import { module, test } from 'qunit';

module('Unit | Mixin | infinity extra');

// Replace this with your real tests.
test('it works', function(assert) {
  var InfinityExtraObject = Ember.Object.extend(InfinityExtraMixin);
  var subject = InfinityExtraObject.create();
  assert.ok(subject);
});
