import { Touchable } from '@components/touchable';
import commonStyles from '@theme/commonStyles';
import React, { memo } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { useBreadCrumbStyle } from './styles';

const _BreadCrumb = ({
  left,
  right,
  style,
  onPress,
}: {
  left?: React.ReactNode;
  right?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}) => {
  const styles = useBreadCrumbStyle();
  if (onPress) {
    return (
      <Touchable {...{ onPress }} style={[commonStyles.row, commonStyles.spaceBetween, styles.container, style]}>
        <View style={[styles.left]}>{left}</View>
        <View style={[styles.right]}>{right}</View>
      </Touchable>
    );
  }
  return (
    <View style={[commonStyles.row, commonStyles.spaceBetween, styles.container, style]}>
      <View style={[styles.left]}>{left}</View>
      <View style={[styles.right]}>{right}</View>
    </View>
  );
};

export const BreadCrumb = memo(_BreadCrumb);
