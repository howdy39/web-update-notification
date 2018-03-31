import TextOutput = GoogleAppsScript.Content.TextOutput;
import { SheetService } from './sheet.service';
import { Message } from './model';
import { SlackService } from './slack.service';

declare const global: any;

global.doGet = (e: any): TextOutput => {
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent('doGet!!!5');
  return output;
};

global.doPost = (e: any): void => {
  console.log('e.postData.getDataAsString():', e.postData.getDataAsString());
  const jsonString = decodeURIComponent(e.postData.getDataAsString());
  const message: Message = JSON.parse(jsonString);
  doPost(message);
};

global.test_doPost = (e: any): void => {
  const message: Message = {
    url: 'urldes',
    title: 'titledes',
    description: 'descriptiondes'
  };
  doPost(message);
};

function doPost(message: Message) {
  const ss = SheetService.writeNewLine(message);
  if (SheetService.isChangedDescription(ss)) {
    SlackService.postMessage(message);
  }
}
