import { request } from "@tarojs/taro";
import { useEffect, useState } from "react";
import { config } from "./config";
import { configOptions, requestOptions } from "./types";

export const useTaroRequest = ({ url, method = "POST", params = {} }: requestOptions, reqConfig?: configOptions) => {
  const { manual } = reqConfig || {};
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { baseUrl, header, ...otherConfig } = config || {};

  const refetch = async () => {
    try {
      setLoading(true);
      const response = await request({
        method,
        data: params,
        url: baseUrl ? baseUrl + url : url,
        header: {
          contentType: "application/json",
          ...header
        },
        ...otherConfig
      });

      setData(response.data ? (response.data.data ? response.data.data : response.data) : response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    !manual && refetch();
  }, [manual]);

  return { data, error, loading, refetch };
};
