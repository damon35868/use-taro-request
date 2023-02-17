import { configTypes } from "./types";

export const config: configTypes = {
  baseUrl: "",
  header: {}
};

export function taroRequestConfig(newConfig: configTypes) {
  if (typeof newConfig !== "object") return;
  Object.assign(config, newConfig);
}
