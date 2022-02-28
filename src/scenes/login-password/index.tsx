import React, { useCallback, FC, memo, useState } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { changeInitRouteNameAuth, loginRequest } from '@redux/actions';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '@theme/colors';
import { Images } from '@theme/images';
import commonStyles from '@theme/commonStyles';
import styles, { useLoginPasswordStyle } from './styles';
import { TextField } from '@components/text-field';
import { Touchable } from '@components/touchable';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import { Text } from '@components/text';
import { Icon } from '@components/common-icon';
import { langs } from '@scenes/Login/__mocks__/data';
import { Dropdown } from '@scenes/create-new-wallet/dropdown';
import { RootState } from '@redux/reducers';
import AsyncStorage from '@react-native-community/async-storage';
import { useLoadingGlobal } from '@hook/use-loading-global';
import { alertError } from '@utils';
import { navigate, replace } from '@routes/navigationUtils';
import { ROUTES } from '@routes/constants';

const _LoginPasswordScreen = ({}) => {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const navigation = useNavigation();
  const [t, i18n] = useTranslation();
  const styles = useLoginPasswordStyle();
  const [lang, setLang] = useState('en');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loading = useLoadingGlobal();

  const switchLocaleToEn = useCallback(() => {
    i18n.changeLanguage('en');
    setLang('en');
  }, [i18n]);

  const switchLocaleToVi = useCallback(() => {
    i18n.changeLanguage('vi');
    setLang('vi');
  }, [i18n]);

  const onLogin = useCallback(async () => {
    loading.onShow();
    const fcmToken = await AsyncStorage.getItem('@fcmToken');
    console.log(`🛠 LOG: 🚀 --> -------------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 48 ~ onLogin ~ fcmToken`, fcmToken);
    console.log(`🛠 LOG: 🚀 --> -------------------------------------------------------------------------`);

    dispatch(
      loginRequest({
        username: userInfo?.data.username ?? '',
        password,
        fcmToken,
        callback: (responseDataLogin: any, type?: 'SUCCESS' | 'ERROR') => {
          console.log(
            `🛠 LOG: 🚀 --> -------------------------------------------------------------------------------------------`,
          );
          console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 40 ~ onLogin ~ responseDataLogin`, responseDataLogin);
          console.log(
            `🛠 LOG: 🚀 --> -------------------------------------------------------------------------------------------`,
          );
          loading.onHide();
          if (type === 'ERROR') {
            alertError(responseDataLogin?.error?.message);
          }
        },
      }),
    );

    // navigate(ROUTES.LoginPassword, {});
  }, [dispatch, loading, password, userInfo?.data.username]);

  const onDeleteAcc = useCallback(() => {
    dispatch(changeInitRouteNameAuth(ROUTES.Login));
    replace(ROUTES.Login, {});
  }, [dispatch]);

  return (
    <LinearGradient useAngle angle={180} colors={COLORS.GREEN_GRADIENT} style={{ flex: 1 }}>
      <View style={[styles.lang, commonStyles.row]}>
        <Dropdown data={langs} />
      </View>
      <View style={styles.logo}>
        <Image resizeMode="contain" style={commonStyles.image} source={Images.LOGO} />
      </View>
      <View style={styles.input}>
        <View style={[commonStyles.row, commonStyles.spaceBetween, styles.info]}>
          <Icon
            style={{ overflow: 'hidden', borderRadius: Platform.SizeScale(50) }}
            icon={{ uri: userInfo?.data.avatar }}
            size={6}
            resizeMode={'cover'}
          />
          <View>
            <Text color={COLORS.LIGHT_GREEN} fontSize={Platform.SizeScale(15)}>
              Hello
            </Text>
            <Text color={COLORS.WHITE} fontSize={Platform.SizeScale(20)}>
              {userInfo?.data.fullname}
            </Text>
          </View>
          <Touchable onPress={onDeleteAcc}>
            <View>
              <Icon icon={Icons.ICON_X} size={2} />
            </View>
          </Touchable>
        </View>
        <TextField
          onChangeText={setPassword}
          style={styles.inputRateStyle}
          placeholder={t('Login:pass')}
          inputStyle={styles.inputStyles}
          placeholderTextColor={COLORS.GREEN}
          secureTextEntry
        />
      </View>
      <View style={[commonStyles.row, commonStyles.spaceBetween, styles.buttonGroup]}>
        {password ? (
          <Touchable onPress={onLogin}>
            <LinearGradient style={styles.button} useAngle angle={93.32} colors={COLORS.MINT_GREEN_GRADIENT}>
              <Text fontType="fontBold" color={COLORS.BLACK} fontSize={Platform.SizeScale(20)}>
                {t('Login:login')}
              </Text>
            </LinearGradient>
          </Touchable>
        ) : (
          <Touchable onPress={onLogin} style={styles.button}>
            <Text fontType="fontBold" color={COLORS.LIGHT_GREEN} fontSize={Platform.SizeScale(20)}>
              {t('Login:login')}
            </Text>
          </Touchable>
        )}
        <LinearGradient useAngle angle={93.32} colors={COLORS.PINK_GRADIENT} style={styles.finger}>
          <Image resizeMode="contain" style={commonStyles.image} source={Icons.ICON_FINGER} />
        </LinearGradient>
      </View>
      <View style={[commonStyles.row, styles.funcGroup]}>
        <View style={styles.func}>
          <Image resizeMode="contain" style={commonStyles.image} source={Icons.ICON_NEW} />
        </View>
        <View style={styles.func}>
          <Image resizeMode="contain" style={commonStyles.image} source={Icons.ICON_SUPPORT} />
        </View>
        <View style={styles.func}>
          <Image resizeMode="contain" style={commonStyles.image} source={Icons.ICON_MORE} />
        </View>
      </View>
    </LinearGradient>
  );
};

export const LoginPasswordScreen = memo(_LoginPasswordScreen);
