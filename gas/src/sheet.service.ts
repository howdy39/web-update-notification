import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import { Message } from './model';

export class SheetService {
  static writeNewLine(message: Message): Spreadsheet {
    const ss = SpreadsheetApp.getActive();
    const lastRow = ss.getLastRow();
    const range = ss.getRange(`A${lastRow}:D${lastRow}`);
    const now = new Date();
    range.setValues([[now, message.url, message.title, message.description]]);
    return ss;
  }
}
