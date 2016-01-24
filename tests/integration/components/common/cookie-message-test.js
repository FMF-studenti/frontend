import {
  moduleForComponent, test
}
from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('common/cookie-message', 'Integration | Component | common/cookie-message', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs `{{common/cookie-message}}`);

  assert.equal(this.$().text().trim(), 'Za izboljšano izkušnjo na spletnih straneh uporabljamo piškotke');
});
