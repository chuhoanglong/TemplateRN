import { BuySellButton } from '@components/buy-sell-button';
import { View } from '@components/view';
import commonStyles from '@theme/commonStyles';
import { Platform } from '@theme/platform';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

const _ButtonGroup = () => {
  return (
    <View mv={Platform.SizeScale(10)} style={[commonStyles.row, commonStyles.spaceBetween]} mh={Platform.SizeScale(10)}>
      <BuySellButton type="buy" />
      <BuySellButton type="sell" />
    </View>
  );
};

export const ButtonGroup = memo(_ButtonGroup);

const styles = StyleSheet.create({});
