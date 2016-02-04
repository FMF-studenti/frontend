import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:quotes/edit', 'Unit | Route | quotes/edit', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
