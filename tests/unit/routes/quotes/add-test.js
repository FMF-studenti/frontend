import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:quotes/add', 'Unit | Route | quotes/add', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
