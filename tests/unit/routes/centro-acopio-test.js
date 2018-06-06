import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | centro-acopio', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:centro-acopio');
    assert.ok(route);
  });
});
