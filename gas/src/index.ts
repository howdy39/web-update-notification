import TextOutput = GoogleAppsScript.Content.TextOutput;
import { SheetService } from './sheet.service';
import { Message } from './model';

declare const global: any;

global.doGet = (e: any): TextOutput => {
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent('doGet!!!5');
  return output;
};

global.doPost = (e: any): TextOutput => {
  console.log(e);
  console.log(e.parameters);
  console.log(e.postData.contents);
  console.log(e.postData.name);
  var jsonString = decodeURIComponent(e.postData.getDataAsString());
  console.log(jsonString);
  var data = JSON.parse(jsonString);
  console.log(data);

  SheetService.writeNewLine(data);

  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent('doPost!!!');
  return output;
};



global.test_doPost = (e: any): void => {
  let message: Message = {
    url: 'urldes',
    title: 'titledes',
    description: 'descriptiondes'
  };
  SheetService.writeNewLine(message);
};
