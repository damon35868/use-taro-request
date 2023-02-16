import { configTypes } from "./types";

class Config {
  public config: configTypes | undefined;

  setConfig(config: configTypes) {
    if (!config) throw new Error("参数错误");
    this.config = config;
  }
}

export default new Config();
