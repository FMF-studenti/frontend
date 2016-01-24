import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:notes/list/loading', 'Unit | Route | notes/list/loading', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
