import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:notes/index', 'Unit | Route | notes/index', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
