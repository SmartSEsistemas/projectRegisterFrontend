import { MessageFetch } from '@/@types/messageFetch/MessageFetch';
import React from 'react';

interface ReturnFetch<T> {
  response: Response | undefined;
  json: T;
}

function useFetch<T>() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState<MessageFetch>({
    Message: '',
    Status_code: 0,
    value: false,
  });
  const [loading, setLoading] = React.useState(false);
  const request = React.useCallback(
    async (url: string, options: any): Promise<ReturnFetch<T>> => {
      let response;
      let json;
      try {
        setError({ Message: '', Status_code: 200, value: false });
        setLoading(true);
        response = await fetch(url, options);
        json = await response.json();
        if (!response.ok)
          setError({
            Message: json.Message,
            Status_code: json.Status_code,
            value: true,
          });
      } catch (error: any) {
        json = null;
      } finally {
        setData(json);
        setLoading(false);
        return { response, json };
      }
    },
    [],
  );

  return {
    data,
    loading,
    error,
    request,
  };
}

export default useFetch;
