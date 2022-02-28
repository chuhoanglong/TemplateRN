import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LoginManager } from 'react-native-fbsdk';
import { useSettingStyle } from './styles';
import { Topbar } from '@components/topbar';
import commonStyles from '@theme/commonStyles';
import { Touchable } from '@components/touchable';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenRouteT } from '@routes/types';
import { Platform } from '@theme/platform';
import { COLORS } from '@theme/colors';
import { View } from '@components/view';
import { Icon } from '@components/common-icon';
import { Text } from '@components/text';
import { Icons } from '@theme/icons';
import { BreadCrumb } from '@components/bread-crumb';
import { useDispatch, useSelector } from 'react-redux';
import { changeInitRouteNameAuth, logoutRequest, purgeRequest, sendEmailVerifyRequest } from '@redux/actions';
import { RootState } from '@redux/reducers';
import { useCopied } from '@hook/use-copied';
import { ScrollView } from 'react-native';
import { showConfirm } from '@utils';
import { useLoadingGlobal } from '@hook/use-loading-global';
import { ROUTES } from '@routes/constants';

const _SettingScreen = ({ }) => {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'Buy'>>();
  const styles = useSettingStyle();
  const dispatch = useDispatch();
  const copy = useCopied();
  const loading = useLoadingGlobal();
  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onLogout = useCallback(() => {
    showConfirm('Do you wanna logout?', () => {
      loading.onShow();
      dispatch(changeInitRouteNameAuth(ROUTES.LoginPassword));
      setTimeout(() => {
        dispatch(logoutRequest());
        LoginManager.logOut();
        loading.onHide();
      }, 500);
    });
  }, [dispatch, loading]);

  return (
    <View>
      <Topbar>
        <View mh={Platform.SizeScale(20)}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View mt={Platform.SizeScale(10)}>
              <BreadCrumb
                left={
                  <View>
                    <Text>Logout</Text>
                  </View>
                }
                onPress={onLogout}
              />
            </View>
            <View mt={Platform.SizeScale(200)} />
          </ScrollView>
        </View>
      </Topbar>
    </View>
  );
};

export const SettingScreen = memo(_SettingScreen);
