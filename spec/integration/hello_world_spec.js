import PhantomJS from 'phantomjs-adapter';

describe('Hello World', () => {
  it('serves a "Hello World!" message', async () => {
    const browser = new PhantomJS();
    await browser.open('http://localhost:8080');

    const paragraph = await browser.find('p', {wait: 2000});
    expect(paragraph.textContent).toBe('Hello World!');

    await browser.exit();
  });
});
