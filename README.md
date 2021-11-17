# js-react-todo

シンプルな Todo リスト
参考: https://www.youtube.com/watch?v=E1E08i2UJGI&t=2630s

# Introduction

```
$ https://github.com/hito-kotaro/js-react-todo.git
$ cd js-react-todo
$ yarn
$ yarn start
=> http://localhost:3000

```

# Usage

![usage1](https://user-images.githubusercontent.com/92259196/142220699-efc48189-3749-402a-a144-665a1e253650.png)
![usage2](https://user-images.githubusercontent.com/92259196/142220717-450977b0-160e-46c6-b15c-a15d6764c027.png)

## ESLint Rules

## [disable]react/forbid-prop-types @Todo.jsx

props の型を定義する時 todos を array で定義したかったが、このルールでエラー
一旦無効

## [disable]jsx-a11y/no-static-element-interactions @Todo.jsx

div タグに対して onClick をつけていたため
ボタンではなく、カードをクリックした時に完了にする使用にしたかったので一旦無効

## [warning]no-unused-vars @.eslint.yml

開発中頻発したので警告に変更
