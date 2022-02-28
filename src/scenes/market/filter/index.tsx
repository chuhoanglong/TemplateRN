import { Icon } from '@components/common-icon';
import { ListFullOption } from '@components/list';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Platform } from '@theme/platform';
import React, { memo, Ref, useCallback, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { tabs } from '../__mocks__/data';

const _Filters = () => {
  const touchableRef = useRef<any>();

  const renderItemContent = useCallback(
    (item, index, isFavorite, onPress) => {
      const isFocus = isFavorite;
      const backgroundColor = isFavorite ? COLORS._26BBA9 : COLORS.WHITE;
      return index === 0 ? (
        <Touchable ref={touchableRef} style={[styles.item, { backgroundColor }]} {...{ onPress }}>
          <Text color={isFocus ? COLORS.WHITE : COLORS.BLACK}>{item.name}</Text>
        </Touchable>
      ) : (
        <Touchable style={[styles.item, { backgroundColor }]} {...{ onPress }}>
          <Text color={isFocus ? COLORS.WHITE : COLORS.BLACK}>{item.name}</Text>
        </Touchable>
      );
    },
    [touchableRef],
  );

  useEffect(() => {
    setTimeout(() => {
      touchableRef?.current?.onPress?.({});
    }, 500);
  }, [touchableRef]);

  return (
    <View>
      <View mh={Platform.SizeScale(10)} style={[commonStyles.row, commonStyles.spaceBetween]}>
        <Text>Filter: </Text>
        <ListFullOption
          data={tabs}
          renderSubItem={renderItemContent}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.list}
          noRefresh
        />
      </View>
    </View>
  );
};

export const Filters = memo(_Filters);

const styles = StyleSheet.create({
  list: {
    marginVertical: Platform.SizeScale(2),
    paddingVertical: Platform.SizeScale(10),
  },
  item: {
    alignItems: 'center',
    paddingHorizontal: Platform.SizeScale(10),
    marginHorizontal: Platform.SizeScale(10),
    paddingVertical: Platform.SizeScale(5),
    borderRadius: Platform.SizeScale(5),
  },
  line: {
    height: 3,
    width: Platform.SizeScale(60),
    backgroundColor: COLORS._26BBA9,
    position: 'absolute',
    bottom: Platform.SizeScale(-12),
  },
});
