import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { pickBy, identity } from 'lodash';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';

type Props = {
  text: string;
  type?: 'gradient' | 'gradient2' | 'border' | 'full' | 'normal';
  onPress?: () => void;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
};
const _CommonButton = ({ text, type, onPress, width, height, style, textColor, disabled, icon }: Props) => {
  switch (type) {
    case 'normal':
      return (
        <Touchable {...{ disabled, onPress }}>
          <View style={[styles.container, style, pickBy({ width, height }, identity)]}>
            <Text fontType="fontBold" color={textColor ?? COLORS._1AC1AD} fontSize={Platform.SizeScale(15)}>
              {text}
            </Text>
          </View>
        </Touchable>
      );
    case 'gradient':
      return (
        <Touchable {...{ disabled, onPress }}>
          <LinearGradient
            useAngle
            angle={137.31}
            colors={COLORS.BUTTON_GRADIENT}
            style={[styles.container, style, pickBy({ width, height }, identity)]}
          >
            <Text color={textColor ?? COLORS.WHITE} fontType="fontBold" fontSize={Platform.SizeScale(15)}>
              {text}
            </Text>
          </LinearGradient>
        </Touchable>
      );

    case 'gradient2':
      return (
        <Touchable {...{ disabled, onPress }}>
          <LinearGradient
            useAngle
            angle={137.31}
            colors={COLORS.MINT_GREEN_GRADIENT}
            style={[styles.container, style, pickBy({ width, height }, identity)]}
          >
            <Text color={textColor ?? COLORS.WHITE} fontType="fontBold" fontSize={Platform.SizeScale(15)}>
              {text}
            </Text>
          </LinearGradient>
        </Touchable>
      );

    case 'border':
      return (
        <Touchable {...{ disabled, onPress }} style={[styles.container1, style, pickBy({ width, height }, identity)]}>
          {icon}
          <Text fontSize={Platform.SizeScale(15)} color={textColor ?? COLORS.GREEN}>
            {text}
          </Text>
        </Touchable>
      );
    default:
      return (
        <Touchable {...{ disabled, onPress }} style={[styles.container2, style, pickBy({ width, height }, identity)]}>
          <Text fontType="fontBold" fontSize={Platform.SizeScale(15)} color={textColor ?? COLORS.WHITE}>
            {text}
          </Text>
        </Touchable>
      );
  }
};

export const CommonButton = memo(_CommonButton);

const styles = StyleSheet.create({
  container: {
    width: Platform.SizeScale(91),
    height: Platform.SizeScale(37),
    borderRadius: Platform.SizeScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    width: Platform.SizeScale(91),
    height: Platform.SizeScale(37),
    borderRadius: Platform.SizeScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.GREEN,
    flexDirection: 'row',
  },
  container2: {
    width: Platform.SizeScale(91),
    height: Platform.SizeScale(37),
    borderRadius: Platform.SizeScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.GREEN,
  },
});
