import { useState, useCallback } from "react";
import axios from "axios";

const base = axios.create({ baseURL: "http://localhost:3300/api/" });
const REQUEST = { GET: base.get, POST: base.post };

import { RequestType, UseHttpRequestHook } from "./interfaces";

export const useHttpRequest: UseHttpRequestHook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const request: RequestType = useCallback(
    async (url, method = "GET", body = null, headers) => {
      setLoading(true);
      setError(null);

      const response = await REQUEST[method](url, body)
        .then((res) => {
          setLoading(false);
          return res.data;
        })
        .catch((err) => {
          setError("Something went wrong");
          setLoading(false);
          throw new Error("Something went wrong");
        });

      return response;
    },
    []
  );

  const clearErrors = () => setError(null);

  return [request, loading, error, clearErrors];
};
