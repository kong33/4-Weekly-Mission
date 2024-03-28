import { useState } from 'react';
import { HTTPMethod } from '@/shared/constants';

//타입과 클래스들을 따로 뺴는 게 나을까요?
//https://medium.com/@yujso66/%EB%B2%88%EC%97%AD-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-%EC%A0%84%EB%AC%B8%EA%B0%80%EC%B2%98%EB%9F%BC-%EC%97%90%EB%9F%AC-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0-39d14f5cc6a2
//이 블로그를 보고 error를 커스텀 해 보았습니다. 불필요할까요?

const useMutate = <T>({
  url,
  method = 'POST',
}: useMutateProps): {
  data: T | null;
  mutate: mutateProps;
  isLoading: boolean;
} => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutate = async (
    body: string | null,
    { onSuccess, onError }: callbacks,
  ) => {
    setIsLoading(true);
    try {
      const requestOptions = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: '',
      };

      if (body) {
        requestOptions.body = JSON.stringify(body);
      }

      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new ServerError({
          name: 'SERVER_ERROR',
          message: '서버가 응답하지 않습니다.',
          cause: new Error('서버 응답 오류'),
        });
      }

      const result = await response.json();

      if (onSuccess) {
        onSuccess(result);
      }

      setData(result);
    } catch (error) {
      if (onError) {
        onError(error instanceof ServerError);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { data, mutate, isLoading };
};

export default useMutate;

type useMutateProps = {
  url: string;
  method: string | HTTPMethod.POST;
};
type callbacks = {
  onSuccess: (result: string) => void;
  onError: (result: unknown) => void;
};
type mutateProps = (body: string | null, callbacks: callbacks) => Promise<void>;

class ServerError extends Error {
  name: string;
  cause: any;

  constructor({
    name,
    message,
    cause,
  }: {
    name: string;
    message: string;
    cause?: any;
  }) {
    super(message);
    this.name = name;
    this.cause = cause;
  }
}
