---
title: Gatsbyのブログで日本時間の日付表示をする
date: "2022-02-23"
description: "Gatsbyのテンプレートのgatsby-starter-blogでは初期状態で英語での日付表示になっている。これを日本語での日付表記に変更する方法をまとめた。"
tags: ["Gatsby"]
---

Gatsby のテンプレートの [gatsby-starter-blog](gatsby-starter-blog) では初期状態で英語での日付表示になっている。  
これを日本語での日付表記に変更する方法をまとめた。

before
[![Image from Gyazo](https://i.gyazo.com/f504b6dc93c9f595a5cb25af62a3ae2a.png)](https://gyazo.com/f504b6dc93c9f595a5cb25af62a3ae2a)

after
[![Image from Gyazo](https://i.gyazo.com/4f3778e04df0dbb842a798ccadfb0131.png)](https://gyazo.com/4f3778e04df0dbb842a798ccadfb0131)

具体的なコードは該当の PullRequest で確認出来る。  
https://github.com/gunners6518/terrblog/pull/36

## 該当箇所の確認

[gatsby-starter-blog](gatsby-starter-blog)では 記事一覧ページ(`index.js`)、個別記事ページ(`blog-post.js`)にて日付けが使われている。

GraphQL では以下の様に fromtmatter でデータを取っている。

```js
frontmatter {
  title
  date(formatString: "MMMM DD, YYYY")
  description
}
```

`date`の部分を整形して英語表記にしているので削る。

## 表示箇所に組み込み

`date`のままだと 2022 年 2 月 23 日の場合は`20220223`で取得される。
これを 2022 年 2 月 23 日表記にする為ぬに[moments.js](https://momentjs.com/)を使って整形する。

```js
{
  moment(post.frontmatter.date).format(`YYYY年MM月DD日`)
}
```

完成  
[![Image from Gyazo](https://i.gyazo.com/4f3778e04df0dbb842a798ccadfb0131.png)](https://gyazo.com/4f3778e04df0dbb842a798ccadfb0131)
