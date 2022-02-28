import { Icon } from '@components/common-icon';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { useCopied } from '@hook/use-copied';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { usePublickeyStyle } from './styles';

const Key = ({ item }) => {
  const copy = useCopied();

  const styles = usePublickeyStyle();
  const onCopy = useCallback(() => {
    copy.onShow(item.key);
  }, [copy, item.key]);

  return (
    <View>
      <View
        mb={Platform.SizeScale(10)}
        borderRadius={Platform.SizeScale(20)}
        backgroundColor={COLORS.WHITE}
        style={styles.item}
      >
        <View style={[commonStyles.row, commonStyles.spaceBetween]}>
          <View style={[commonStyles.row]}>
            <Icon icon={Icons.ICON_AVATAR} size={3} />
            <Text ml={Platform.SizeScale(10)}>{item.name}</Text>
            <Text ml={Platform.SizeScale(10)} fontSize={Platform.SizeScale(12)} color={COLORS._13A6D4}>
              {item.channel}
            </Text>
          </View>
          <Touchable onPress={onCopy}>
            <View>
              <Icon icon={Icons.ICON_COPY} size={2} />
            </View>
          </Touchable>
        </View>
        <View mt={Platform.SizeScale(10)}>
          <Text fontSize={Platform.SizeScale(11)} fontType="fontLight">
            {item.key}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Key;

const styles = StyleSheet.create({});
