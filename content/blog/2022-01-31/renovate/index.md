---
title: Renovateが気になったので、使ってみた
date: "2022-01-31T22:12:03.284Z"
description: "食べログのフロントエンドブログを読んでいたら、Renovate を運用したみた！！的な内容の記事があり、気になったので Renovate を調べてみました。"
tags: ["雑記"]
---

食べログの[フロントエンドブログ](https://note.com/tabelog_frontend/n/nc52a54472e00)を読んでいたら、Renovate を運用したみた！！的な内容の記事があり、気になったので Renovate を調べてみました。

## renovate とは？

https://github.com/renovatebot/renovate
簡単に言うと「依存関係を健全に保ってくれるライブラリ」っぽい

自動で依存関係更新の PR を投げてくれるらしい。
https://docs.renovatebot.com/getting-started/installing-onboarding/

### 実際にサンプルプロジェクトに入れてみる

これに入れる。作って 1 年以上経っていて、デプロイで転けたりするので依存関係は問題抱えてそう。
https://github.com/gunners6518/Netflix-clone

実際に導入すると 1 日で 20PR ぐらい投げてくる！

![](https://storage.googleapis.com/zenn-user-upload/99dfa0dac0e0-20220130.png)

## renovate をどう運用していくか

## renovate の運用

リポジトリに入れてみて感じたが、PR が多すぎて捌けない！！

以下の記事を見ているとランダムにメンバーをレビュアー指定して、捌いている所が多そう。

https://zenn.dev/kyoncy/articles/27dce2a0174347
https://qiita.com/okonomi/items/1cfd6fc908fbe9723127

PR の内容を見ると xxx.json のバージョンアップがほとんどなので、一旦 autoMerge 設定にする
ついでに types 系の PR もグループ化しておく。

## renovate の構成

```js
{
  "extends": ["config:base"],
  "assignAutomerge": true, // autoMergeをonにする

  // types系の更新PRをグループ化する
  "packageRules": [
    {
      "groupName": "definitelyTyped",
      "matchPackagePrefixes": ["@types/"],
      "autoMerge": true,
    }
  ]
}
```

すると良い感じで PR がマージされていくようになった。
今後の課題として破壊的な変更に対してはどうやって autoMerge を防いでいくかを検討したい。
