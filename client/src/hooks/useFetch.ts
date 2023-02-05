/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { HttpException } from '../exceptions';

export const useFetch = <T>(
  url: string,
  dependencies: any[],
  options?: RequestInit | undefined
) => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | HttpException | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isCanceled = false;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url, { ...options });
        const json = await res.json();

        if (!res.ok) {
          throw new HttpException(
            res.status,
            `Failed with status code ${res.status}`
          );
        }

        if (!isCanceled) {
          setResponse(json);
        }
      } catch (err: any) {
        if (!isCanceled) {
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    return () => {
      isCanceled = true;
    };
  }, dependencies);

  return { response, error, isLoading };
};
