type Methods = "GET" | "POST";

export type RequestType = (
  url: string,
  method?: Methods,
  body?: any,
  headers?: any
) => any;

export type UseHttpRequestHook = () => [RequestType, boolean, any, () => void];
