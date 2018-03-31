'use strict';

const puppeteer = require('puppeteer');
const notificationService = require('./shared/notification.service');

const url = 'https://news.google.com/news/?ned=jp&gl=JP&hl=ja';
const title = 'GoogleNews';
const selector = '.nuEeue.hzdq5d.ME7ew';

(async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const result = await page.evaluate((selector) => {
    return {
      content: document.querySelector(selector).innerText
    }
  }, selector);

  console.log('result:', result);

  await browser.close();

  notificationService.postMessage(url, title, result.content);
})();
