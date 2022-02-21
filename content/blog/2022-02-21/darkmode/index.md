---
title: tailwindcssでダークモードを実装する
date: "2022-02-21"
description: "Gatsbyで制作中の技術ブログにtailwindcssを用いてトグルボタンで全体のテーマをダークモードに切り替える機能を実装した。この記事では実装の手順などを振り返る"
tags: ["tailwindcss", "Gatsby"]
---

Gatsby で制作中の技術ブログに tailwindcss を用いてトグルボタンで全体のテーマをダークモードに切り替える機能を実装した。この記事では実装の手順などを振り返る

[実際の commit](https://github.com/gunners6518/terrblog/pull/25/commits/8ac12af45d4ff454d7daa9e42d6a4c9a5435fd49)

## ダークモードとは？

通常の白を基調とした配色では無く、黒を基調した配色に全体のテーマを切り替えられる機能

例）tailwindcss 公式
[![Image from Gyazo](https://i.gyazo.com/3ec6b6010edeaa8914bbd8664ea0aebb.png)](https://gyazo.com/3ec6b6010edeaa8914bbd8664ea0aebb)

[![Image from Gyazo](https://i.gyazo.com/308baf683830fc71790952b71ba82ddd.png)](https://gyazo.com/308baf683830fc71790952b71ba82ddd)

## やりたい事

- トグルボタンで切り替えが可能
- 全体の配色が変わる(背景色、文字色)
- 初期状態でダークモードに
  - OS 側の設定を初期初期状態に充てる事も出来るが、今回はダークモードをデフォルトにしたい

## ダークモードの実装方針

1. html タグの class 名に`calss="dark"`を加える(初期状態)
2. tailwind でダークモードでの配色を指定する
3. トグルボタンで切り替え可能にする

### 1. html タグの class 名に`calss="dark"`を加える

DOM 全体にダークモードを適応させる為に、`html`タグにクラスを付与させる必要がある

初回だけダークモードを付与したいので、useEffect で 1 回実行する

```jsx:layout.jsx
// 初期設定をダークテーマにする
  useEffect(() => {
    if (document.documentElement.classList.value !== "dark") {
      document.documentElement.classList.toggle("dark")
    }
  })
```

### 2. tailwind でダークモードでの配色を指定する

今回は css フレームワークとして tailwindcss を使用した。
tailwindcss ではダークモード時の配色を指定出来るプロパティがある。

例

```jsx
<p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">例文</p>
```

通常時は`text-slate-500`が適応、ダークモード時は`text-slate-400`が適応される。

詳しい使い方はドキュメント参照
https://tailwindcss.com/docs/dark-mode

### 3. トグルボタンで切り替え可能にする

ユーザーが自由に切り換え可能にするボタンを実装する。

ソースを載せるだけには味気ないので、簡単に説明を加えると

- トグルボタンをクリックすると関数`theme`が走る
  - `theme`は`dark`クラスをトグルする(付け外し)
- Gatsby では`build`時の段階で DOM の windows が定義されていなく、コケるので`typeof window !== undefined`で弾いた
- ボタンはダークモードで背景色、マージンが変わる様にして動きを表現

```jsx:modetoggleButton.jsx

import * as React from "react"

const ModeToggleButton = () => {
  const theme =() =>  {
    // Gatsbyのbuildエラー対策
    if (typeof window !== undefined) {
      document.documentElement.classList.toggle("dark")
    }
  }

  return (
    <div className="pr-12">
      <button
        title="Toggle Theme"
        onClick={theme}
        className="
      w-12
      h-6
      rounded-full
      p-1
      bg-gray-400
      dark:bg-gray-600
      relative
      transition-colors
      duration-500
      ease-in
      focus:outline-none
      focus:ring-2
      focus:ring-blue-700
      dark:focus:ring-blue-600
      focus:border-transparent
    "
      >
        <div
          id="toggle"
          className="
        rounded-full
        w-4
        h-4
        bg-blue-600
        dark:bg-blue-500
        relative
        ml-0
        dark:ml-6
        pointer-events-none
        transition-all
        duration-300
        ease-out
    "
        ></div>
      </button>
    </div>
  )
}

export default ModeToggleButton
```

## まとめ

- ダークテーマは`.dark`クラスを指定して css を当てれば実現可能
- ダークテーマとホワイトテーマの切り替えの為には`.dark`クラスの付け外しが必要
- tailwindcss では`dark:`でダークテーマ時の css を実装出来る

以上
