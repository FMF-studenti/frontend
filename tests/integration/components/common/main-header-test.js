import {
  moduleForComponent, test
}
from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('common/main-header', 'Integration | Component | common/main-header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs `{{common/main-header}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs `
    {{common/main-header title="Zapiski" subtitle="Literatura"}}
  `);

  assert.equal(this.$().text().trim().replace(/\s+/g, ''), 'ZapiskiLiteratura');
});
