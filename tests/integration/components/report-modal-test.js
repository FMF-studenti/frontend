import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('report-modal', 'Integration | Component | report modal', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{report-modal type="report-type" title="Report title"}}`);

  assert.ok(this.$('.ui.modal').hasClass('report-type'));
  assert.equal(this.$('.header').text().trim(), 'Report title');
});
