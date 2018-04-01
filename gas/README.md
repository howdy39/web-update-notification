## 開発環境構築
GAS 部分のソースは[gas-clasp-starter](https://github.com/howdy39/gas-clasp-starter)をベースにしています。  
使い方等はそちらを参照してください。

## 手動実行用 POST URL
最後の`<exec_url>`はWebアプリ公開したURLに書き換えて実行

```
curl -X POST --data-urlencode "{\"url\": \"URLです\", \"title\": \"Google News\", \"description\": \"説明です\"}" <exec_url>
```
