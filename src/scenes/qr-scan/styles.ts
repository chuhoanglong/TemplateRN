import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useQrScanStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        scanner: {
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: Platform.deviceWidth,
          height: Platform.deviceHeight,
          zIndex: -1,
        },
      }),
    [insets],
  );
};
