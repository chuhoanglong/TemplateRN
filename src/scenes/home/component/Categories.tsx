import { Icon } from '@components/common-icon';
import { ListFullOption } from '@components/list';
import { Text } from '@components/text';
import { View } from '@components/view';
import { Platform } from '@theme/platform';
import React, { memo, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { categories } from '../__mocks__/data';

const _Categories = () => {
  const renderItemContent = useCallback(item => {
    return (
      <View mt={Platform.SizeScale(10)} alignItems="center" flex={1}>
        <Icon icon={item.image} size={8} />
        <Text>{item.name}</Text>
      </View>
    );
  }, []);

  return (
    <View>
      <ListFullOption
        // listFooterComponent={<View style={{ height: Platform.SizeScale(100) }} />}
        data={categories}
        renderSubItem={renderItemContent}
        showsVerticalScrollIndicator={false}
        numColumns={4}
        style={styles.list}
      />
    </View>
  );
};

export const Categories = memo(_Categories);

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: Platform.SizeScale(10),
  },
});
