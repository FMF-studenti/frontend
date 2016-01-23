import Ember from 'ember';
import SessionLoginStayMixin from '../../../mixins/session-login-stay';
import { module, test } from 'qunit';

module('Unit | Mixin | session login stay');

// Replace this with your real tests.
test('it works', function(assert) {
  let SessionLoginStayObject = Ember.Object.extend(SessionLoginStayMixin);
  let subject = SessionLoginStayObject.create();
  assert.ok(subject);
});
