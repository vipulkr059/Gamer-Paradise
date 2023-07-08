import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  id: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const controller = new AbortController();
  const signal = controller.signal;

  const [data, setdata] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  useEffect(
    () => {
      setisLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal, ...requestConfig })
        .then((res) => {
          setdata(res.data.results);
          setisLoading(false);
        });
      //   .catch((err) => {
      //     if (err instanceof CanceledError) return;
      //     setError(err.message);
      //     setisLoading(false);
      //   });
      // return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};
export default useData;
