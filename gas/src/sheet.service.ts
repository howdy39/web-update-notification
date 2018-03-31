import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import { Message } from './model';
import { SPREAD_SHEET_ID } from './environments';

export class SheetService {
  static writeNewLine(message: Message): Spreadsheet {
    const ss = SpreadsheetApp.openById(SPREAD_SHEET_ID);
    const newRow = ss.getLastRow() + 1;
    const range = ss.getRange(`A${newRow}:D${newRow}`);
    const now = new Date();
    range.setValues([[now, message.url, message.title, message.description]]);
    return ss;
  }

  static isChangedDescription(ss: Spreadsheet): boolean {
    const previousRow = ss.getLastRow() - 1;
    const newRow = previousRow + 1;
    const previousDescription = ss.getRange(`D${previousRow}`).getValue();
    const newDescription = ss.getRange(`D${newRow}`).getValue();

    console.log('previousDescription:', previousDescription);
    console.log('newDescription:', newDescription);

    return previousDescription != newDescription;
  }
}
