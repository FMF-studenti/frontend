import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:notes/loading', 'Unit | Route | notes/loading', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
