import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('controller:notes/register', 'Unit | Controller | notes/register', {
  needs: ['service:metrics']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
