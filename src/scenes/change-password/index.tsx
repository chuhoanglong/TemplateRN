import React, { memo, useCallback, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useChangePasswordStyle } from './styles';
import { Topbar } from '@components/topbar';
import { TextField } from '@components/text-field';
import { COLORS } from '@theme/colors';
import { CommonButton } from '@components/CommonButton';
import { Platform } from '@theme/platform';
import { View } from '@components/view';
import { Text } from '@components/text';
import { useDispatch, useSelector } from 'react-redux';
import { changePasswordRequest } from '@redux/actions';
import { RootState } from '@redux/reducers';
import { useLoadingGlobal } from '@hook/use-loading-global';
import { useBlurView } from '@hook/use-blur-view';
import { ModalSuccess } from '@components/modal-success';

const _ChangePasswordScreen = ({}) => {
  const { user } = useSelector((state: RootState) => state.auth);

  const navigation = useNavigation();
  const styles = useChangePasswordStyle();
  const [oldPassword, setOldPassword] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [errorConfirmPass, setErrorConfirmPass] = useState('');
  const [errorOldPass, setErrorOldPass] = useState('');
  const dispatch = useDispatch();
  const loading = useLoadingGlobal();
  const blurView = useBlurView();

  const check = useMemo(() => {
    return oldPassword && newPass && confirmPass;
  }, [confirmPass, newPass, oldPassword]);

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
    if (newPass !== confirmPass) {
      setErrorConfirmPass('New Password and Confirm Password Field do not match. ');
      return;
    }
    loading.onShow();
    dispatch(
      changePasswordRequest({
        userId: user?.data.id ?? '',
        newPassword: newPass,
        oldPassword,
        callback: (data: any, type?: 'SUCCESS' | 'ERROR') => {
          loading.onHide();
          if (type === 'ERROR') {
            setErrorOldPass(data.error.message);
          } else {
            onShowModal();
            navigation.reset({
              routes: [{ name: 'Drawer' }],
              routeNames: ['Drawer'],
            });
          }
        },
      }),
    );
  }, [confirmPass, dispatch, loading, navigation, newPass, oldPassword, onShowModal, user?.data.id]);

  return (
    <View>
      <Topbar title="Change Password">
        <View mh={Platform.SizeScale(20)}>
          <View mt={Platform.SizeScale(10)}>
            <TextField
              style={styles.inputRateStyle}
              placeholder={'Old Password'}
              inputStyle={styles.inputStyles}
              placeholderTextColor={COLORS._909090}
              value={oldPassword}
              secureTextEntry
              onChangeText={setOldPassword}
            />
            <Text fontSize={Platform.SizeScale(15)} fontType="fontLight">
              {errorOldPass}
            </Text>
          </View>
          <View mt={Platform.SizeScale(30)}>
            <TextField
              style={styles.inputRateStyle}
              placeholder={'New Password'}
              inputStyle={styles.inputStyles}
              placeholderTextColor={COLORS._909090}
              value={newPass}
              secureTextEntry
              onChangeText={setNewPass}
            />
          </View>
          <View mt={Platform.SizeScale(20)}>
            <TextField
              style={styles.inputRateStyle}
              placeholder={'Confirm Password'}
              inputStyle={styles.inputStyles}
              placeholderTextColor={COLORS._909090}
              value={confirmPass}
              secureTextEntry
              onChangeText={setConfirmPass}
            />
            <Text fontSize={Platform.SizeScale(15)} fontType="fontLight">
              {errorConfirmPass}
            </Text>
          </View>
        </View>

        <View mt={Platform.SizeScale(30)}>
          <CommonButton
            style={[styles.button, { backgroundColor: check ? COLORS._139B8B : styles.button.backgroundColor }]}
            type="normal"
            text={'Change Password'}
            width={Platform.SizeScale(343)}
            height={Platform.SizeScale(47)}
            textColor={COLORS.WHITE}
            disabled={!check}
            onPress={onComplete}
          />
        </View>
      </Topbar>
    </View>
  );
};

export const ChangePasswordScreen = memo(_ChangePasswordScreen);
