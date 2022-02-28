import { ListFullOption } from '@components/list';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenRouteT } from '@routes/types';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Platform } from '@theme/platform';
import { showConfirm } from '@utils';
import React, { memo, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { history } from '../__mocks__/data';

const _ListHistory = () => {
  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'SearchMarket'>>();

  const onToProfile = useCallback(() => {
    navigation.navigate('MarketStack', { screen: 'CoinProfile' });
  }, [navigation]);

  const renderItemMenu = useCallback(
    (item, index, isFavorite, onPress) => {
      return (
        <Touchable onPress={onToProfile}>
          <View mv={Platform.SizeScale(8)} mh={Platform.SizeScale(8)} style={styles.item}>
            <Text fontSize={Platform.SizeScale(10)}>{item.name}</Text>
          </View>
        </Touchable>
      );
    },
    [onToProfile],
  );

  const onClear = useCallback(() => {
    showConfirm('Clear History', 'Confirm to clear search history?');
  }, []);

  return (
    <View style={{ width: Platform.deviceWidth }}>
      <View
        mh={Platform.SizeScale(20)}
        mv={Platform.SizeScale(20)}
        style={[commonStyles.row, commonStyles.spaceBetween]}
      >
        <Text color={COLORS._909090} fontSize={Platform.SizeScale(10)}>
          Search History
        </Text>
        <Touchable onPress={onClear} style={styles.clearHistory}>
          <Text fontSize={Platform.SizeScale(10)} color={COLORS._26BBA9}>
            Clear History
          </Text>
        </Touchable>
      </View>

      <ListFullOption
        style={styles.list}
        data={history}
        renderSubItem={renderItemMenu}
        horizontal={true}
        scrollEnabled={false}
      />
    </View>
  );
};

export const ListHistory = memo(_ListHistory);

const styles = StyleSheet.create({
  clearHistory: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS._26BBA9,
    borderRadius: Platform.SizeScale(20),
    alignItems: 'center',
    paddingHorizontal: Platform.SizeScale(10),
    paddingVertical: Platform.SizeScale(2),
  },
  list: {
    flex: 1,
    flexWrap: 'wrap',
    marginHorizontal: Platform.SizeScale(10),
    alignItems: 'center',
  },
  item: {
    backgroundColor: COLORS.WHITE,
    borderRadius: Platform.SizeScale(5),
    width: Platform.SizeScale(52),
    height: Platform.SizeScale(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
