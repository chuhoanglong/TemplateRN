import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useAddWalletStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
        iconButtonAdd: {
          backgroundColor: COLORS._0F7D70,
          borderRadius: Platform.SizeScale(15),
          padding: Platform.SizeScale(5),
        },
        buttonAdd: {
          backgroundColor: COLORS.WHITE,
          paddingVertical: Platform.SizeScale(20),
          borderRadius: Platform.SizeScale(30),
          marginHorizontal: Platform.SizeScale(10),
        },
        button: {
          backgroundColor: COLORS.WHITE,
          alignSelf: 'center',
        },
      }),
    [],
  );
};
