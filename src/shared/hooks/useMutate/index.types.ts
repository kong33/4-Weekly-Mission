import { HTTPMethod } from '@/src/constants';
// type 및 에러 클래스
export type useMutateProps = {
  url: string;
  method: string | HTTPMethod.POST;
};

export type callbacks<T> = {
  onSuccess: (result: T) => void;
  onError: (result: unknown) => void;
};

export type mutateProps<T> = (body: string | null, callbacks: callbacks<T>) => Promise<void>;

//https://medium.com/@yujso66/%EB%B2%88%EC%97%AD-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-%EC%A0%84%EB%AC%B8%EA%B0%80%EC%B2%98%EB%9F%BC-%EC%97%90%EB%9F%AC-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0-39d14f5cc6a2
//이 블로그를 보고 error를 커스텀 해 보았습니다. 불필요할까요?

export class ServerError extends Error {
  name: string;
  cause: any;

  constructor({ name, message, cause }: { name: string; message: string; cause?: any }) {
    super(message);
    this.name = name;
    this.cause = cause;
  }
}
