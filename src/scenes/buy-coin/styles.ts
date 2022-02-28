import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useBuyCoinStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        buttonHeader: {
          width: Platform.SizeScale(20),
          height: Platform.SizeScale(20),
          borderRadius: Platform.SizeScale(10),
          backgroundColor: COLORS.WHITE,
          alignItems: 'center',
          justifyContent: 'center',
          ...commonStyles.shadow,
        },
        inputStyles: {
          color: COLORS.GREEN,
        },
        inputRateStyle: {
          height: Platform.SizeScale(41),
          borderRadius: Platform.SizeScale(20),
          borderColor: COLORS.WHITE,
          backgroundColor: COLORS._F4F5F7,
        },
        choice: {
          backgroundColor: COLORS._26BBA9,
          paddingVertical: Platform.SizeScale(5),
          paddingHorizontal: Platform.SizeScale(5),
          borderRadius: Platform.SizeScale(20),
        },
        button: {
          backgroundColor: COLORS._139B8B_30,
          alignSelf: 'center',
        },
      }),
    [insets],
  );
};
