import React, { memo, useCallback, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useEmailVerificationStyle } from './styles';
import { Topbar } from '@components/topbar';
import { COLORS } from '@theme/colors';
import { TextField } from '@components/text-field';
import { ScreenRouteT } from '@routes/types';
import { Platform } from '@theme/platform';
import { View } from '@components/view';
import { Text } from '@components/text';
import commonStyles from '@theme/commonStyles';
import { CommonButton } from '@components/CommonButton';
import { useDispatch } from 'react-redux';
import { sendEmailVerifyRequest, verifyEmailRequest } from '@redux/actions';
import { Touchable } from '@components/touchable';
import { useLoadingGlobal } from '@hook/use-loading-global';
import { useBlurView } from '@hook/use-blur-view';
import { ModalSuccess } from '@components/modal-success';

const _EmailVerificationScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useEmailVerificationStyle();
  const route = useRoute<RouteProp<ScreenRouteT, 'EmailVerification'>>();
  const { email } = route.params;
  const [code, setCode] = useState('');
  const dispatch = useDispatch();
  const loading = useLoadingGlobal();
  const blurView = useBlurView();

  const onShowModal = useCallback(() => {
    blurView.onShow(
      <ModalSuccess
        onClose={() => {
          blurView.onHide();
        }}
      />,
      {
        right: Platform.SizeScale(60),
        top: Platform.SizeScale(100),
      },

      'zoom',
    );
  }, [blurView]);

  const onComplete = useCallback(() => {
    dispatch(
      verifyEmailRequest({
        code,
        email: email!,
        callback: () => {
          onShowModal();
          navigation.reset({
            routes: [{ name: 'Drawer' }],
            routeNames: ['Drawer'],
          });
        },
      }),
    );
  }, [code, dispatch, email, navigation, onShowModal]);

  const onResend = useCallback(() => {
    loading.onShow();

    dispatch(
      sendEmailVerifyRequest({
        email,
        callback: () => {
          loading.onHide();
        },
      }),
    );
  }, [dispatch, email, loading]);

  return (
    <View>
      <Topbar title={'Email Verification'}>
        <View mt={Platform.SizeScale(10)} mh={Platform.SizeScale(20)}>
          <TextField
            style={styles.inputRateStyle}
            placeholder={'Enter wallet name'}
            inputStyle={styles.inputStyles}
            placeholderTextColor={COLORS.BLACK}
            value={email}
            editable={false}
          />
          <View mt={Platform.SizeScale(20)}>
            <TextField
              style={styles.inputRateStyle}
              placeholder={'Email verification code'}
              inputStyle={styles.inputStyles}
              placeholderTextColor={COLORS._909090}
              onChangeText={setCode}
            />
          </View>
          <View mt={Platform.SizeScale(50)} alignItems="center">
            <View style={[commonStyles.row]}>
              <Text fontType="fontLight" color={COLORS._282828} fontSize={Platform.SizeScale(15)}>
                You didn’t receive the verification code?
              </Text>
              <Touchable onPress={onResend}>
                <Text
                  fontType="fontBold"
                  ml={Platform.SizeScale(10)}
                  fontSize={Platform.SizeScale(15)}
                  color={COLORS._69C9C1}
                >
                  Resend
                </Text>
              </Touchable>
            </View>
          </View>
          <View mt={Platform.SizeScale(10)}>
            <CommonButton
              style={[styles.button, { backgroundColor: code ? COLORS._139B8B : styles.button.backgroundColor }]}
              type="normal"
              text={'Next'}
              width={Platform.SizeScale(343)}
              height={Platform.SizeScale(47)}
              textColor={COLORS.WHITE}
              onPress={onComplete}
              disabled={!code}
            />
          </View>
        </View>
      </Topbar>
    </View>
  );
};

export const EmailVerificationScreen = memo(_EmailVerificationScreen);
