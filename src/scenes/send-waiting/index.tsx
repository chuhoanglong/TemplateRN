import React, { memo, useCallback, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSendWaitingStyle } from './styles';
import { Topbar } from '@components/topbar';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { Icon } from '@components/common-icon';
import { Platform } from '@theme/platform';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Text } from '@components/text';
import { Animated, Easing } from 'react-native';
import { CommonButton } from '@components/CommonButton';
import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenRouteT } from '@routes/types';

const _SendWaitingScreen = ({}) => {
  const { typeTransaction } = useSelector((state: RootState) => state.wallet);

  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'SendWaiting'>>();
  const styles = useSendWaitingStyle();
  const spinValue = useRef(new Animated.Value(0));

  const startLoading = useCallback(() => {
    // First set up animation
    Animated.loop(
      Animated.timing(spinValue.current, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    startLoading();
  }, [startLoading]);

  useEffect(() => {
    if (typeTransaction === 'SUCCESS') {
      navigation.navigate('SendComplete', {
        message: 'has been sent to this account',
        symbol: 'BTC',
        title: 'Transaction Completed!',
        titleButton: 'Show Receipt',
        type: typeTransaction,
      });
    } else if (typeTransaction === 'FAILED') {
      navigation.navigate('SendComplete', {
        message: 'has been sent to this account',
        symbol: 'BTC',
        title: 'Transaction Completed!',
        titleButton: 'Show Receipt',
        type: typeTransaction,
      });
    }
  }, [navigation, typeTransaction]);

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
                Send
              </Text>
            </View>
          </Touchable>
        </View>
        <View alignItems="center">
          <Animated.Image
            source={Icons.ICON_LOADING}
            style={{ transform: [{ rotate: spin }], width: Platform.SizeScale(30), height: Platform.SizeScale(30) }}
          />
          <Text fontSize={Platform.SizeScale(20)} fontType="fontBold">
            Please wait...
          </Text>
          <Text>
            Your{' '}
            <Text fontSize={Platform.SizeScale(20)} fontType="fontBold">
              BSS
            </Text>{' '}
            will be sent to this account once the transaction is processed
          </Text>
        </View>
        <View mt={Platform.SizeScale(10)}>
          <CommonButton
            style={[styles.button, { backgroundColor: !true ? COLORS._139B8B : styles.button.backgroundColor }]}
            type="normal"
            text={'Processing...'}
            width={Platform.SizeScale(343)}
            height={Platform.SizeScale(47)}
            textColor={COLORS.WHITE}
            // onPress={onComplete}
            // disabled={!passphrase}
          />
        </View>
      </Topbar>
    </View>
  );
};

export const SendWaitingScreen = memo(_SendWaitingScreen);
