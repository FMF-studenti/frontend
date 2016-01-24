import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:notes/register', 'Unit | Route | notes/register', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
