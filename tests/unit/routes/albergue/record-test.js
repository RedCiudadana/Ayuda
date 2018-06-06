import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | albergue/record', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:albergue/record');
    assert.ok(route);
  });
});
