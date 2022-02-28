import { ListFullOption } from '@components/list';
import { Text } from '@components/text';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Platform } from '@theme/platform';
import React, { memo, useCallback } from 'react';
import { useParsephaseTableStyle } from './styles';
import { table } from './__mocks__/data';
import Color from 'color';
import { TablePassPhrase } from '@redux/wallet/types';

const _ParsephaseTable = ({ dataTablePassphrase }: { dataTablePassphrase: TablePassPhrase[] }) => {
  const styles = useParsephaseTableStyle();
  const renderItemContent = useCallback(
    (item, index) => {
      return (
        <View style={styles.tableItem}>
          <View style={[commonStyles.row, {}]}>
            <Text mr={Platform.SizeScale(5)} color={Color(COLORS.BLACK, 'hex').alpha(0.3).toString()}>
              {item.index + 1}
            </Text>
            <View>
              <Text fontSize={Platform.SizeScale(14)}>{item.name}</Text>
            </View>
          </View>
        </View>
      );
    },
    [styles.tableItem],
  );

  return (
    <View style={{ zIndex: -1 }} mt={Platform.SizeScale(10)}>
      <ListFullOption
        // listFooterComponent={<View style={{ height: Platform.SizeScale(100) }} />}
        data={dataTablePassphrase}
        renderSubItem={renderItemContent}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        style={styles.list}
      />
    </View>
  );
};

export const ParsephaseTable = memo(_ParsephaseTable);
