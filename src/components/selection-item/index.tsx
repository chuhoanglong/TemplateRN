import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import React, { memo, useMemo } from 'react';
import { useSelectionItemStyle } from './styles';

const _SelectionItem = ({ item, index, isFavorite, onPress, renderLeftAccessory, renderRightAccessory }) => {
  const styles = useSelectionItemStyle();
  const backgroundColor = useMemo(() => {
    return isFavorite ? COLORS._EEFFF3 : COLORS.BACKGROUND;
  }, [isFavorite]);

  return (
    <Touchable {...{ onPress }} style={[commonStyles.row, styles.itemContainer, { backgroundColor }]}>
      <View style={[commonStyles.row]} flex={1}>
        {renderLeftAccessory?.()}
      </View>
      <View alignItems="flex-end" flex={1}>
        {renderRightAccessory?.()}
      </View>
    </Touchable>
  );
};

export const SelectionItem = memo(_SelectionItem);
