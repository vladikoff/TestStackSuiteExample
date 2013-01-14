define([
  'teststack!tdd',
  'teststack/lib/assert'
], function (test, assert) {
  test.suite('suiteBrowser', function () {
    /**
     * Basic browser test, pushState
     */
    test.test('testPushState', function () {
      assert.is('pushState' in history, true);
    });
  });
});
