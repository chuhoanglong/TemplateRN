import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useShowPassphraseStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        action: {
          backgroundColor: COLORS.WHITE,
          paddingVertical: Platform.SizeScale(5),
          paddingHorizontal: Platform.SizeScale(10),
          marginHorizontal: Platform.SizeScale(10),
          borderRadius: Platform.SizeScale(20),
          ...commonStyles.shadow,
        },
      }),
    [insets],
  );
};
