import { HTTPMethod } from "../../constants";
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

export class ServerError extends Error {
  name: string;
  cause: any;

  constructor({ name, message, cause }: { name: string; message: string; cause?: any }) {
    super(message);
    this.name = name;
    this.cause = cause;
  }
}
