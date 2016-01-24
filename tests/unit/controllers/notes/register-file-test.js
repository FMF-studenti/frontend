import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('controller:notes/register-file', 'Unit | Controller | notes/register file', {
  needs: ['service:metrics']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
