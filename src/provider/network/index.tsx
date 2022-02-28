import React, { useCallback, useEffect, useMemo } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { NetworkContext } from './context';
import { NetworkProviderProps } from './types';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';

const NetworkProvider = ({ children }: NetworkProviderProps) => {
  const getToken = useCallback(async () => {
    const fcmToken = await messaging().getToken();
    console.log(`🛠 LOG: 🚀 --> --------------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 11 ~ getToken ~ fcmToken`, fcmToken);
    console.log(`🛠 LOG: 🚀 --> --------------------------------------------------------------------------`);
    await AsyncStorage.setItem('@fcmToken', fcmToken);
  }, []);

  const requestUserPermission = useCallback(async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }, []);

  const checkPermission = useCallback(async () => {
    const enabled = await messaging().hasPermission();
    const fcmToken = await AsyncStorage.getItem('@fcmToken');
    console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 31 ~ checkPermission ~ fcmToken`, fcmToken);
    console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------------------`);
    if (enabled && !fcmToken) {
      getToken();
    } else {
      requestUserPermission();
    }
  }, [getToken, requestUserPermission]);

  useEffect(() => {
    const subscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new message', JSON.stringify(remoteMessage));
    });

    return subscribe;
  }, []);

  useEffect(() => {
    messaging().onNotificationOpenedApp(async remoteMessage => {
      Alert.alert('A new message', JSON.stringify(remoteMessage));
    });
  }, []);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  const contextValue = useMemo(() => {}, []);
  return (
    <>
      <NetworkContext.Provider value={contextValue}>{children}</NetworkContext.Provider>
    </>
  );
};

export { NetworkProvider };

const styles = StyleSheet.create({});
