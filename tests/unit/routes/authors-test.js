import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:authors', 'Unit | Route | authors', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
