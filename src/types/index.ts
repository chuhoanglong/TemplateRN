export interface ApiParamsT {
  url?: string;
  callback?: (params: any, type?: 'SUCCESS' | 'ERROR') => void;
}
