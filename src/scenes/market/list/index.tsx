import { Icon } from '@components/common-icon';
import { ListFullOption } from '@components/list';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import React, { memo, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { list } from '../__mocks__/data';

const _List = () => {
  const renderItemContent = useCallback((item, index, isFavorite, onPress) => {
    return (
      <View style={[commonStyles.row, commonStyles.spaceBetween, styles.item]}>
        <View>
          <Text fontType="fontBold" fontSize={Platform.SizeScale(15)}>
            {item.name.toLocaleUpperCase()} /{' '}
            <Text color={COLORS._909090} fontSize={Platform.SizeScale(12)}>
              {item.nameRate.toLocaleUpperCase()}
            </Text>
          </Text>
          <Text mt={Platform.SizeScale(5)} fontSize={Platform.SizeScale(10)} color={COLORS._909090}>
            {item.vol}
          </Text>
        </View>
        <View>
          <Text color={COLORS._03CA3B}>{item.price}</Text>
          <Text mt={Platform.SizeScale(5)} fontSize={Platform.SizeScale(10)} color={COLORS._909090}>
            {item.price}
          </Text>
        </View>
        <View style={styles.percent} backgroundColor={COLORS._F42C2C}>
          <Text fontType="fontBold" fontSize={Platform.SizeScale(12)} color={COLORS.WHITE}>
            {item.percent}
          </Text>
        </View>
        <View>
          <Touchable {...{ onPress }}>
            {isFavorite ? (
              <Icon icon={Icons.ICON_ACTIVE_STAR} size={2} />
            ) : (
              <Icon icon={Icons.ICON_UNACTIVE_STAR} size={2} />
            )}
          </Touchable>
        </View>
      </View>
    );
  }, []);

  return (
    <View>
      <ListFullOption isMultiSelect data={list} renderSubItem={renderItemContent} noRefresh />
    </View>
  );
};

export const List = memo(_List);

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.WHITE,
    marginVertical: Platform.SizeScale(5),
    marginHorizontal: Platform.SizeScale(10),
    padding: Platform.SizeScale(10),
    borderRadius: Platform.SizeScale(5),
  },
  percent: {
    paddingHorizontal: Platform.SizeScale(10),
    paddingVertical: Platform.SizeScale(5),
    borderRadius: Platform.SizeScale(5),
  },
});
