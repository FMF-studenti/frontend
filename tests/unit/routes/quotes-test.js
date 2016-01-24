import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:quotes', 'Unit | Route | quotes', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
