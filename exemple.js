const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless:false
  });
  const page = await browser.newPage();
  await page.setViewport({width:1600, height:900})
  await page.goto('https://taskray.com/');
  await page.waitFor(2000);
  await page.click('a.et_pb_button_0');

  await page.waitFor(2000);
  await browser.close();
})();