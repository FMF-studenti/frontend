import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:notes/help', 'Unit | Route | notes/help', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
