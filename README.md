# Подготовка проекта
___
## :one:Устанавливаем React и TypeScript

* `npm create vite@latest my-react-app --template react`
* `cd my-react-app`
* `npm install`
* `npm run dev`
___
## :two:Устанавливаем Eslint, Redux
* `npm init @eslint/config`
* `npm install -D eslint-plugin-react eslint-plugin-react-hooks eslint-config-airbnb redux react-redux react-router-dom`
___
## :three:Настройка файла .eslintrc.json
```
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/jsx-runtime",
        "plugin:import/recommended",
        "airbnb",
        "prettier",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react-hooks",
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "import/prefer-default-export": "off",
        "react/prop-types": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".ts"] }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn" 
    }
}
```
___
## :four:Устанавливаем Prettier
* `npm install -D --save-exact prettier eslint-config-prettier`
* `echo {}> .prettierrc.json`
___
## :five:Настройка файла .prettierrc.json
```
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": true,
  "singleQuote": true
}
```
### :white_check_mark: Проект готов к работе `npm run dev`
