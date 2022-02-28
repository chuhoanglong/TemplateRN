import { useContext } from 'react';
import { SentryContext } from '../tools/sentry/context';

export const useSentry = () => {
  const payload = useContext(SentryContext);
  if (!payload) {
    throw new Error('useSentry must be use within SentryProvider.');
  }
  return payload;
};
