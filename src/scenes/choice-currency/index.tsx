import React, { memo, useCallback, useMemo, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useChoiceCurrencyStyle } from './styles';
import GenericModal from '@components/GenericModal';
import { BreadCrumb } from '@components/bread-crumb';
import { Icons } from '@theme/icons';
import { View } from '@components/view';
import { Icon } from '@components/common-icon';
import { Text } from '@components/text';
import commonStyles from '@theme/commonStyles';
import { Platform } from '@theme/platform';
import { COLORS } from '@theme/colors';
import { ListFullOption } from '@components/list';
import { Touchable } from '@components/touchable';
import { ScreenRouteT } from '@routes/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { CommonButton } from '@components/CommonButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { mapTokensBuy } from '@tools/wallet.helper';
import { changeCurrentToken } from '@redux/actions';
import { TokenBuyT } from '@redux/wallet/types';

const _ChoiceCurrencyScreen = ({}) => {
  const { qrCodeData, tokens, currentWallet } = useSelector((state: RootState) => state.wallet);
  const mapToken = useMemo(() => {
    return mapTokensBuy(tokens);
  }, [tokens]);
  const token = useRef<TokenBuyT>();
  const dispatch = useDispatch();

  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'ChoiceCurrency'>>();
  const styles = useChoiceCurrencyStyle();

  const renderItemMenu = useCallback((item, index, isFavorite, onPress) => {
    const _onPress = () => {
      token.current = item;
      onPress();
    };
    return <Item {...{ item, index, isFavorite, onPress: _onPress }} />;
  }, []);

  const onSearch = useCallback(() => {
    navigation.navigate('SearchCurrency');
  }, [navigation]);

  const onChoiceCurrency = useCallback(() => {
    navigation.goBack();
    dispatch(changeCurrentToken(token.current));
  }, [dispatch, navigation]);

  return (
    <GenericModal scrollEnabled={false} pageTitle={'choice a currency'}>
      <View mv={Platform.SizeScale(20)} style={styles.search}>
        <Touchable onPress={onSearch}>
          <Icon tintColor={COLORS._07594F} icon={Icons.ICON_SEARCH} size={2} />
        </Touchable>
      </View>
      <ListFullOption
        showsVerticalScrollIndicator={false}
        style={{ width: Platform.deviceWidth }}
        data={mapToken}
        renderSubItem={renderItemMenu}
      />
      <View mv={Platform.SizeScale(20)}>
        <CommonButton onPress={onChoiceCurrency} width={Platform.SizeScale(343)} type="full" text={'OK'} />
      </View>
    </GenericModal>
  );
};

const Item = ({ item, index, isFavorite, onPress }) => {
  const backgroundColor = useMemo(() => {
    return isFavorite ? COLORS._EEFFF3 : COLORS.BACKGROUND;
  }, [isFavorite]);

  const renderLeft = useMemo(() => {
    return (
      <View style={[commonStyles.row]}>
        <Icon size={4} icon={Icons.ICON_AVATAR} />
        <Text ml={Platform.SizeScale(20)} color={COLORS._07594F} fontSize={Platform.SizeScale(15)}>
          {item.name}
        </Text>
        <Text ml={Platform.SizeScale(5)} fontSize={Platform.SizeScale(11)} color={COLORS._35CAB8}>
          {item?.group}
        </Text>
      </View>
    );
  }, [item.group, item.name]);

  const renderRight = useMemo(() => {
    return (
      <View mr={Platform.SizeScale(10)} alignItems="flex-end">
        <Text color={COLORS._282828} fontSize={Platform.SizeScale(13)}>
          {item?.total}
        </Text>
        <Text mt={Platform.SizeScale(5)} color={COLORS._1A9E8F} fontSize={Platform.SizeScale(13)}>
          {item?.price}
        </Text>
      </View>
    );
  }, [item.price, item.total]);
  return (
    <View mv={Platform.SizeScale(5)} mh={Platform.SizeScale(10)}>
      <BreadCrumb
        {...{ onPress }}
        style={{
          backgroundColor,
          paddingVertical: Platform.SizeScale(5),
          paddingHorizontal: Platform.SizeScale(5),
        }}
        left={renderLeft}
        right={renderRight}
      />
    </View>
  );
};

export const ChoiceCurrencyScreen = memo(_ChoiceCurrencyScreen);
