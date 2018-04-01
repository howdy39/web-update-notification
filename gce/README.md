# 開発環境構築

## モジュールインストール
```
npm i
```

# 開発環境で実行
```
node src/observe-google-news.js
```



# 本番環境構築
GCEインスタンスを作成しておく  
(f1-micro, USリージョンで無料)

## SSH
```
gcloud config set project <project_id>
gcloud compute ssh <gce_instance_name>
```

## Node インストール
[Ubuntuに最新のNode.jsを難なくインストールする - Qiita](https://qiita.com/seibe/items/36cef7df85fe2cefa3ea)

```
sudo apt-get update

sudo apt-get install -y nodejs npm

sudo npm cache clean

sudo npm install n -g

sudo n stable

sudo ln -sf /usr/local/bin/node /usr/bin/node

node -v
```

## Chrome インストール
[UbuntuにGoogle Chromeを簡単にインストールする方法 | カレリエ](https://www.karelie.net/how-to-install-google-chrome-on-ubuntu/)

```
sudo apt-get install libappindicator1

sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'

sudo wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -

sudo apt-get update

sudo apt-get install google-chrome-stable
```


## ディレクトリ作成

```
mkdir ~/web-update-notification
cd ~/web-update-notification
```

## ファイルアップロード
ファイルをアップロード

## モジュールインストール
```
npm i
```

## cron設定
```
crontab < crontab.txt
```
