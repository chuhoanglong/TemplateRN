import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { useBuyCoinStyle } from './styles';
import { Topbar } from '@components/topbar';
import { Platform } from '@theme/platform';
import commonStyles from '@theme/commonStyles';
import { Icon } from '@components/common-icon';
import { View } from '@components/view';
import { Text } from '@components/text';
import { COLORS } from '@theme/colors';
import { Icons } from '@theme/icons';
import { TextField } from '@components/text-field';
import { CommonButton } from '@components/CommonButton';
import { useDispatch, useSelector } from 'react-redux';
import Config from 'react-native-config';
import { GetCurrencyMoonpaySuccessPayload, TokenBuyT } from '@redux/wallet/types';
import { getCurrencyMoonpayRequest } from '@redux/actions';
import { ScreenRouteT } from '@routes/types';
import { Touchable } from '@components/touchable';
import _ from 'lodash';
import { useBottomSheet } from '@hook/use-bottom-sheet';
import { Currency } from './Currency';
import { RootState } from '@redux/reducers';
import { alertError } from '@utils';
import Webview from './Webview';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const _BuyCoinScreen = ({ route }: { route: RouteProp<ScreenRouteT, 'BuyCoin'> }) => {
  const { currentWallet } = useSelector((state: RootState) => state.wallet);

  const { item } = route.params;
  const navigation = useNavigation();
  const styles = useBuyCoinStyle();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [feeAmount, setFeeAmount] = useState(0);
  const bottomSheet = useBottomSheet();
  const [currency, setCurrency] = useState<TokenBuyT>();
  const buyName = useMemo(() => {
    return currency ? `${currency?.coinName} - ${currency?.symbol}` : '';
  }, [currency]);
  const url = useMemo(() => {
    return amount
      ? `https://buy.moonpay.com/?apiKey=${
          Config.MOONPAY_URL
        }&baseCurrencyAmount=${amount}&baseCurrencyCode=USD&currencyCode=${currency?.symbol.toLocaleUpperCase()}&walletAddress=${
          currentWallet?.address
        }`
      : '';
  }, [amount, currency?.symbol, currentWallet?.address]);

  const onShowPay = useCallback(() => {
    bottomSheet.onShow(<Webview {...{ uri: url }} />);
  }, [bottomSheet, url]);

  const onComplete = useCallback(() => {
    console.log('====================================');
    console.log(url);
    console.log('====================================');
    onShowPay();
  }, [onShowPay, url]);

  const onSearch = _.debounce((text: string) => {
    dispatch(
      getCurrencyMoonpayRequest({
        apiKey: Config.MOONPAY_API_KEY,
        baseCurrencyAmount: +text,
        baseCurrencyCode: 'usd',
        symbol: item.symbol,
        callback: ({ data }: { data: GetCurrencyMoonpaySuccessPayload }, type?: 'SUCCESS' | 'ERROR') => {
          console.log(`🛠 LOG: 🚀 --> ------------------------------------------------------------------`);
          console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 35 ~ onSearch ~ data`, data);
          console.log(`🛠 LOG: 🚀 --> ------------------------------------------------------------------`);
          if (type === 'SUCCESS') {
            setFeeAmount(data.feeAmount);
            setAmount(+text);
          } else {
            alertError(data.message);
          }
        },
      }),
    );
  }, 500);

  const onShowWallets = useCallback(() => {
    bottomSheet.onShow(
      <Currency
        {...{
          setCurrentCurrency: setCurrency,
          onHide: () => {
            bottomSheet.onHide();
          },
        }}
      />,
    );
  }, [bottomSheet]);

  useEffect(() => {
    setCurrency(item);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Topbar>
        <KeyboardAwareScrollView>
          <View ml={Platform.SizeScale(10)} style={[commonStyles.row, commonStyles.spaceBetween]}>
            <Touchable onPress={() => navigation.goBack()}>
              <View style={[commonStyles.row]}>
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
            <View style={[commonStyles.row]}>
              <View style={styles.buttonHeader}>
                <Icon tintColor={COLORS._085A51} icon={Icons.ICON_THREEDOT} size={1} />
              </View>
              <View mh={Platform.SizeScale(20)}>
                <Icon icon={Icons.ICON_X_GREEN} size={3} />
              </View>
            </View>
          </View>

          <View
            mt={Platform.SizeScale(20)}
            borderRadius={Platform.SizeScale(20)}
            mh={Platform.SizeScale(10)}
            backgroundColor={COLORS.WHITE}
          >
            <View mv={Platform.SizeScale(20)} alignItems="center">
              <Text fontSize={Platform.SizeScale(16)}>Buy {buyName}</Text>
            </View>
            <View mh={Platform.SizeScale(10)} mt={Platform.SizeScale(20)}>
              <Text
                mb={Platform.SizeScale(10)}
                fontType="fontBold"
                fontSize={Platform.SizeScale(16)}
                color={COLORS._0E9888}
              >
                Order Amount
              </Text>
              <TextField
                keyboardType="decimal-pad"
                style={[styles.inputRateStyle]}
                placeholder={'0.0'}
                inputStyle={styles.inputStyles}
                placeholderTextColor={COLORS._989898}
                onChangeText={onSearch}
                renderRightAccessory={() => (
                  <Touchable onPress={onShowWallets}>
                    <View style={[commonStyles.row, styles.choice]}>
                      <Text mr={Platform.SizeScale(5)} fontType="fontBold" color={COLORS.WHITE}>
                        {currency?.symbol}
                      </Text>
                      <Icon tintColor={COLORS.WHITE} icon={Icons.ICON_DROP_DOWN} size={1} />
                    </View>
                  </Touchable>
                )}
              />
            </View>
            <View mb={Platform.SizeScale(30)} mh={Platform.SizeScale(10)} mt={Platform.SizeScale(20)}>
              <Text
                mb={Platform.SizeScale(10)}
                fontType="fontBold"
                fontSize={Platform.SizeScale(16)}
                color={COLORS._0E9888}
              >
                Total Charge (Fee included)
              </Text>
              <TextField
                value={feeAmount.toString()}
                editable={false}
                style={[styles.inputRateStyle]}
                placeholder={'0.0'}
                inputStyle={styles.inputStyles}
                placeholderTextColor={COLORS._989898}
                renderRightAccessory={() => (
                  <View style={[commonStyles.row, styles.choice]}>
                    <Text mr={Platform.SizeScale(5)} fontType="fontBold" color={COLORS.WHITE}>
                      USD
                    </Text>
                    <Icon tintColor={COLORS.WHITE} icon={Icons.ICON_DROP_DOWN} size={1} />
                  </View>
                )}
              />
            </View>
          </View>
          <View mt={Platform.SizeScale(20)} mh={Platform.SizeScale(20)}>
            <Text fontSize={Platform.SizeScale(15)}>{`Why Credit Card?`}</Text>
            <Text fontSize={Platform.SizeScale(11)} fontType="fontLight" color={COLORS._282828}>
              {`
1. Fast: Average 10-30 mins for cryptocurrency to reach your wallet.
2. Low Fees: only 3.5% per transaction or 10 USD, whichever is higher.
3. Convenient: Visa and MasterCard accepted.`}
            </Text>
          </View>

          <View mt={Platform.SizeScale(30)}>
            <CommonButton
              style={[styles.button, { backgroundColor: url ? COLORS._139B8B : styles.button.backgroundColor }]}
              type="normal"
              text={'Buy Now'}
              width={Platform.SizeScale(343)}
              height={Platform.SizeScale(47)}
              textColor={COLORS.WHITE}
              disabled={!url}
              onPress={onComplete}
            />
          </View>
        </KeyboardAwareScrollView>
      </Topbar>
    </View>
  );
};

export const BuyCoinScreen = memo(_BuyCoinScreen);
