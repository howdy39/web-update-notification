'use strict';

const fetch = require('node-fetch');

function notificationService() {};
function postMessage(url, title, description) {

  const bodyJson = {
    url,
    title,
    description,
  };

  fetch(<your_doPost_url>, {
    method: 'post',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(bodyJson)
  });
}

module.exports = notificationService;
notificationService.postMessage = postMessage;
