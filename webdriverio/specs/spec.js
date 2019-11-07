const assert = require('assert');

describe('WebdriverIO Example', () => {
  it('should take snapshot of homepage', async () => {
    await browser.url('https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/')
    const title = await browser.getTitle()

    assert.strictEqual(title, 'Shadow DOM 101 - HTML5 Rocks')

    await projectLogo.waitForDisplayed(3000);
    assert.ok(projectLogo.isDisplayed);
  });
});
