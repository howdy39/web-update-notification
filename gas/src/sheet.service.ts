import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import Sheet = GoogleAppsScript.Spreadsheet.Sheet;
import { Message } from './model';
import { SPREAD_SHEET_ID } from './environments';

export class SheetService {
  private ss: Spreadsheet;

  constructor() {
    this.ss = SpreadsheetApp.openById(SPREAD_SHEET_ID);
  }

  private getSheet(sheetName: string): Sheet {
    let sheet = this.ss.getSheetByName(sheetName);
    if (sheet === null) {
      sheet = this.ss.insertSheet(sheetName);
      const range = sheet.getRange('A1:D1');
      range.setValues([['date', 'url', 'title', 'description']]);
    }
    return sheet;
  }

  writeNewLine(message: Message): void {
    const sheet = this.getSheet(message.title);
    const newRow = sheet.getLastRow() + 1;
    const range = sheet.getRange(`A${newRow}:D${newRow}`);
    const now = new Date();
    range.setValues([[now, message.url, message.title, message.description]]);
  }

  isChangedDescription(message: Message): boolean {
    const sheet = this.getSheet(message.title);

    const previousRow = sheet.getLastRow() - 1;
    const newRow = previousRow + 1;
    const previousDescription = sheet.getRange(`D${previousRow}`).getValue();
    const newDescription = sheet.getRange(`D${newRow}`).getValue();

    console.log('previousDescription:', previousDescription);
    console.log('newDescription:', newDescription);

    return previousDescription != newDescription;
  }
}
