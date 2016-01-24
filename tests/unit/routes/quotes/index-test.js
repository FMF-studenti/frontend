import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:quotes/index', 'Unit | Route | quotes/index', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
