### install/安装

```bash
yarn add use-taro-request
```

### 全局配置，在入口文件使用

```tsx static
import { taroRequestConfig } from 'use-taro-request'
taroRequestConfig({
    baseUrl: 'https://test.com';
    header: {},
    timeout: 3000;
    // ...
})
```

### 引入 HOOKS

```tsx static
import { useTaroRequest } from "use-taro-request";
const { data, loading, error, refetch } = useTaroRequest({ url: "/test" });
```

### 配置

```tsx static
// 通过 manual 属性配置依赖请求，当传入 true 时，将需要自己手动触发 refetch
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
