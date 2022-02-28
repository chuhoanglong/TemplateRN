import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useStyleWallet = () => {
  const insets = useSafeAreaInsets();

  return useMemo(
    () =>
      StyleSheet.create({
        logo: {
          width: Platform.SizeScale(131),
          height: Platform.SizeScale(15),
        },
        header: {
          paddingHorizontal: Platform.SizeScale(30),
          paddingTop: insets.top,
          paddingBottom: Platform.SizeScale(10),
        },
        leftBread: {
          alignItems: 'baseline',
        },
        rightBread: {
          backgroundColor: COLORS.GREEN,
          paddingVertical: Platform.SizeScale(5),
          paddingHorizontal: Platform.SizeScale(10),
          borderRadius: Platform.SizeScale(20),
        },
        txtRightBread: {
          fontSize: Platform.SizeScale(12),
          color: COLORS.WHITE,
          marginRight: Platform.SizeScale(5),
        },
        txtPrice: {
          fontSize: Platform.SizeScale(30),
          marginRight: Platform.SizeScale(10),
        },
        body: {
          backgroundColor: COLORS.BACKGROUND,
          paddingHorizontal: Platform.SizeScale(20),
          borderTopRightRadius: Platform.SizeScale(30),
          borderTopLeftRadius: Platform.SizeScale(30),
        },
        buttonGroup: {
          marginTop: Platform.SizeScale(20),
        },
        walletItem: {
          paddingTop: Platform.SizeScale(30),
        },
        category: {
          width: Platform.SizeScale(269),
          height: Platform.SizeScale(459),
          alignItems: 'center',
          borderRadius: Platform.SizeScale(20),
        },
        itemCategory: {
          paddingVertical: Platform.SizeScale(20),
        },
      }),
    [insets],
  );
};
