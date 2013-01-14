define([
  'teststack!tdd',
  'teststack/lib/assert'
], function (test, assert) {
  test.suite('suiteExample', function () {

    /**
     * Basic assert.is test
     */
    test.test('testAssertIs', function () {
      assert.is([0, 1, 2], [0, 1, 2]);
    });
  });
});
