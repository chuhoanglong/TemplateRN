import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useBuyStyle } from './styles';
import { Topbar } from '@components/topbar';
import { Icon } from '@components/common-icon';
import { Touchable } from '@components/touchable';
import commonStyles from '@theme/commonStyles';
import { COLORS } from '@theme/colors';
import { Icons } from '@theme/icons';
import { View } from '@components/view';
import { Text } from '@components/text';
import { Platform } from '@theme/platform';
import { TextField } from '@components/text-field';
import { coins } from './__mocks__/data';
import { ListFullOption } from '@components/list';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenRouteT } from '@routes/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { mapTokensBuy } from '@tools/wallet.helper';
import { TokenBuyT } from '@redux/wallet/types';

const _BuyScreen = ({}) => {
  const { tokens } = useSelector((state: RootState) => state.wallet);
  const mapToken = useMemo(() => {
    return mapTokensBuy(tokens);
  }, [tokens]);

  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'Buy'>>();
  const styles = useBuyStyle();

  const onNavigateDetail = useCallback(
    (item: TokenBuyT) => {
      navigation.navigate('BuyCoin', { item });
    },
    [navigation],
  );

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);


  const renderItemContent = useCallback(
    item => {
      return (
        <Touchable onPress={() => onNavigateDetail(item)}>
          <View style={[commonStyles.row, styles.item]} mb={Platform.SizeScale(10)} backgroundColor={COLORS.WHITE}>
            <View ml={Platform.SizeScale(10)}>
              <Icon icon={Icons.ICON_AVATAR} size={5} />
            </View>
            <Text ml={Platform.SizeScale(5)} fontSize={Platform.SizeScale(15)} color={COLORS._0EA391}>
              {item.name}
            </Text>
          </View>
        </Touchable>
      );
    },
    [onNavigateDetail, styles.item],
  );

  return (
    <View>
      <Topbar>
        <View>
          <Touchable onPress={onBack}>
            <View ml={Platform.SizeScale(10)} style={[commonStyles.row]}>
              <Icon tintColor={COLORS._085A51} icon={Icons.ICON_BACK} size={2} />
              <Text
                ml={Platform.SizeScale(10)}
                fontType="fontBold"
                fontSize={Platform.SizeScale(20)}
                color={COLORS._085A51}
              >
                Buy
              </Text>
            </View>
          </Touchable>
        </View>
        <View
          style={[commonStyles.row, commonStyles.spaceBetween]}
          mh={Platform.SizeScale(20)}
          mv={Platform.SizeScale(20)}
        >
          <TextField
            style={[styles.inputRateStyle, { width: Platform.SizeScale(280) }]}
            placeholder={'Search - Buy'}
            inputStyle={styles.inputStyles}
            placeholderTextColor={COLORS._989898}
            renderLeftAccessory={() => <Icon tintColor={COLORS._085A51} icon={Icons.ICON_SEARCH} size={2} />}
          />
          <Text color={COLORS._085A51} mh={Platform.SizeScale(10)}>
            Cancel
          </Text>
        </View>
        <View mh={Platform.SizeScale(20)}>
          <ListFullOption
            listFooterComponent={<View style={{ height: Platform.SizeScale(150) }} />}
            data={mapToken}
            renderSubItem={renderItemContent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Topbar>
    </View>
  );
};

export const BuyScreen = memo(_BuyScreen);
