import {
  moduleFor, test
}
from 'ember-qunit';

moduleFor('route:quotes/quote', 'Unit | Route | quotes/quote', {
  needs: ['service:metrics']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
