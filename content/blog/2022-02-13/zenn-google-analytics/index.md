---
title: zennで書いた記事のPV数が知りたかったので、GoogleAnalytics連携してみた
date: "2022-02-13"
description: "zennの過去記事に未だに「いいね」が付くので、過去記事にどれほどの影響力があるのか気になった。Qiitaと違いzennはPV数はプラットフォーム内では測定できないので、GoogleAnalyticsと連携してPV数を測れるようにする。"
tags: ["雑記", "ブログ"]
---

基本的にはこのブログで記事を書いているが、zenn の方でも月 1 ぐらいを目安に記事を書いていて、そっちの方が反響はある。
毎日 1~2 いいねぐらいが平均で来るので、どのぐらい PV 数があるのか気になったので、測定してみる。

ちなみに Qiita では画像のように、執筆者には PC 数が分かる様になっているが、zenn にはなさそう。

[![Image from Gyazo](https://i.gyazo.com/9fb5072f344eadb5dbac20ad6e3c88d4.png)](https://gyazo.com/9fb5072f344eadb5dbac20ad6e3c88d4)

## Google Analytics で zenn 用のアカウントを作る

基本的な操作はこの記事を参考にして進めた。
https://zenn.dev/unsoluble_sugar/articles/c784905997dde2ffce68

画像豊富で丁寧に書いてあるので、気の記事に沿って進めれば 2022 年 2 月段階では問題なさそう。

### 注意！？「ユニバーサルアナリティクスプロパティ」を作成する事！

一点自分が詰まった注意点として、間違って Google Analytics4 のプロパティを作るという事象がある。
プロパティ作成の際に、「詳細オプションを表示」を選択し「ユニバーサルアナリティクスプロパティ」を選択しないとビューが作られないので注意が必要。

## 確認

手順通りに zenn のアカウントにトラッキング ID を入れたら、zenn の自分の記事を見て、Google Analytics のリアルタイムに反映されているかチェック！！

[![Image from Gyazo](https://i.gyazo.com/255b59da18702d57c5ec9aa5ae699d02.png)](https://gyazo.com/255b59da18702d57c5ec9aa5ae699d02)

OK！！

## 振り返り

これで zenn の方の PV 数が確認出来るようになった、
いいねの数は元から分かっていたので、これでコンバージョンなども測定出来る様になる点は魅力的。

zenn が自分のブログや Qiita と比べてどの程度まで影響力がある状態なのかも客観的に判定出来そう。
