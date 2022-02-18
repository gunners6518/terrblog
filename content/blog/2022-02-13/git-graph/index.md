---
title: git historyからgit graphに乗り換える事にした
date: "2022-02-13"
description: "今まで vscode の拡張として git history を使ってきたが、git graph も良さそうなので比較してみた所、大きな差はなかったが git graph の方が UI が見易かったので乗り換える事にした。"
tags: ["git"]
---

今まで vscode の拡張として git history を使ってきたが、git graph も良さそうなので比較してみた所、大きな差はなかったが git graph の方が UI が見易かったので乗り換える事にした。

## git history VS git graph

まずは git graph と git history のそれぞれの特徴を再確認し、比較する。

### git history

https://github.com/DonJayamanne/gitHistoryVSCode

vscode のソース管理の時計のアイコンをクリックで使える。

![](https://storage.googleapis.com/zenn-user-upload/7d4a3b940696-20220213.png)

パッと見の UI はこんな感じ。
![](https://storage.googleapis.com/zenn-user-upload/3f89ef8e148a-20220213.png)

左端にリポジトリツリーが表示され、右の方に細かいデータが表示される。

git history はファイルで右クリックから「Git:View File History」をクリックで、ファイル毎のコミット履歴も確認できる。

同じ手法で行単位でのコミット履歴の閲覧も可能。  
コミットの UI はこんな感じ

![](https://storage.googleapis.com/zenn-user-upload/1c51cca38c8e-20220213.png)

特徴として

- 差分が色々なパターンで手軽に表示出来る
  - ファイル全体
  - 現在のワークスペースとの差分
  - その commit での差分
- 検索しやすい UI になっているので、プロジェクトが複雑になっていくほど重宝する作り（な気がする）

### git graph

https://github.com/mhutchie/vscode-git-graph

vscode のソースコード管理のツリー状のアイコンから遷移可能。  
![](https://storage.googleapis.com/zenn-user-upload/7289ed18c056-20220213.png)

パッと見の UI はこんな感じ
![](https://storage.googleapis.com/zenn-user-upload/05a9dc0ff503-20220213.png)

コミット単位の UI

![](https://storage.googleapis.com/zenn-user-upload/dbb4c6734b20-20220213.png)
差分は前 commit との。

特徴

- UI がシンプルで必要な情報が分かりやすい印象
- cherry pick や add tag などのコマンド操作が簡単に出来て分かりやすい
- 検索は author、Date、commit が最初から表示してあり直感的に探しやすい。

### 比較した印象

- やれる事はどっちもほとんど一緒
- git history は一覧画面を見た際はごちゃっとしている
  - 選択肢を全て表示しているので情報量が多く、使いこなすまでは圧倒されるかも。。
  - 使いこなせば複雑なプロジェクトでもストレス無く使えるかも(UI 的にも検索が大きな割合を占めている)
  - ファイルから、そのファイルのコミット履歴を遡れる点は魅力
- git graph は直感的で分かりやすい UI になっている
  - 表示してある機能も、情報量を絞って良く使われる物に絞っているイメージ

要するに見やすくスッキリの「git graph」、なんでも出来る「git history」という構図。  
自分はこれらの拡張は特定のブランチでのコミット履歴を一覧で確認したい！といった理由で使うパターンが多いので、複雑性に耐えうる事よりもスッキリ見やすい点を重視したいと思った。

結果、今後は「git graph」を採用しようと思う。

ついで簡単な git graph の使い方をまとめておく

## git graph の使い方

### リポジトリーツリーを表示

![](https://storage.googleapis.com/zenn-user-upload/05a9dc0ff503-20220213.png)
コミットやマージの履歴が表示される。  
上の branches から他のブランチを選択すれば、特定のブランチを中心とした履歴が見れる。

### コミットを表示

リポジトリーツリーからコミットをクリックすると詳細が表示される。  
![](https://storage.googleapis.com/zenn-user-upload/dbb4c6734b20-20220213.png)

左側にコミットのデータ。  
右側にファイル毎の差分が表示される。

右側の検索っぽいアイコンで変更ファイルを太字にするレビューモードに出来る。  
レビューモードではファイル名が太字表示になり、ファイルの差分を見終わった物は太字がなくなるので、どのファイルが確認済か一目瞭然になる。

![](https://storage.googleapis.com/zenn-user-upload/44bbb550c643-20220213.png)

### checkout

コミットを右クリック「cherckout branch」でそのブランチにチェックアウト出来る。  
現在いるブランチの右には丸が付いているので、視覚的にも確認しやすい。

![](https://storage.googleapis.com/zenn-user-upload/568d906f5dd4-20220213.png)

### cherry pick で特定のコミットを取ってくる

コミットを右クリック「cherry pick」でそのブランチをチェリーピック出来る。  
チェリーピックは他のブランチのコミットをこっちのブランチに持ってこれるコマンド。

別ブランチで作ってまだマージされていないこの機能をこっちのブランチでも実現したい！みたいな時に役立ちます。

### revert で特定のコミットを削除する

コミットを右クリック「cherry pick」でそのブランチをリバート出来る。  
リバートは対象のコミットを取り消すコマンド。
