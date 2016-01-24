import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:cookies', 'Unit | Route | cookies', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
