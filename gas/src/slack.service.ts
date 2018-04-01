import { Message, SlackMessage } from './model';
import UrlFetchApp = GoogleAppsScript.URL_Fetch.UrlFetchApp;
import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;
import { SLACK_POST_CHANNEL, SLACK_POST_URL } from './environments';

export class SlackService {
  static postMessage(message: Message): void {
    let slackMessage: SlackMessage = {
      channel: SLACK_POST_CHANNEL,
      username: message.title,
      text: [message.description, message.url].join('\n')
    };
    const url = SLACK_POST_URL;
    const options: URLFetchRequestOptions = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(slackMessage)
    };
    UrlFetchApp.fetch(url, options);
  }
}
