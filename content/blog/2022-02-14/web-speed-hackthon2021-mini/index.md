---
title: WebSpeedHackthon2021miniでパフォーマンスチューニングを勉強する
date: ""
description: ""
tags: "パフォーマンス"
---

今年の頭に開催されていた WebSpeedHackthon に遅ればせながら挑戦してみる！  
年末年始は忙しく興味がありながら、手元でちょっと変更を加えるぐらいしか出来なかった。

https://github.com/gunners6518/web-speed-hackathon-2021

パフォーマンス周りの知識は 0 に近いので、色々な人の解説を見ながら勉強する事を今回の目的とする。

早速始める。

## まずは最低限必要な部分に着手

### スクロールイベントに passive をつける

まずアプリを開いた際にスクロールイベントの重さが目についた。
web 標準として addEventListener には passive と capture という引数がある。  
`passive:true`でイベントハンドラが Passive event となり、イベントハンドラの終了を待たずにすく rpg ー流を開始する事が出来るようになる。

`capture:true`はこの記事を参考にしたが、あまり分からなかった。  
https://qiita.com/hosomichi/items/49500fea5fdf43f59c58

```tsx
document.addEventListener("scroll", handler, { passive: true, capture: true })
```

### hasReached の計算量を削減

この関数内で計算を`2**18`回実行していたので削除。  
この段階で lightHouse の Performance は 15 点。

### webpsck mode の設定

webpack は開発用と本番用で分けてロード時間を短縮するのは必須。

- 開発用はソースマッピングやライブリロードなど開発に適した機能を盛り盛りにしたい
- 本番はバンドルサイズ、ソースマップ、アセットなどを最小にしてロード時間の短縮に努めたい

参考；webpack 公式
https://webpack.js.org/guides/production/

今回の使い分けとして

- `yarn start`は development
- `yarn build`は production

とした。

## JavaScript のファイルダイズを削る

### lodash を消す

lodash はとてもバンドルサイズが大きい。丁寧で手軽に使える点は魅力だが最新の ES などで置き換え可能なので削っていく。

これを参考に loadash のメソッドを自前実装に変えていった。  
https://youmightnotneed.com/lodash/

### moment を消す

js のライブラリはは無くするなら軒並み消しているイメージ

### jQuery を消す

### 画像の拡大縮小は css の object-fit を使う

がおずおぬアスペクト比を維持しながら拡大縮小するのに`buffer`と`image-size`パッケージを使っていたので CSS の`object-fit `に変更。

## css のファイルサイズを削る

### tailwind の purge

tailwind などの重要だけどビルドサイズが大きい物を縮小する。

参考：
https://zenn.dev/ryo_kawamata/articles/purage-tailwind

### css の minify

### 使っていない webfont の css を削る
