import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useMarketCoinProfileStyle } from './styles';
import { Topbar } from '@components/topbar';
import { View } from '@components/view';
import commonStyles from '@theme/commonStyles';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import { Text } from '@components/text';
import { COLORS } from '@theme/colors';
import { ButtonGroup } from './buttonGroup';
import { ScrollView } from 'react-native';
import { DropdownSelection } from '@components/dropdown-selection';
import { Touchable } from '@components/touchable';
import { Chart } from './Chart';

const _MarketCoinProfileScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useMarketCoinProfileStyle();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderHeader = useCallback(() => {
    return (
      <View style={{ flex: 1 }}>
        <View style={[commonStyles.row, commonStyles.spaceBetween]}>
          <Touchable onPress={onBack}>
            <Icon tintColor={COLORS._085A51} icon={Icons.ICON_BACK} />
          </Touchable>
          <View style={[commonStyles.row]}>
            <Text fontType="fontBold" fontSize={Platform.SizeScale(20)} color={COLORS._085A51}>
              BTC / USDT
            </Text>
          </View>
          <View style={[commonStyles.row]}>
            <Icon icon={Icons.ICON_ACTIVE_STAR} />
          </View>
        </View>
      </View>
    );
  }, [onBack]);

  return (
    <View>
      <Topbar renderHeader={renderHeader}>
        <View flex={1}>
          <View style={[commonStyles.row, commonStyles.spaceBetween]}>
            <View mh={Platform.SizeScale(20)} flex={1}>
              <View style={[commonStyles.row, commonStyles.spaceBetween]}>
                <Text fontSize={Platform.SizeScale(20)} fontType="fontBold">
                  32,968.65
                </Text>
                <Icon icon={Icons.ICON_INCREASE} size={2} />
              </View>
              <View mv={Platform.SizeScale(10)} style={[commonStyles.row, commonStyles.spaceBetween]}>
                <Text fontSize={Platform.SizeScale(12)} color={COLORS._282828}>
                  $ 32,968.65
                </Text>
                <Text color={COLORS._03CA3B} fontSize={Platform.SizeScale(12)}>
                  32 %
                </Text>
              </View>
              <View style={[commonStyles.row, commonStyles.spaceBetween]}>
                <DropdownSelection />
                <DropdownSelection width={Platform.SizeScale(100)} />
              </View>
            </View>
            <View borderRadius={Platform.SizeScale(20)} backgroundColor={COLORS.WHITE} flex={1}>
              <View
                mt={Platform.SizeScale(10)}
                mh={Platform.SizeScale(20)}
                style={[commonStyles.row, commonStyles.spaceBetween]}
              >
                <Text color={COLORS._282828} fontSize={Platform.SizeScale(10)}>
                  24h VOL
                </Text>
                <Text fontSize={Platform.SizeScale(10)}>1,764,868,339</Text>
              </View>
              <View
                mh={Platform.SizeScale(20)}
                mv={Platform.SizeScale(10)}
                style={[commonStyles.row, commonStyles.spaceBetween]}
              >
                <Text color={COLORS._282828} fontSize={Platform.SizeScale(10)}>
                  24h VOL
                </Text>
                <Text fontSize={Platform.SizeScale(10)}>1,764,868,339</Text>
              </View>
              <View
                mb={Platform.SizeScale(10)}
                mh={Platform.SizeScale(20)}
                style={[commonStyles.row, commonStyles.spaceBetween]}
              >
                <Text color={COLORS._282828} fontSize={Platform.SizeScale(10)}>
                  24h VOL
                </Text>
                <Text fontSize={Platform.SizeScale(10)}>1,764,868,339</Text>
              </View>
            </View>
          </View>

          <Chart />

          <ButtonGroup />
        </View>
      </Topbar>
      {/* <ClickViewUI /> */}
    </View>
  );
};

export const MarketCoinProfileScreen = memo(_MarketCoinProfileScreen);
