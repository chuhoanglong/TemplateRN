import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useBlurViewStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: Platform.deviceWidth,
          height: Platform.deviceHeight,
          position: 'absolute',
        },
      }),
    [],
  );
};
