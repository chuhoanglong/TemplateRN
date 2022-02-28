import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useIconStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: Platform.SizeScale(25),
          height: Platform.SizeScale(25),
        },
      }),
    [],
  );
};
