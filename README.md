## 以下の項目は自分の設定に合わせて変更する

### gas/clasp.json
GAS の scriptId
```
  "scriptId": "<your_script_id>",
```

### gas/src/environments.ts
Slack 通知用の Webhook URL
```
 export const SLACK_POST_URL = <your_webhook_url>;
```

### gce/src/shared/notification.service.js
GAS を Webアプリとして公開したときの URL
```
  fetch(<your_doPost_url>, {
```

## License
This software is released under the MIT License, see LICENSE.txt.
