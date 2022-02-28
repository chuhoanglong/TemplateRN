import React, { memo, useCallback } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { useSendCompleteStyle } from './styles';
import { View } from '@components/view';
import { Topbar } from '@components/topbar';
import { Touchable } from '@components/touchable';
import { Icon } from '@components/common-icon';
import { Text } from '@components/text';
import { COLORS } from '@theme/colors';
import { Platform } from '@theme/platform';
import commonStyles from '@theme/commonStyles';
import { CommonButton } from '@components/CommonButton';
import { Icons } from '@theme/icons';
import { ScreenRouteT } from '@routes/types';

const _SendCompleteScreen = ({ route }: { route: RouteProp<ScreenRouteT, 'SendComplete'> }) => {
  const { message, symbol, title, titleButton, type } = route.params;
  const navigation = useNavigation();
  const styles = useSendCompleteStyle();
  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onFinish = useCallback(() => {
    navigation.reset({
      routes: [{ name: 'Drawer' }],
      routeNames: ['Drawer'],
    });
  }, [navigation]);

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
          {type === 'SUCCESS' ? (
            <Icon icon={Icons.ICON_TRANS_SUCCESS} size={5} />
          ) : (
            <Icon icon={Icons.ICON_TRANS_FAIL} size={5} />
          )}
          <Text mt={Platform.SizeScale(20)} fontSize={Platform.SizeScale(20)} fontType="fontBold">
            {title}
          </Text>
          <Text mv={Platform.SizeScale(20)} fontSize={Platform.SizeScale(16)}>
            Your{' '}
            <Text fontSize={Platform.SizeScale(20)} fontType="fontBold">
              {symbol}
            </Text>{' '}
            {message}
          </Text>
        </View>
        <View mt={Platform.SizeScale(10)}>
          <CommonButton
            style={{ alignSelf: 'center' }}
            type="border"
            text={titleButton}
            width={Platform.SizeScale(343)}
            height={Platform.SizeScale(47)}
            textColor={COLORS._26BBA9}
            // onPress={onComplete}
            // disabled={!passphrase}
          />
        </View>
        <View mt={Platform.SizeScale(10)}>
          <CommonButton
            style={[styles.button, { backgroundColor: true ? COLORS._139B8B : styles.button.backgroundColor }]}
            type="normal"
            text={'Go back'}
            width={Platform.SizeScale(343)}
            height={Platform.SizeScale(47)}
            textColor={COLORS.WHITE}
            onPress={onFinish}
            // disabled={!passphrase}
          />
        </View>
      </Topbar>
    </View>
  );
};

export const SendCompleteScreen = memo(_SendCompleteScreen);
