import {
  moduleForComponent, test
}
from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('common/main-footer', 'Integration | Component | common/main-footer', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs `{{common/main-footer}}`);

  assert.ok(this.$().text().trim().length > 0);
});
