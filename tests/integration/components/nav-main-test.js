import {
  moduleForComponent, test
}
from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-main', 'Integration | Component | nav-main', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs `{{nav-main}}`);

  assert.equal(this.$().text().trim(), '');
});
