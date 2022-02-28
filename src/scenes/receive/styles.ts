import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useReceiveStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        qr: {
          width: Platform.SizeScale(310),
          height: Platform.SizeScale(310),
        },
      }),
    [insets],
  );
};
