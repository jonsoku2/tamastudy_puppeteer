const puppeteer = require('puppeteer');
const fs = require('fs');

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com', { waitUntil: 'networkidle2' });
  await page.waitFor(5000);
  // content : html 전체
  const html = await page.content();
  fs.writeFileSync('example.html', html);
  await browser.close();
};

main();
