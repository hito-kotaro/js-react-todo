# js-react-sample

react のプロジェクトに ESLint と Prettier を導入したサンプル

## Usage

```
$ git clone git@github.com:hito-kotaro/js-react-sample.git
$ yarn
$ yarn start
```

## ESLint

### extends

- plugin:react/recommended
- airbnb
- prettier

### ecma

- ecmaVersion:12
- ecmaFeature:jsx

### plugin

- react

### rules

- none

## Prettier

- singleQuote: true
- trailingComma: all
  and Default

## VSCode Settings

- eslint.format.enable: false
- editor.formatOnSave: true
- editor.defaultFormatter: esbenp.prettier-vscode
