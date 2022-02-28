import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useStylesTextField = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        content: {
          borderRadius: Platform.SizeScale(10),
          borderColor: COLORS.CONCRETE,
          borderWidth: 1,
          height: Platform.SizeScale(40),
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: Platform.SizeScale(6),
          backgroundColor: COLORS.WHITE,
        },
        input: {
          flexGrow: 1,
          padding: Platform.SizeScale(6),
          ...Platform.textBase,
          color: COLORS.BLACK,
        },
        vLabel: {
          position: 'absolute',
          backgroundColor: COLORS.WHITE,
          paddingHorizontal: Platform.SizeScale(6),
          left: '8%',
        },
        label: {
          color: COLORS.BLACK,
        },
        prefix: {
          color: COLORS.BLACK,
          marginLeft: Platform.SizeScale(6),
        },
        borderFocus: {
          color: COLORS.BLACK,
        },
        iconHidden: {
          fontSize: Platform.SizeScale(18),
          color: COLORS.BLACK,
          marginRight: Platform.SizeScale(3),
        },
      }),
    [],
  );
};
