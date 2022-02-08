---
title: 【npmエラー】Failed to load parser 'babel-eslint' declared in 'package.json » eslint-config-react-app »
date: "2022-02-08"
description: "長らく放置していたリポジトリで``npm run build``したらビルドエラーが出た。nodeの依存関係が原因だったが、解決までの過程を残しておく"
tags: ["エラー","yarn"]
---

## 背景
https://github.com/gunners6518/Netflix-clone

このリポジトリを長らく放置していたら、typoの報告が来ていた。  
修正しようとしたら、``npm run build``でコケた。

## エラー内容
エラーログ
```bash
Failed to load parser 'babel-eslint' declared in 'package.json » eslint-config-react-app » /home/Netflix-clone/node_modules/eslint-config-react-app/base.js': Cannot find module 'babel-eslint'
```

内容としては``babel-eslint``が見つからないと言っている。

https://stackoverflow.com/questions/59021924/error-failed-to-load-parser-babel-eslint-declared-in-eslintrc-cannot-find

このサイトを参考に``yarn add eslint --save-dev``で``eslint``を追加する。

ちなみに
- ``--save-dev``は``devDependencies``にインストールする
- ``--save``は``dependencies``にインストール
- オプション無しで``package.json``に記載がある全てのパッケージをインストール

``dependencies``は本番環境でも使うパッケージ、``devDependencies``は開発用のパッケージを指定する場所。  
開発用のパッケージとしては``eslint``や``jest``などを指定することが多い。  
なので今回も``yarn add eslint --save-dev``を使った。


再度``npm run build``チャレンジ！

エラー！！


```bash
To fix the dependency tree, try following the steps below in the exact order:

  1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
  2. Delete node_modules in your project folder.
  3. Remove "eslint" from dependencies and/or devDependencies in the package.json file in your project folder.
  4. Run npm install or yarn, depending on the package manager you use.

In most cases, this should be enough to fix the problem.
If this has not helped, there are a few other things you can try:

  5. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it instead.
     This may help because npm has known issues with package hoisting which may get resolved in future versions.

  6. Check if /Users/fujisawakazuki/Desktop/sample/Netflix-clone/node_modules/eslint is outside your project directory.
     For example, you might have accidentally installed something in your home folder.

  7. Try running npm ls eslint in your project folder.
     This will tell you which other package (apart from the expected react-scripts) installed eslint.

```

es-lintの依存関係が悪いらしい。
手順を要約すると

1.  ``package-lock.json`` and/or ``yarn.lock``を削除する
2.  ``node_modules``を削除する
3. ``package.json``の``devDependencies`` and/or ``dependencies``から``eslint``を削除する
4. ``yarn``実行

再度``npm run build``チャレンジ！

上手く行った。

## まとめ

``babel-eslint``の依存関係が原因。  
手動で修正するのは難しいので、関連フォルダを一回削除して、再度インストールする事で解決した。
