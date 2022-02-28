import { Icon } from '@components/common-icon';
import { ListFullOption } from '@components/list';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenRouteT } from '@routes/types';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import Color from 'color';
import React, { memo, Ref, useCallback, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { tabs } from '../__mocks__/data';

const _Tabs = () => {
  const touchableRef = useRef<any>();
  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'Market'>>();

  const renderItemContent = useCallback(
    (item, index, isFavorite, onPress) => {
      const isFocus = isFavorite;
      return index === 0 ? (
        <Touchable ref={touchableRef} style={[styles.item]} {...{ onPress }}>
          <Text
            fontType={isFocus ? 'fontBold' : 'fontRegular'}
            color={isFocus ? COLORS._085A51 : Color(COLORS._085A51, 'hex').alpha(0.4).toString()}
          >
            {item.name}
          </Text>
          {isFocus && <View style={styles.line} />}
        </Touchable>
      ) : (
        <Touchable style={[styles.item]} {...{ onPress }}>
          <Text
            fontType={isFocus ? 'fontBold' : 'fontRegular'}
            color={isFocus ? COLORS._085A51 : Color(COLORS._085A51, 'hex').alpha(0.4).toString()}
          >
            {item.name}
          </Text>
          {isFocus && <View style={styles.line} />}
        </Touchable>
      );
    },
    [touchableRef],
  );

  const onSearch = useCallback(() => {
    navigation.navigate('MarketStack', {
      screen: 'SearchMarket',
    });
  }, [navigation]);

  useEffect(() => {
    setTimeout(() => {
      touchableRef?.current?.onPress?.({});
    }, 500);
  }, [touchableRef]);

  return (
    <View>
      <View mh={Platform.SizeScale(10)} style={[commonStyles.row, commonStyles.spaceBetween]}>
        <ListFullOption
          data={tabs}
          renderSubItem={renderItemContent}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.list}
          noRefresh
        />
        <View mh={Platform.SizeScale(20)}>
          <Touchable onPress={onSearch}>
            <Icon tintColor={COLORS._085A51} icon={Icons.ICON_SEARCH} size={2} />
          </Touchable>
        </View>
      </View>
    </View>
  );
};

export const Tabs = memo(_Tabs);

const styles = StyleSheet.create({
  list: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS._26BBA9,
    marginVertical: Platform.SizeScale(2),
    paddingVertical: Platform.SizeScale(10),
  },
  item: {
    alignItems: 'center',
    marginHorizontal: 1,
    paddingHorizontal: Platform.SizeScale(10),
  },
  line: {
    height: 3,
    width: Platform.SizeScale(60),
    backgroundColor: COLORS._26BBA9,
    position: 'absolute',
    bottom: Platform.SizeScale(-12),
  },
});
