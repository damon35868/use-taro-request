export interface configTypes {
  baseUrl?: string;
  header?: TaroGeneral.IAnyObject;
  timeout?: number;
}

export interface requestOptions {
  url: string;
  method?: keyof Method | undefined;
  params?: any;
}

export interface configOptions {
  manual?: boolean;
}

/** HTTP 请求方法 */
export interface Method {
  /** HTTP 请求 OPTIONS */
  OPTIONS;
  /** HTTP 请求 GET */
  GET;
  /** HTTP 请求 HEAD */
  HEAD;
  /** HTTP 请求 POST */
  POST;
  /** HTTP 请求 PUT */
  PUT;
  /** HTTP 请求 DELETE */
  DELETE;
  /** HTTP 请求 TRACE */
  TRACE;
  /** HTTP 请求 CONNECT */
  CONNECT;
}

export interface GlobalConfig {
  config: configTypes | undefined;
  setConfig: Function;
}
