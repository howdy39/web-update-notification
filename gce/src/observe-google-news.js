'use strict';

const puppeteer = require('puppeteer');
const notificationService = require('./shared/notification.service');

(async () => {
  const url = 'https://news.google.com/news/?ned=jp&gl=JP&hl=ja';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const result = await page.evaluate(() => {
    return {
      content: document.querySelector('.nuEeue.hzdq5d.ME7ew').innerText
    };
  });

  console.log('result:', result);

  await browser.close();

  notificationService.postMessage(url, 'GoogleNews', result.content);
})();
