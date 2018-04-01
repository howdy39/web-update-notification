# web-update-notification
ヘッドレス Chrome を利用した Web 更新通知システム。  
RSS が用意されていないような Web サイトを DOM 解析し、更新情報を取得します。  
また、取得した値に変更があったら Slack に通知します。

## 処理フロー
1. (GCE) cron で定期的に[puppeteer](https://github.com/GoogleChrome/puppeteer)を用いて Web スクレイピング
2. (GCE) [Google Apps Script(GAS)](https://developers.google.com/apps-script/)で建てた Web サーバーに Post でスクレイピング結果を送信
3. (GAS) スクレイピング結果を受け取り、履歴をスプレッドシートに登録
4. (GAS) 履歴に変更があったら Slack で通知



# 構築時メモ

## 以下の項目は自分の設定に合わせて変更する

### gas/clasp.json
GAS の scriptId
```
  "scriptId": "<your_script_id>",
```

### gas/src/environments.ts
スプレッドシートのID, Slack 通知用の Webhook URL, Slack 通知用の チャンネル名
```
export const SPREAD_SHEET_ID = '1BvYBFE-XD1wpdkGq4R4jtEtVOS7_QkOVirdfYBwxyzQ';
export const SLACK_POST_URL = <your_webhook_url>;
export const SLACK_POST_CHANNEL = '#incoming-webhooks';
```

### gce/src/shared/notification.service.js
GAS を Webアプリとして公開したときの URL
```
  fetch(<your_doPost_url>, {
```

### gce/crontab.txt
自分のディレクトリに変更
```
0 * * * * node /home/howdy39/web-update-notification/src/observe-appmaker-update.js
1 * * * * node /home/howdy39/web-update-notification/src/observe-gas-update.js
2 * * * * node /home/howdy39/web-update-notification/src/observe-google-news.js
```

# License
This software is released under the MIT License, see LICENSE.txt.
