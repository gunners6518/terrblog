---
title: The State of JS 2021を読んでみた
date: "2022-03-11"
description: "The State of Jsとは年に1回の大規模アンケート結果の報告レポートで流行りのライブラリやトレンド技術がざっくりと掴むことが出来る。2021年版が公開されていたので、一通り読んでみた。"
tags: ["frontend"]
---

## The State of Js とは

The State of Js とは年に 1 回の大規模アンケート結果の報告レポート.
流行りのライブラリやトレンド技術がざっくりと掴むことが出来る。
2021 年版が公開されていたので、一通り読んでみた。

https://2021.stateofjs.com/ja-JP/

## 回答者属性

年齢・経験年数
![](https://storage.googleapis.com/zenn-user-upload/a67a8052ab04-20220225.png)
![](https://storage.googleapis.com/zenn-user-upload/d0ccebb6ed13-20220225.png)
回答者の年齢が予想以上に若く 24~34 歳がボリュームゾーン。ただ経験年数は結構ある人が多い。
年齢的には若いのに、経験年数が多い人が割といるイメージ。

## 機能

### proxy

オブジェクトをラップして、別の処理を差し込める機能。
あまり使った事がなかったが、シンプル故に応用がめちゃくちゃ効きそう。

https://ja.javascript.info/proxy

基本形

```js
let proxy = new Proxy(target, handler)
```

`targer`：差し込まれるオブジェクト
`handler`：差し込む処理。トラップともいう

### Promise.allsettled・Promise.any

知らんかった。`Promise.all`なら分かるけど…

- https://qiita.com/tetsuyahirose/items/ec823b3d3735be08f399
- https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
- https://penpen-dev.com/blog/promise-allsettled-all-any-race/
- 上記の記事曰く、

- `Promise.all`は処理が 1 つでも`reject`されたら全部終了。```resolve`の場合は最後まで実行
- `Promise.allsettled`は`resolve,reject`に関係なくすべて最後まで実行
- `Promise.any`は 1 つでも`resolve`したら全部終了

らしい。

### dynamic import(動的 import)

普段から使っている。
通常の import はロードのタイミングで行われるので、そのタイミングを外して import したい時に使う事が多いイメージ。

例）

- 重いファイルの import
- ロード時にはモジュールがない場合
- 条件付きで import したい

### Nullish coalescing operator(null 合体)

時々使う
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

### Optional chaining (?.)

普段から死ぬほど使う。
オブジェクトが`null`かどうかの判定をしなくても、プロパティがあれば参照出来る。ない場合にエラーを返すのではなく`undefined`を返す。
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

### プライベートフィールド

全く知らなかった。クラス系の機能は深入りせず…

### BigInt

2^53 より大きい値の整数を表せるデータ型。超絶でかい数字を扱うなら出番はありそうだが、普段は縁が無さそう…

### replaceAll（）

基本形

```js
string.replaceAll("A", "B")
```

string の A を B に全て置き換える。
`replace()`は最初に一致した物のみを置き換える

### matchAll()

正規表現を使った文字列検索時に使う。
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll

`match()`との違いは`replace`同様に全て変換か最初の 1 つを変換か。

### 論理積代入 (&&=)

基本形

```js
a &&= 2
```

a が正なら 2 が代入される

### at（）

配列から特定の index の要素を抜き取る

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at

### await

`async function`で使用する。`Promise`で非同期処理を書くより現在は一般的なイメージ

例）

```js
async function sample() {
    const result = await sampleResolve();

    // sampleResolve()のPromiseの結果が返ってくるまで以下は実行されない
    console.log(result);
}
コード元：https://qiita.com/soarflat/items/1a9613e023200bbebcb3#await%E3%81%A8%E3%81%AF

```

## ブラウザの API

ブラウザには標準で様々な API が搭載されている。

今回の結果からチェックが必要そうなのは

- service worker
- web socket
- shadow dom
- Geolocation API

辺りの印象。

## Web API をジャンル別にまとめる

### ブラウザの DOM を操作する

- DOM API
  - JvsScript 内で要素を取得する際など DOM 操作周りでよく使う
  - https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model
- Web コンポーネント
  - Shadow DOM
  - Custom Elements
  - 詳細はココで：https://ja.javascript.info/web-components

### ブラウザとサーバー間の通信

- WebSocket API

ブラウザ API の中でも外せない機能。
コネクションが確立後はデータを “パケット” として接続している全てのブラウザとサーバーはリアルタイムで双方向が出来る。

チャットなど様々な用途で活用されている。

### グラフィックスを描画

３ D 表現は webGL がメジャー

- [webGL](https://developer.mozilla.org/ja/docs/Web/API/WebGL_API)
- [canvas](https://developer.mozilla.org/ja/docs/Web/API/Canvas_API)

### 音声・動画

音声

- [Web Audio API](https://developer.mozilla.org/ja/docs/Web/API/Web_Audio_API)
- [Web Speech API](https://developer.mozilla.org/ja/docs/Web/API/Web_Speech_API)

動画

- [Web RTC](https://developer.mozilla.org/ja/docs/Web/API/WebRTC_API)

webRTC は P2P 通信を用いず SFU サーバーにてリアルタイムでの通信を可能にする。
端末同士のやり取りはしない為、負担が少なく大人数での通信が可能。

webRTC を使用したサービスは

- agora
  - https://docs.agora.io/en
- Twilio

などがある。agora しか使った事ない。

### 位置情報

- Geolocation API
  ユーザーの位置情報を取得する API
  [![Image from Gyazo](https://i.gyazo.com/b51389c6c2012b1737ac12f732bcd02c.png)](https://gyazo.com/b51389c6c2012b1737ac12f732bcd02c)

参考
https://zenn.dev/sweflo/articles/8c34c081cb764c

### その他

#### Service Worker

名前知っているけど、実務で使った事なかった。

web アプリとは別にバックエンドで実行するスクリプト。
DOM 操作は出来ない。
https://developers.google.com/web/fundamentals/primers/service-workers/

主な使い道として

- バックグラウンド同期
- プッシュ通知
- オフライン実行
  - オフラインでも画像が表示されたりするやつ

参考
https://qiita.com/poster-keisuke/items/00056b8d5d6275afdb1a

#### Intl API

知らんかった。国際的なサービスの際にフォーマットを国際化する API

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl

参考
https://developer.mozilla.org/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AA%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%BC_api

## PWA

使用率は年々上がっていて、2021 年は 62%。

どっからが PWA を使っているになるのかはあいまいな気がする。
JavaScript の 3 大フレームワークが PWA 対応している事もあり、これらを使っている率なんじゃないか。

個人的には Web アプリケーションの今後の動向 = PWA の動向だと思っている

PWA について詳しくはコチラにまとめた。
https://zenn.dev/gunners6518/scraps/d719c3c66a8aea

## WASM

Web Assembly の略。web ブラウザで実行可能なバイナリフォーマット。
使用率はまだまだ少ないが、ブラウザで動く JavaScript 以外の言語の選択肢という事で注目度は高い。
https://zenn.dev/akfm/articles/81713d4c1275ac64a75c

## ライブラリ

デファクト

- React(フロントエンドフレームワーク)
- Express(バックエンドフレームワーク)
- Next.js(バックエンドフレームワーク)
- webpack(ビルドツール)
- tsc CLI(ビルドツール)
- Jest(テスト)

期待

- storybook(テスト)
- Testing Library(テスト)
- Cypress(テスト)
- esbuild(ビルドツール)
- Vite(ビルドツール)
- Svelte(フロントエンドフレームワーク)

## フロントエンド

基本的に React がデファクト。
近年は他の選択肢としては Svelte が満足度が高いらしい。

急に出てきた Solid はしらん！笑

### Svelte

https://svelte.jp/

- HTML を直で書いているイメージ
  - React、Vue と比べて記述量が少なくなる傾向がある
  - https://svelte.jp/examples/hello-world
- パフォーマンスが良い
  - バンドルサイズが小さい
- 仮想 DOM を使わない

詳しくはこっちにまとめた
https://zenn.dev/gunners6518/scraps/b072f99f8ce8f7

個人的に svelte はとても興味があるので、svelte 日本人コミュニティを覗いてみる予定

## バックエンドフレームワーク

利用率と満足度をみても、Express、Next の時代は続きそう。
時点で今後 slevte kit が入って来るか。

svelte の勢いがバックエンドの svelte kit にも反映されている。
svelte kit は svelte にサーバーサイドレンダリングや色々なラッパーを提供しているフレームワーク
個人的には React Router や Testing Library で有名な Kent C.Dodds が作った Remix に注目している。

この分野は特にフロントエンドの領域はどこまでなのか？
今後どこに向かうのか？
が課題になる項目だと思っている。

個人的には昨年行っていた frontend study が大変この辺りに議題に対して面白かった。

https://zenn.dev/mizchi/articles/c638f1b3b0cd239d3eea

## テスト

React でのテスト環境は

- Jest
- Storybook
- Testing Library
  に落ち着いた印象。

Mocha や Cypress もよく使われている。
Jasmine はだいぶ減ってきている。

テストは主に

- E2E
- インテグレーション
- ユニット
- スタティック
  に分類される。

## モバイル・デスクトップ

モバイルだと React Native、デスクトップは Electron に落ち着いている。
Ionic や Cordova は引き続き中堅どころ。

tauri が注目らしい

## ビルドツール

デファクトは webpack
gulp も使われているが落ち目。。

tsc CLI、esbuild、vite 辺りが注目株

## その他

### ライブラリ

axios,Lodash,moment 辺りは普段使う事もある。

### ユーティリティ

ESlint,prittier は普段使う
babel は効く頻度が減った

### ランタイム

基本的に node.js やブラウザ。
service worker や deno は場面に応じて使う場合がありそう

## まとめ

アワード

![](https://storage.googleapis.com/zenn-user-upload/4d2ff07ba8b3-20220301.png)

esbuild は満足度が高く、vite はだいぶ関心が高まっている様子。

また今年はティアリストというランク表示によく使われるグラフがライブラリ全体のチャートで使われていて、レアリティみたいで分かりやすかった。

![](https://storage.googleapis.com/zenn-user-upload/37b5eb364e12-20220301.png)
