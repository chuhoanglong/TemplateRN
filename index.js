/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import messaging from '@react-native-firebase/messaging';
import * as Sentry from '@sentry/react-native';

// Remove YellowBox on Debug application screen
LogBox.ignoreAllLogs(true);
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
AppRegistry.registerComponent(appName, () => Sentry.withTouchEventBoundary(App));
