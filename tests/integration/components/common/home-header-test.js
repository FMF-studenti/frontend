import {
  moduleForComponent, test
}
from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('common/home-header', 'Integration | Component | common/home-header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs `{{common/home-header}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs `
    {{common/home-header title="Študentske strani FMF"}}
  `);

  assert.equal(this.$().text().trim(), 'Študentske strani FMF');
});
