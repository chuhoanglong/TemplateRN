import { ReactNavigationInstrumentation } from '@sentry/react-native';
import { ReactNode } from 'react';

export interface SentryProps {
  children: ReactNode;
}

export interface SentryContextValue {
  routingInstrumentation: ReactNavigationInstrumentation;
}
