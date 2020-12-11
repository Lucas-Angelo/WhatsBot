const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false,
      userDataDir: './myUserDataDir',
  });
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com');

  await new Promise(resolve => setTimeout(resolve, 20000));

  await page.click('[title="Andre Barros"]')

  await page.type('footer .selectable-text', "coé by bot")

  await page.click('[data-icon="send"]')
  
  await new Promise(resolve => setTimeout(resolve, 5000));
  await browser.close();
})();