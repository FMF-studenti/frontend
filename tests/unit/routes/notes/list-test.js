import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:notes/list', 'Unit | Route | notes/list', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
