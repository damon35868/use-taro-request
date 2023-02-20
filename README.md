# use-taro-request

[use-taro-request](https://www.npmjs.com/package/use-taro-request) 是基于 taro 及 react 开发的主要用于网络请求的 hooks。

[![npm](https://img.shields.io/npm/v/use-taro-request.svg)](https://www.npmjs.com/package/use-taro-request)
[![npm downloads](https://img.shields.io/npm/dt/use-taro-request.svg)](https://www.npmjs.com/package/use-taro-request)
[![npm license](https://img.shields.io/npm/l/use-taro-request.svg)](https://www.npmjs.com/package/use-taro-request)
[![npm bundle size](https://img.shields.io/bundlephobia/min/use-taro-request.svg)](https://bundlephobia.com/result?p=use-taro-request)
[![npm type definitions](https://img.shields.io/npm/types/use-taro-request.svg)](https://www.npmjs.com/package/use-taro-request)

## Installation / 安装

`npm`

```sh
npm install use-taro-request --save
```

`yarn`

```sh
yarn add use-taro-request
```

## Config / 配置

使用 `taroRequestConfig` 在程序入口文件，`app.tsx`或者`main.ts`等中导入并全局配置

```jsx
import { taroRequestConfig } from "use-taro-request";

taroRequestConfig({
  baseUrl: "https://example.com",
  header: {}
  // ...
});
```

## Usage / 使用

```jsx
import { useTaroRequest } from "use-taro-request";

const { data, loading, error, refetch } = useTaroRequest({ url: "/list" });
```

### manual / 手动触发请求

通过 `manual` 属性配置依赖请求，当传入 `true` 时，将需要自己手动触发 `refetch`

```tsx static
import { useTaroRequest } from "use-taro-request";

const { data, loading, error, refetch } = useTaroRequest(
  {
    url: "/list",
    params: {
      //...
    }
  },
  { manual: true }
);
```

## taro 请求配置

| Property  | Type     | Default | Description  |
| :-------- | :------- | :------ | :----------- |
| `baseUrl` | `string` | `''`    | 基础网络地址 |
| `header`  | `object` | `{}`    | 请求头       |
| `timeout` | `number` | `0`     | 请求 timeout |

## taro request hooks 配置

| Property | Type      | Default | Description      |
| :------- | :-------- | :------ | :--------------- |
| `manual` | `boolean` | `false` | 是否手动触发请求 |
