'use strict';

const puppeteer = require('puppeteer');
const notificationService = require('./shared/notification.service');

const url = 'https://developers.google.com/apps-script/';
const title = 'GAS Update';
const titleSelector = '.devsite-landing-row.devsite-landing-row-2-up h3';
const contentSelector = '.devsite-landing-row.devsite-landing-row-2-up .devsite-landing-row-item-description-content li';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const result = await page.evaluate((titleSelector, contentSelector) => {
    return {
      title: document.querySelector(titleSelector).innerText,
      content: document.querySelector(contentSelector).innerText
    };
  }, titleSelector, contentSelector);

  console.log('result:', result);

  await browser.close();

  notificationService.postMessage(url, title, [result.title, result.content].join('\n'));
})();

