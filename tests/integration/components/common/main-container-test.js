import {
  moduleForComponent, test
}
from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('common/main-container', 'Integration | Component | common/main-container', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs `{{common/main-container}}`);

  assert.ok(this.$().text().trim().length > 0);
});
