import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:notes/register-file', 'Unit | Route | notes/register-file', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
