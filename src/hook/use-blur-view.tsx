import { BlurViewContext } from '@provider/blur-view/context';
import { useContext } from 'react';

export const useBlurView = () => {
  const payload = useContext(BlurViewContext);
  if (!payload) {
    throw new Error('useBlurView must be use within BlurViewProvider.');
  }
  return payload;
};
