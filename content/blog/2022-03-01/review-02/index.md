---
title: 2022年2月振り返り
date: "2022-03-01"
description: "2月の振り返りを行う。2月は順調に記事投稿出来たり、RemixにPRがマージされリリースされたりとOSSにも慣れてきた。"
tags: ["振り返り"]
---

## やった事

### oss

Remix で PR がマージされ、v1.2.0 でリリースされた。
https://github.com/remix-run/remix/releases/tag/v1.2.0#:~:text=contribution%20in%20%231639-,%40gunners6518,-made%20their%20first

内容はチュートリアルの typo 修正だが、嬉しい経験が出来た。
徐々にコーディングでも貢献していきたい。

### ブログ

6 記事投稿。
内容的には Gataby でブログ移行中に躓いた所をついでに記事化したものが多い。  
やっぱり普段からコードを書いていると記事になるネタが見つかるし、コードから離れてくると記事も書けなくなる気がする。

また、月 1 本ぐらいで良いので zenn や qiita などに向けた体系的に知識をまとめたアウトプットを出したい。
他の会社の技術ブログみたいにある程度ボリュームも意識して。。

例えば、gatsby への移行がちゃんと終わったら、それまでの各内容を精査してまとめ記事をアウトプットなどは良さそう。

### TypeScript 型テスト

uhyo さんの型演習を解き、足りない部分の知識を補足した。
https://qiita.com/uhyo/items/e4f54ef3b87afdd65546

TypeScript は使って手になじませる必要があると感じているので、oss などでしっかりと触れていきたい。

### テストツール

業務でのテストツールの経験が無かったので、概念について少しずつインプットしている。

https://zenn.dev/gunners6518/scraps/dee68b078e7658

Jest、Testing Library 辺りは 3 月中に手を動かして所感を掴みたい。

### State of JS 2021

2 月中旬に State of JS 2021 が発表されたので、チェックした。

https://zenn.dev/gunners6518/scraps/e32d2243f06a74

機能は知らなかった物も多数あったので勉強になった。

ライブラリは

- 何が嬉しいのか？
- その技術の懸念点
- 周辺技術との組み合わせ
  辺りを自分なりに噛み砕いて今後、ちゃんとまとめていきたい。

## まとめ

2 月は記事の投稿は良いペースで出来たが、内容としては Howto 系が多く、ちょっと知識としては浅い印象になってしまった。
今後のキャリアを考えて、技術に対しては自分なりの根拠をもって知識を整理していく必要があると感じている。

最終的には会社の技術ブログぐらいの完成度で月に数本記事を投稿出来るように、まずは JSer.info や State of JS などでチェックする必要がある技術を選定し、その技術に対してドキュメントやコミュニティなどまで深めにチェックする必要がありそう。

1 技術に 1~2 カ月ぐらいかけて追いかけてよい印象。それでも少ないかもしれない…。
とりあえず 3 月は引き続き Remix と Jest などを追いかけてちゃんと理解する。
