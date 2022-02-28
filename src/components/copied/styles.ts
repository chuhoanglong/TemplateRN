import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useCopiedStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        copy: {
          position: 'absolute',
          width: Platform.SizeScale(189),
          height: Platform.SizeScale(80),
          alignItems: 'center',
          justifyContent: 'center',
          top: Platform.deviceHeight / 2,
          alignSelf: 'center',
        },
      }),
    [],
  );
};
