import { useState, useCallback } from "react";

import { RequestType, UseHttpRequestHook } from "./interfaces";

export const useHttpRequest: UseHttpRequestHook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const HEADERS = {
    "Content-Type": "application/json",
  };

  const request: RequestType = useCallback(
    async (url, method = "GET", body = null, headers = HEADERS) => {
      setLoading(true);

      if (body) {
        body = JSON.stringify(body);
      }

      console.log(url, method, body, headers);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          mode: "no-cors",
        });

        console.log(response);

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Something went wrong");
        }

        setLoading(false);

        return data;
      } catch (e) {
        setLoading(false);
        //@ts-ignore
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearErrors = () => setError(null);

  return [request, loading, error, clearErrors];
};
