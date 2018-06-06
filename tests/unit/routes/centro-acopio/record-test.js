import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | centro-acopio/record', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:centro-acopio/record');
    assert.ok(route);
  });
});
