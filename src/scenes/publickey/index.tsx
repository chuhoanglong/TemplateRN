import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { usePublickeyStyle } from './styles';
import { Topbar } from '@components/topbar';
import { View } from '@components/view';
import { Text } from '@components/text';
import { Platform } from '@theme/platform';
import { ListFullOption } from '@components/list';
import { COLORS } from '@theme/colors';
import { keys } from './__mocks__/data';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';
import commonStyles from '@theme/commonStyles';

const _PublickeyScreen = ({}) => {
  const navigation = useNavigation();
  const styles = usePublickeyStyle();

  const renderItemContent = useCallback(
    item => {
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
              <View>
                <Icon icon={Icons.ICON_COPY} size={2} />
              </View>
            </View>
            <View mt={Platform.SizeScale(10)}>
              <Text fontSize={Platform.SizeScale(11)} fontType="fontLight">
                {item.key}
              </Text>
            </View>
          </View>
        </View>
      );
    },
    [styles.item],
  );

  return (
    <View>
      <Topbar title="Wallet details">
        <View mh={Platform.SizeScale(10)}>
          <Text
            fontType="fontBold"
            mb={Platform.SizeScale(10)}
            fontSize={Platform.SizeScale(16)}
            color={COLORS._085A51}
          >
            Wallet name
          </Text>
          <ListFullOption
            listFooterComponent={<View style={{ height: Platform.SizeScale(150) }} />}
            data={keys}
            renderSubItem={renderItemContent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Topbar>
    </View>
  );
};

export const PublickeyScreen = memo(_PublickeyScreen);
