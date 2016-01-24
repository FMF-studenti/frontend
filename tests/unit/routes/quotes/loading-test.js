import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:quotes/loading', 'Unit | Route | quotes/loading', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
