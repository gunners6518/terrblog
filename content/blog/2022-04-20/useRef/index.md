---
title: useRefの使い方を振り返る
date: "2022-04-20"
description: "aaaaa"
tags: ["React"]
---

こんにちは、てりーです。
今日は業務は`useRef`について議論する機会があったので、良い機会なので`useRef`の使い方などを振り返っていこうと思う。

## useRef とは

> useRef とは、書き換え可能な値を .current プロパティ内に保持することができる「箱」のようなものです。  
> [公式ドキュメント](https://ja.reactjs.org/docs/hooks-reference.html#useref)

書き換え可能な値を保持するという点で、`useState` と似ているが、`useRef` の特徴として以下の点がある。

- **参照の値が再レンダリング時も保持されたままになる**
- **参照を更新しても、コンポーネントは再レンダリングされない。(`useState` は再レンダリングされる)**

## 基本的な使い方

```jsx
const ref = useRef(initialValue)

const sample = () => {
  // useRefを参照
  const value = ref.current

  // useRefを更新
  ref.current = newValue
}
```

## 要素の参照

一番有名な使われ方としては 要素の参照がある
要素の ref 属性を付けて、useRef で DOM を参照する事が出来る

以下の例ではボタンを押下する事で、`button`の DOM が出力される。

<iframe src="https://codesandbox.io/embed/jolly-proskuriakova-xulrf9?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="jolly-proskuriakova-xulrf9"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## まとめ
