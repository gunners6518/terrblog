---
title: vscodeでプライベートリポジトリを操作する際にパスワードが毎回求められて鬱陶しいので、解決する
date: "2022-02-03"
description: "複数端末でのgit操作を行おうとしてsshキーなどをいじっていたら、vscodeでプライベートリポジトリを操作する際にパスワードが毎回求められるようになった。流石に鬱陶しいので、解決していく"
tag: "git"
---

## 現状

- `git pull`や`git push`などをする際に毎回パスワードが求められる。
- vscode 状の GUI で push などしようとすると、エラーないしはずっと通信中になる。

## 原因を調べる

### プライベートリポジトリの操作で毎回パスワードが必要

プライベートリポジトリへのアクセスでパスワードが毎回求められ事自体は普通の現象らしい。
ssh-agent に秘密鍵を登録する事で、パスワード入力を省略できる。

1. ssh-agent 起動

```bash
$ eval "$(ssh-agent -s)"
Agent pid xxx
```

2. 鍵ファイルを確認

```bash
$ ls -l ~/.ssh
-rw------- 1 xxx 2655 Jan 20 14:44 id_rsa_github.key
-rw-r--r-- 1 xxx  575 Jan 20 12:40 id_rsa_github.pub
```

3. ssh-add で、ssh-agent に秘密鍵を登録

```bash
$ ssh-add ~/.ssh/id_rsa_github.key // pub無しの方
```

これで次回以降、パスワードの入力が省略される。

参考 1:[GitHub に SSH 接続する方法 秘密鍵・公開鍵生成と鍵の登録](https://style.potepan.com/articles/31064.html)
参考 2:[ssh-add できなかったときへの対処](https://qiita.com/sshojiro/items/60982f06c1a0ba88c160)

### vscode 状の GUI でプライベートリポジトリへのアクセス出来るようにする

## まとめ
