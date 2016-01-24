import {
  moduleForComponent, test
}
from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('notes-upload', 'Integration | Component | notes-upload', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs `{{notes-upload}}`);

  assert.equal(this.$().text().trim(), '');
});
