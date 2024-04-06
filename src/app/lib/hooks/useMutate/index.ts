import { useState } from 'react';
import {
  useMutateProps,
  callbacks,
  mutateProps,
  ServerError,
} from './index.type';

const useMutate = <T>({
  url,
  method = 'POST',
}: useMutateProps): {
  data: T | null;
  mutate: mutateProps<T>;
  isLoading: boolean;
} => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutate = async (
    body: string | null,
    { onSuccess, onError }: callbacks<T>,
  ): Promise<void> => {
    setIsLoading(true);
    try {
      const requestOptions = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : null,
      };

      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new ServerError({
          name: 'SERVER_ERROR',
          message: '서버가 응답하지 않습니다.',
          cause: new Error('서버 응답 오류'),
        });
      }

      const result = await response.json();
      onSuccess(result);
      setData(result);

    } catch (error) {
      if (error instanceof ServerError) {
        onError(error);

      } else {
        onError(
          new ServerError({
            name: 'UNKNOWN_ERROR',
            message: '알 수 없는 에러',
            cause: error,
          }),
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { data, mutate, isLoading };
};

export default useMutate;
