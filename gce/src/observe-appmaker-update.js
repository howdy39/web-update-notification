'use strict';

const puppeteer = require('puppeteer');
const notificationService = require('./shared/notification.service');

const url = 'https://developers.google.com/appmaker/release-notes';
const title = 'App Maker Update';
const titleSelector = '.devsite-article-body h2+p';
const contentSelector = '.devsite-article-body h2';

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

