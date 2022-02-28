declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.json';
declare module '*.png';
declare module '*.jpg';

export interface ResponseT<T> {
  success: boolean;
  message: string;
  error: ErrorT;
  data: T;
  ok?: boolean;
  status: number;
}

export interface ErrorT {
  httpCode: number;
  message: string;
  status: number;
}
