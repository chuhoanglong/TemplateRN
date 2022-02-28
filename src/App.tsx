import React, { FC, Suspense, useCallback, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store, persistor } from '@redux/store';
import { isMountedRef, navigationRef } from '@routes/navigationUtils';
import Splashscreen from '@components/Splashscreen';
import { AntDesignIconsPack } from '@components/IconsAdapter/antdesign-icons';
import { EntypoIconsPack } from '@components/IconsAdapter/entypo-icons';
import { EvilIconsPack } from '@components/IconsAdapter/evil-icons';
import { FeatherIconsPack } from '@components/IconsAdapter/feather-icons';
import { FontAwesomeIconsPack } from '@components/IconsAdapter/fontawesome-icons';
import { FontAwesome5IconsPack } from '@components/IconsAdapter/fontawesome5-icons';
import { FontistoIconsPack } from '@components/IconsAdapter/fontisto-icons';
import { FoundationIconsPack } from '@components/IconsAdapter/foundation-icons';
import { IoniconsIconsPack } from '@components/IconsAdapter/ionicons-icons';
import { MaterialIconsPack } from '@components/IconsAdapter/material-icons';
import { MaterialCommunityIconsPack } from '@components/IconsAdapter/materialcommunity-icons';
import { OcticonsIconsPack } from '@components/IconsAdapter/octicons-icons';
import { SimpleLineIconsIconsPack } from '@components/IconsAdapter/simpleline-icons';
import { ZocialIconsPack } from '@components/IconsAdapter/zocial-icons';
import { RootStackScreen } from '@routes';
import '@i18n';
import theme, { globalStyle } from '@theme';
import { COLORS } from '@theme/colors';
import { NetworkProvider } from '@provider/network';
import BlurViewProvider from '@provider/blur-view';
import CopiedProvider from '@provider/copied';
import codePush from 'react-native-code-push';
import { ErrorBoundary } from '@components/error-boundary';
import BottomSheetProvider from '@provider/bottom-sheet';
import LoadingGlobalProvider from '@tools/loading-global';
import * as Sentry from '@sentry/react-native';
import SentryProvider from '@tools/sentry';
import { useSentry } from '@hook/use-sentry';
import CustomisableAlert from 'react-native-customisable-alert';

enableScreens();

const Navigation: FC = () => {
  const sentry = useSentry();

  return (
    <NavigationContainer
      onReady={() => {
        // Register the navigation container with the instrumentation
        sentry.routingInstrumentation.registerNavigationContainer(navigationRef);
      }}
      ref={navigationRef}
    >
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.WHITE} />
      <Layout style={[globalStyle.flex1, globalStyle.justifyCenter]}>
        <RootStackScreen />
      </Layout>
    </NavigationContainer>
  );
};

const App: FC = () => {
  const codePushStatusDidChange = (syncStatus: any) => {
    switch (syncStatus) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log('Checking for update.');
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log('Downloading package.');
        break;
      case codePush.SyncStatus.AWAITING_USER_ACTION:
        console.log('Awaiting user action.');
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        console.log('Installing update.');
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        // SplashScreen.hide();
        console.log('App up to date.');
        break;
      case codePush.SyncStatus.UPDATE_IGNORED:
        console.log('Update cancelled by user.');
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        console.log('Update installed and will be applied on restart.');
        break;
      case codePush.SyncStatus.UNKNOWN_ERROR:
        console.log('An unknown error occurred.');
        break;
      case 4:
        // SplashScreen.hide();
        break;
    }
  };

  const codePushDownloadDidProgress = (progress: any) => {
    console.log('progress', progress);
  };

  const sync = useCallback(() => {
    codePush.sync({}, codePushStatusDidChange, codePushDownloadDidProgress);
  }, []);

  useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  useEffect(() => {
    sync();
    console.disableYellowBox = true;
  }, [sync]);

  return (
    <Sentry.TouchEventBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Splashscreen />}>
          <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
            <IconRegistry
              icons={[
                AntDesignIconsPack,
                EntypoIconsPack,
                EvilIconsPack,
                FeatherIconsPack,
                FontAwesomeIconsPack,
                FontAwesome5IconsPack,
                FontistoIconsPack,
                FoundationIconsPack,
                IoniconsIconsPack,
                MaterialIconsPack,
                MaterialCommunityIconsPack,
                OcticonsIconsPack,
                SimpleLineIconsIconsPack,
                ZocialIconsPack,
              ]}
            />
            <Provider store={store}>
              <PersistGate loading={<Splashscreen />} persistor={persistor}>
                <SentryProvider>
                  <NetworkProvider>
                    <LoadingGlobalProvider>
                      <CopiedProvider>
                        <SafeAreaProvider>
                          <BlurViewProvider>
                            <BottomSheetProvider>
                              <Navigation />
                            </BottomSheetProvider>
                          </BlurViewProvider>
                        </SafeAreaProvider>
                      </CopiedProvider>
                    </LoadingGlobalProvider>
                  </NetworkProvider>
                </SentryProvider>
              </PersistGate>
            </Provider>
          </ApplicationProvider>
        </Suspense>
      </ErrorBoundary>
      <CustomisableAlert dismissable={false} />
    </Sentry.TouchEventBoundary>
  );
};

const codePushOptions = {
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
};

export default codePush(codePushOptions)(Sentry.wrap(App));
