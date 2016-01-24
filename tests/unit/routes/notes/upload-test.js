import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:notes/upload', 'Unit | Route | notes/upload', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
