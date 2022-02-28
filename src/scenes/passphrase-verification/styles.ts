import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const usePassphraseVerificationStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        passphraseInput: {
          height: Platform.SizeScale(137),
          borderRadius: Platform.SizeScale(20),
          borderColor: COLORS.WHITE,
        },
        inputStyles: {
          color: COLORS.GREEN,
          height: Platform.SizeScale(130),
          padding: Platform.SizeScale(10),
        },
        button: {
          backgroundColor: COLORS._139B8B_30,
          alignSelf: 'center',
        },
        like: {
          width: Platform.SizeScale(123),
          height: Platform.SizeScale(94),
        },
      }),
    [insets],
  );
};
