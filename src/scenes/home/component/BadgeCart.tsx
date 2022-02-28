import { Icon } from '@components/common-icon';
import { Text } from '@components/text';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

const _BadgeCart = () => {
  return (
    <View style={styles.container}>
      <Icon icon={Icons.ICON_CART} size={1.5} tintColor={COLORS.WHITE} />
      <View style={styles.badge}>
        <Text color={COLORS.WHITE}>5+</Text>
      </View>
    </View>
  );
};

export const BadgeCart = memo(_BadgeCart);

const styles = StyleSheet.create({
  container: {
    height: Platform.SizeScale(30),
    width: Platform.SizeScale(30),
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    bottom: Platform.SizeScale(10),
    zIndex: 999,
    borderRadius: Platform.SizeScale(10),
    width: Platform.SizeScale(20),
    height: Platform.SizeScale(20),
    alignItems: 'center',
  },
});
