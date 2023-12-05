# 構築メモ


## インストール

```
npx create-next-app --typescript <app name>
npx storybook@latest init
```

## storybook設定

```
// .storybook/main.ts
const config: StorybookConfig = {
  staticDirs: ['../public'], // publicな静的コンテンツを認識させるために設定
};
```
