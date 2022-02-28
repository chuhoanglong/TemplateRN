import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import React, { memo } from 'react';
import { useBuySellButtonStyle } from './styles';

const _BuySellButton = ({ type }: { type: 'buy' | 'sell' }) => {
  const styles = useBuySellButtonStyle();
  return type === 'buy' ? (
    <Touchable style={styles.buy}>
      <Text fontType="fontBold" fontSize={Platform.SizeScale(18)} color={COLORS.WHITE}>
        BUY
      </Text>
    </Touchable>
  ) : (
    <Touchable style={styles.sell}>
      <Text fontType="fontBold" fontSize={Platform.SizeScale(18)} color={COLORS.WHITE}>
        SELL
      </Text>
    </Touchable>
  );
};

export const BuySellButton = memo(_BuySellButton);
