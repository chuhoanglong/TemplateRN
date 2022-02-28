import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SentryContext } from './context';
import { SentryContextValue, SentryProps } from './types';
import * as Sentry from '@sentry/react-native';
import Config from 'react-native-config';
import { version as packageVersion } from '../../../package.json';

const SentryProvider = ({ children }: SentryProps) => {
  const routingInstrumentation = useMemo(
    () =>
      new Sentry.ReactNavigationInstrumentation({
        // How long it will wait for the route change to complete. Default is 1000ms
        routeChangeTimeoutMs: 500,
      }),
    [],
  );

  useEffect(() => {
    Sentry.init({
      dsn: Config.SENTRY_DNS,
      release: packageVersion,
      environment: 'dev',
      beforeSend: e => {
        return e;
      },
      integrations: [
        new Sentry.ReactNativeTracing({
          tracingOrigins: ['localhost', /^\//, /^https:\/\//],
          // Pass instrumentation to be used as `routingInstrumentation`
          routingInstrumentation,
          // To set a uniform sample rate
          // ...
        }),
      ],
      tracesSampleRate: 1.0,
      enableAutoSessionTracking: true, // For testing, session close when 5 seconds (instead of the default 30) in the background.
      sessionTrackingIntervalMillis: 5000,
      maxBreadcrumbs: 150, // Extend from the default 100 breadcrumbs.
    });
  }, [routingInstrumentation]);
  const contextValue = useMemo<SentryContextValue>(
    () => ({
      routingInstrumentation,
    }),
    [routingInstrumentation],
  );

  return (
    <>
      <SentryContext.Provider value={contextValue}>{children}</SentryContext.Provider>
    </>
  );
};

export default SentryProvider;
