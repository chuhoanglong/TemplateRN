import { useContext } from 'react';
import { CopiedContext } from '../provider/copied/context';

export const useCopied = () => {
  const payload = useContext(CopiedContext);
  if (!payload) {
    throw new Error('useCopied must be use within CopiedProvider.');
  }
  return payload;
};
