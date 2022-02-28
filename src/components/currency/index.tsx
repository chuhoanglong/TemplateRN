import { Icon } from '@components/common-icon';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { RootState } from '@redux/reducers';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useCurrencyStyle } from './styles';

interface IProps {
  onPress?: () => void;
}
const _Currency = ({ onPress }: IProps) => {
  const { currentToken } = useSelector((state: RootState) => state.wallet);

  const styles = useCurrencyStyle();
  return (
    <Touchable {...{ onPress }} style={[commonStyles.row, styles.currency]}>
      <Icon icon={Icons.ICON_AVATAR} size={4} />
      <Text mh={Platform.SizeScale(10)} fontSize={Platform.SizeScale(15)}>
        {currentToken?.symbol}
      </Text>
      <Text mr={Platform.SizeScale(20)} color={COLORS._888888} fontSize={Platform.SizeScale(11)}>
        ({currentToken?.coinName})
      </Text>
      <Icon icon={Icons.ICON_ARROW_RIGHT} size={2} />
    </Touchable>
  );
};

export const Currency = memo(_Currency);
