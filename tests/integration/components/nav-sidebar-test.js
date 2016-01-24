import {
  moduleForComponent, test
}
from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-sidebar', 'Integration | Component | nav-sidebar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs `{{nav-sidebar}}`);

  assert.equal(this.$().text().trim(), '');
});
