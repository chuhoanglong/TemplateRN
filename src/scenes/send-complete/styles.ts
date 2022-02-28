import { COLORS } from '@theme/colors';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useSendCompleteStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        button: {
          backgroundColor: COLORS._139B8B_30,
          alignSelf: 'center',
        },
      }),
    [insets],
  );
};
