import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Platform } from '@theme/platform';
import React, { memo, useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';

const _Header = () => {
  const [isActive, setIsActive] = useState(true);
  const changeTab = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  return (
    <View style={[commonStyles.row, styles.tab]}>
      <Touchable activeOpacity={1} onPress={changeTab} style={isActive ? styles.activeTab : styles.unActiveTab}>
        <Text
          fontType={isActive ? 'fontBold' : 'fontRegular'}
          color={isActive ? COLORS.WHITE : 'rgba(40, 40, 40, 0.5)'}
        >
          Market
        </Text>
      </Touchable>
      <Touchable activeOpacity={1} onPress={changeTab} style={!isActive ? styles.activeTab : styles.unActiveTab}>
        <Text
          fontType={!isActive ? 'fontBold' : 'fontRegular'}
          color={!isActive ? COLORS.WHITE : 'rgba(40, 40, 40, 0.5)'}
        >
          DeFi
        </Text>
      </Touchable>
    </View>
  );
};

export const Header = memo(_Header);

const styles = StyleSheet.create({
  tab: {
    width: Platform.SizeScale(191),
    height: Platform.SizeScale(36),
    backgroundColor: COLORS._0C6A62,
    borderRadius: Platform.SizeScale(20),
    alignSelf: 'center',
  },
  activeTab: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: Platform.SizeScale(101),
    height: Platform.SizeScale(36),
    borderRadius: Platform.SizeScale(20),
  },
  unActiveTab: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: Platform.SizeScale(101),
    height: Platform.SizeScale(36),
    borderRadius: Platform.SizeScale(20),
  },
});
