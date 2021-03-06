---
title: フリーランスが人生初の転職をして1週間が経ったので振り返る
date: "2022-04-09"
description: "2022 年 4 月に人生初めての転職をして、1 週間ほど経過したので振り返って見ようと思う。

社名などは控えるので生々しい話はないが、フリーランスがエンジニアとして転職するとこんな事があるかもよー程度で読んで頂ければありがたい"
tags: ["ポエム"]
---

こんにちは、てりーです。

2022 年 4 月に人生初めての転職をして、1 週間ほど経過したので振り返って見ようと思う。

社名などは控えるので生々しい話はないが、フリーランスがエンジニアとして転職するとこんな事があるかもよー程度で読んで頂ければありがたい。

## 入社 1 週間を振り返って

自分は今までの経歴がフリーランスだった為、人生初の正社員になった。

独立志向が高くてフリーランスをやっていた訳ではないので、いつか正社員は経験したいなーと漠然と思っていたが、20 代のうちに経験出来た点は良かったと思う。

**正社員経験がない事 = 一般常識がない事**だと思っているので、その点はこ今回の機会で学ばせて貰うつもりでいる。

### カルチャー

カルチャーに関しては会社ごとに違うと思うので、参考にもならないと思うが、自分の備忘録として記録しておく。

入社して感じた事はオンボーディングが手厚かった。

入ってすぐ「環境構築始めてね！」ではなく、事業説明、Git 運用方法、デプロイまでのフローなどの概要にあたるガイダンスを受け、その後、環境を作っていく形だった。

手厚いなーと思う反面、自分で手を動かさないと頭に入ってこないタイプなので、開発絡みの説明は「ふーん」程度の程度法海に留まる事もあった。

社員に対して中途入社の人が占める割合が多く、入る人は即戦力的な気がした。
年齢も 30 代が一番多く、40、50 代もいる。(平均年齢が 35 歳ぐらい)

20 代前半の人はほとんど見当たらない(新卒が研修中だから余計に)
自分は 20 代後半になるので、若い方かもしれない。

年上の人が多いからか、子育て世代が働きやすい社風に感じた。
今までのフリーランス現場で経験してきた「常に仕事のこと考えてます！」的な人はいなく、定時でしっかり帰り、無理なスケジュールは「無理です」と突っぱねる事が可能な良い循環を感じた。

また振り返りの時間を週の中で定期的に取っていて、ちゃんとネクストアクションに繋がっている点がとても良いと思った。
自分の経験だと形骸化しがちだったり、そこで議論した事がネクストアクションとして次のタームのタスクとして落ちてこない事が多かった。

### ツール

特に苦戦したものとしてグループウェアがある。
グループウェアとはスケジュール管理、社内掲示板、社内のやり取り、ワークフロー、勤怠管理などを一括管理出来るツール(G Suite や garoon など)

これが慣れないうちはめちゃくちゃ難しい。
特に自分にはワークフロー、社内メール(teams や slack とは別)などの概念が無く苦戦した。

また大きい企業になってくると当たり前なのかもしれないが、アプリや拡張機能のインストールは基本的にセキュリティ部門への申請が必要となる。
PC の管理者権限も常に与えられる訳ではないので、新しいツールをあれこれ試しにくいのはちょっと残念に感じた。

### 開発

開発にはまだ着手していないが、現段階で感じた事を記しておく。

まずは開発環境の構築が多く、ローカルや VM 環境など色々と行き来するので、全体像が分からない段階では、README に従っているだけで、本当に今何をしているのか分からない状況によく陥る。

故にエラーが出ても「ここが怪しいなー」的な勘は発動せず、潔く質問するしかない。

技術的には Next.js、TypeScript、GraphQL、Apollo client とモダンなものを使っていて、GrahpQL と Apollo Client 辺りは実務経験が浅いので、少々キャッチアップしないと危ない気がする。

その他も Sentry でエラー監視、Renovate でバージョンアップ対応など、今まで使ってないツールが多く技術的にはとてもワクワクしている。

## 事前にキャッチアップして良かった事

会社のブログや外部での登壇などを隅々まで見ていたが、これがとても良かった。
いわゆる「予習済み」状態になり、事業概要や開発についてなど、最初に次々にぶち込まれるガイダンスに圧倒されずに頭に入ってきた。

会社の技術ブログでは使っているツールやプロダクトに対して抱えている課題、外部での登壇では事業概要やこれからの展望などを説明していて、入社前からそれらに対して対策を取る事は出来る。ツールは使い方を 1 から説明してくれる訳ではないので、自分の PC で事前に雰囲気を掴んでおいて良かった。

## 意識した事

早く会社に馴染むにあたって、「質問をいかにスムーズにするか」を意識した。(この辺りは別途記事にする予定)
実際には定量的に質問と雑談をする回数を決めて、日々その値を追いかけた。(実際には times で呟く回数を決めた)

これによって「これ質問しても良いのかなー？」と迷った際に、自分の発言カウントを増やしたいから質問する、という動機付けが出来て結果良かった。

また説明を受けた際は質問をする事を必須とし、ニュートラルな議論の場でも可能な限り何かを発するようにした。
自分の発言内容が良かったり、核心を突いている事はほとんどないと思っているが、発言する事自体を入社 1 週間での仕事と捉えてトライした。

## まとめ

入社して 1 週間を振り返えると、開発にはまだ入れずオンボーディングに従事した形だった。
技術的な面では今後に対する不安(使った事ない技術について行けるかなー)はあるが、コミュニケーションの面では、times で呟く回数を決めた事で順調に進んだ。

といっても自分が抱えている問題がゼロな訳ではないので、上手く噛み砕いて周りにも相談していきたい。

開発が始まると分からない事は今までの日じゃないぐらい出てくると思われるので、それをペアプロやレビューをこまめにお願いして、いかにストレスなく消化するかが今後の課題だと考えている。

とりあえず現段階では入社前に期待通りで、キャリアのチャレンジになりそうな転職だと思っている。
