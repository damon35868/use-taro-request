### install/安装

```bash
yarn add use-miniprogram-request
```

### 全局配置，在入口文件使用

` import { globalConfig } from 'use-miniprogram-request'`
` globalConfig.setConfig({
    baseUrl: 'https://test.com';
    header: {},
    timeout: 3000;
})`

### 引入 HOOKS

```tsx static
import { useRequest } from "use-miniprogram-request";
const { data, loading, error, refetch } = useRequest({ url: "/test" });
```

### 配置

```tsx static
 通过`manual`配置依赖请求，当传入 `false`时，将需要自己手动触发 refetch
import { useRequest } from 'use-miniprogram-request'

const { data, loading, error, refetch } = useRequest(
    {
      url: "/shop/list",
      params: {
        page: 1,
        pageSize: 10,
        orderBy: "id asc",
      },
    },
    { manual: true }
);
```
