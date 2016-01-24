import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:error-404', 'Unit | Route | error-404', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
