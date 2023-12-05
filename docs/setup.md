# 構築メモ

## インストール

```
npx create-next-app --typescript test
npx storybook@latest init

yarn add -D prettier prettier-plugin-tailwindcss
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-standard-with-typescript eslint-plugin-import eslint-plugin-n eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unused-imports eslint-config-prettier

```

## storybook設定

```
// .storybook/main.ts
const config: StorybookConfig = {
  staticDirs: ['../public'], // publicな静的コンテンツを認識させるために設定
};
```
