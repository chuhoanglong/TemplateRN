import React, { useCallback, FC, memo, useState, useEffect } from 'react';
import { View, ScrollView, Image, StatusBar } from 'react-native';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {
  AccessToken,
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import _ from 'lodash';
import { COLORS } from '@theme/colors';
import { Images } from '@theme/images';
import commonStyles from '@theme/commonStyles';
import styles from './styles';
import { TextField } from '@components/text-field';
import { Touchable } from '@components/touchable';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import { Text } from '@components/text';
import { Dropdown } from '@scenes/create-new-wallet/dropdown';
import { langs } from './__mocks__/data';
import { loginRequest } from '@redux/actions';
import AsyncStorage from '@react-native-community/async-storage';
import { useLoadingGlobal } from '@hook/use-loading-global';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { alertError } from '@utils';
import CheckBox from './CheckBox';
import { configGoogle } from '@services/configServices';

const LoginScreen: FC = () => {
  const [t, i18n] = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [lang, setLang] = useState('en');
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [isCheck, setCheckBox] = useState(false);
  const loading = useLoadingGlobal();

  useEffect(() => {
    configGoogle();
  }, []);

  const switchLocaleToEn = useCallback(() => {
    i18n.changeLanguage('en');
    setLang('en');
  }, [i18n]);

  const switchLocaleToVi = useCallback(() => {
    i18n.changeLanguage('vi');
    setLang('vi');
  }, [i18n]);

  const switchCheckBox = useCallback(() => {
    setCheckBox(!isCheck);
  }, [isCheck]);

  const onLogin = useCallback(async () => {
    loading.onShow();
    const fcmToken = await AsyncStorage.getItem('@fcmToken');
    console.log(`???? LOG: ???? --> -------------------------------------------------------------------------`);
    console.log(`???? LOG: ???? --> ~ file: index.tsx ~ line 48 ~ onLogin ~ fcmToken`, fcmToken);
    console.log(`???? LOG: ???? --> -------------------------------------------------------------------------`);

    dispatch(
      loginRequest({
        username,
        password,
        fcmToken,
        callback: (responseDataLogin: any, type?: 'SUCCESS' | 'ERROR') => {
          console.log(
            `???? LOG: ???? --> -------------------------------------------------------------------------------------------`,
          );
          console.log(`???? LOG: ???? --> ~ file: index.tsx ~ line 40 ~ onLogin ~ responseDataLogin`, responseDataLogin);
          console.log(
            `???? LOG: ???? --> -------------------------------------------------------------------------------------------`,
          );
          loading.onHide();
          if (type === 'ERROR') {
            alertError(responseDataLogin?.error?.message);
          }
        },
      }),
    );

    // navigate(ROUTES.LoginPassword, {});
  }, [dispatch, loading, password, username]);

  const signInFacebook = useCallback(() => {
    loading.onShow();
    LoginManager.logInWithPermissions(['public_profile'])
      .then((result: any) => {
        if (result.isCancelled) {
          loading.onHide();
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
            result.grantedPermissions.toString(),
          );
          requestGraph();
        }
      })
      .catch(() => {
        loading.onHide();
      });
  }, [loading]);

  const requestGraph = useCallback(() => {
    AccessToken.getCurrentAccessToken().then(async (token: any) => {
      if (!_.isEmpty(token)) {
        const { accessToken, userID } = token;
        let payload = {
          socialId: userID,
          socialToken: accessToken,
        };
        console.log("payload", payload);
        // x??? l?? ????ng nh???p ti???p t???c t???i ????y.
        // signInSocial(payload);
        onLogin();
        loading.onHide();
      }
    });
    // Create response callback.
    // Create a graph request asking for user information with a callback to handle the response.
    const infoRequest = new GraphRequest(
      '/me',
      null,
      _responseInfoCallback,
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
  }, [loading]);

  const _responseInfoCallback = (error: any, result: any) => {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
      console.log(result);
      console.log('Success fetching data: ' + result.toString());
    }
  }

  const signInGoogle = useCallback(async () => {
    try {
      loading.onShow();
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (!_.isEmpty(userInfo)) {
        console.log(userInfo);
        const { idToken, user } = userInfo;
        if (!_.isEmpty(user)) {
          const { id } = user;
          const payload = {
            socialId: id,
            socialToken: idToken,
          };
          console.log("???? ~ file: index.tsx ~ line 166 ~ signInGoogle ~ payload", payload)
          // signInSocial(payload);
          onLogin();
          loading.onHide();
        }
      }
    } catch (error: any) {
      console.log("???? ~ file: index.tsx ~ line 171 ~ signInGoogle ~ error", error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        loading.onHide();
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        loading.onHide();
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        loading.onHide();
        // play services not available or outdated
      } else {
        // some other error happened
        loading.onHide();
        // this.setState({
        //   isLoging: false,
        //   errors: '????ng nh???p th???t b???i, b???n vui l??ng th??? l???i sau!',
        // });
      }
    }
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <StatusBar barStyle={'light-content'} />
      <Image source={require('../../assets/images/login/header_login.png')} style={styles.header_login} />
      <Image source={require('../../assets/logo/logo.png')} style={styles.logo} />
      <KeyboardAwareScrollView>
        <Text fontType={'fontLight'} style={styles.text_header_login}>
          ????ng nh???p b??ng s??? ??i???n tho???i c???a b???n
        </Text>
        <View style={styles.line_login} />
        <View style={styles.input}>
          <TextField
            onChangeText={setUsername}
            style={styles.inputRateStyle}
            label={'S??? ??i???n tho???i'}
            placeholder={'Nh???p s??? ??i???n tho???i'}
            inputStyle={styles.inputStyles}
            placeholderTextColor={COLORS.GRAY}
            autoCapitalize={'none'}
            labelContentStyle={styles.labelLogin}
            labelStyle={styles.labelStyle}
          />
          <TextField
            onChangeText={setPassword}
            style={styles.inputRateStyle}
            label={'M???t kh???u'}
            placeholder={'Nh???p m???t kh???u'}
            inputStyle={styles.inputStyles}
            placeholderTextColor={COLORS.GRAY}
            secureTextEntry
            labelContentStyle={styles.labelLogin}
            labelStyle={styles.labelStyle}
          />
        </View>

        <View style={[commonStyles.row, styles.styWrapFunc]}>
          <CheckBox isCheck={isCheck} label="Duy tr?? ????ng nh???p" onPress={switchCheckBox} />
          <Text color={COLORS.AMETHYST} fontType="fontRegular">
            Qu??n m???t kh???u
          </Text>
        </View>

        <View style={styles.buttonGroup}>
          <LinearGradient useAngle={true} colors={COLORS.VIOLET_GRADIENT} style={{ borderRadius: 5 }}>
            <Touchable onPress={onLogin} style={styles.button}>
              <Text fontType="fontRegular" color={COLORS.WHITE} fontSize={Platform.SizeScale(18)}>
                ????ng nh???p
              </Text>
            </Touchable>
          </LinearGradient>
        </View>

        <View style={styles.line_login} />

        <Text fontType="fontLight" fontSize={12} color={COLORS.BLACK} style={styles.styTextOr}>
          Ho???c ????ng nh???p b???ng
        </Text>

        <View style={[commonStyles.row, styles.styWrapOptionLogin]}>

          <Touchable onPress={signInFacebook}>
            <View style={[commonStyles.row, styles.styWrapLogin, styles.shadow]}>
              <Image source={require('../../assets/images/login/icon_fb.png')} />
              <Text style={styles.styTxtFb} fontType='fontLight' color={COLORS.BLACK}>Facebook</Text>
            </View>
          </Touchable>

          <Touchable onPress={signInGoogle}>
            <View style={[commonStyles.row, styles.styWrapLogin, styles.shadow]}>
              <Image source={require('../../assets/images/login/icon_gg.png')} />
              <Text style={styles.styTxtFb} fontType='fontLight' color={COLORS.BLACK}>Google</Text>
            </View>
          </Touchable>

        </View>

        <Text fontType="fontLight" style={styles.styWrapTxtRegis}>
          B???n ch??a c?? t??i kho???n?
          <Text style={styles.styTxtRegis} fontType="fontRegular">
            {' '}
            ????ng k??
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default memo(LoginScreen);
