import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:notes/list/index', 'Unit | Route | notes/list/index', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
