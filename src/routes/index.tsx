import React, { FC } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Homepage from '@scenes/Homepage';
import OtherPage from '@scenes/OtherPage';
import ModalPage from '@scenes/ModalPage';
import { routeOverlayOption } from './routeOptions';
import Login from '@scenes/Login';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTabar } from '@components/CustomTabbar';
import { WalletPage } from '@scenes/Wallet';
import { LoginPasswordScreen } from '@scenes/login-password';
import { ROUTES } from './constants';
import { CoinProfileScreen } from '@scenes/coin-profile';
import { HomeScreen } from '@scenes/home';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import { Drawer } from '@components/drawer';
import { AddWalletScreen } from '@scenes/add-wallet';
import { CreateNewWalletScreen } from '@scenes/create-new-wallet';
import { BottomTabT, MainStackT, RootStackT } from './types';
import { SendScreen } from '@scenes/send';
import { FeePerByteScreen } from '@scenes/fee-per-byte';
import { CurrencyStack } from './CurrencyStack';
import { MarketScreen } from '@scenes/market';
import { MarketStack } from './MarketStack';
import { SwapScreen } from '@scenes/swap';
import { PassphraseScreen } from '@scenes/passphase';
import { WalletDetailScreen } from '@scenes/wallet-detail';
import { PassphraseVerificationScreen } from '@scenes/passphrase-verification';
import { BrowserScreen } from '@scenes/browser';
import { ReceiveScreen } from '@scenes/receive';
import { BuyScreen } from '@scenes/buy';
import { BuyCoinScreen } from '@scenes/buy-coin';
import { SettingScreen } from '@scenes/setting';
import { ShowPassphraseScreen } from '@scenes/show-passphrase';
import { EmailVerificationScreen } from '@scenes/email-verification';
import { ChangePasswordScreen } from '@scenes/change-password';
import { SendWaitingScreen } from '@scenes/send-waiting';
import { SendCompleteScreen } from '@scenes/send-complete';
import { PrivatekeyScreen } from '@scenes/privatekey';
import { KeystoreScreen } from '@scenes/keystore';
import { PublickeyScreen } from '@scenes/publickey';
import { QrScanScreen } from '@scenes/qr-scan';
import { ProductDetail } from '@scenes/product-detail';

const RootStack = createStackNavigator<RootStackT>();
const MainStack = createStackNavigator<MainStackT>();
const Tab = createBottomTabNavigator<BottomTabT>();
const DrawerStack = createDrawerNavigator();

export const BottomTab: FC = () => {
  return (
    <Tab.Navigator tabBarOptions={{}} tabBar={props => <CustomTabar {...props} />}>
      <Tab.Screen name="Screen1" component={HomeScreen} />
      <Tab.Screen name="Screen2" component={MarketScreen} />
      <Tab.Screen name="Screen3" component={BrowserScreen} />
      <Tab.Screen name="Screen4" component={SwapScreen} />
      <Tab.Screen name="Screen5" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export const DrawerNavigator: FC = () => {
  const renderContent = (props: DrawerContentComponentProps) => {
    return <Drawer {...props} />;
  };
  return (
    <DrawerStack.Navigator statusBarAnimation="slide" drawerType="front" drawerContent={renderContent}>
      <DrawerStack.Screen options={{ swipeEnabled: true }} name={ROUTES.BottomTab} component={BottomTab} />
    </DrawerStack.Navigator>
  );
};

export const MainStackScreen: FC = () => {
  return (
    <MainStack.Navigator initialRouteName={ROUTES.Drawer}>
      <MainStack.Screen
        name={ROUTES.Drawer}
        component={DrawerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name="Home"
        component={Homepage}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name="OtherPage"
        component={OtherPage}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'CoinProfile'}
        component={CoinProfileScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'AddWallet'}
        component={AddWalletScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'Privatekey'}
        component={PrivatekeyScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'Keystore'}
        component={KeystoreScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'PublicKey'}
        component={PublickeyScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'QrScan'}
        component={QrScanScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'CreateNewWallet'}
        component={CreateNewWalletScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'PassphraseVerification'}
        component={PassphraseVerificationScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'WalletDetail'}
        component={WalletDetailScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'ShowPassphrase'}
        component={ShowPassphraseScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'Passphrase'}
        component={PassphraseScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'Send'}
        component={SendScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'SendComplete'}
        component={SendCompleteScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'SendWaiting'}
        component={SendWaitingScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'Receive'}
        component={ReceiveScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'Buy'}
        component={BuyScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'BuyCoin'}
        component={BuyCoinScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'CurrencyStack'}
        component={CurrencyStack}
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <MainStack.Screen
        name={'FeePerByte'}
        component={FeePerByteScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <MainStack.Screen
        name={'MarketStack'}
        component={MarketStack}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'EmailVerification'}
        component={EmailVerificationScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'ChangePassword'}
        component={ChangePasswordScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={'ProductDetail'}
        component={ProductDetail}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </MainStack.Navigator>
  );
};

export const AuthStackScreen: FC = () => {
  const { initRouteNameAuth } = useSelector((state: RootState) => state.auth);

  return (
    <MainStack.Navigator initialRouteName={initRouteNameAuth}>
      <MainStack.Screen
        name={ROUTES.Login}
        component={Login}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name={ROUTES.LoginPassword}
        component={LoginPasswordScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </MainStack.Navigator>
  );
};

export const RootStackScreen: FC = () => {
  const logged = useSelector((state: RootState) => state.auth.logged);

  return (
    <RootStack.Navigator mode="modal" screenOptions={routeOverlayOption}>
      {logged ? (
        <RootStack.Screen
          name="MainStack"
          component={MainStackScreen}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            headerShown: false,
          }}
        />
      )}
      <RootStack.Screen
        name="MyModal"
        component={ModalPage}
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </RootStack.Navigator>
  );
};
