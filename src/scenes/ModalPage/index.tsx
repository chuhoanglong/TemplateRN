import React, { FC, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, UIManager, findNodeHandle, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import GenericModal from '@components/GenericModal';
import styles from './styles';
import { requireNativeComponent } from 'react-native';
import { Platform } from '@theme/platform';

const ModalPage: FC = props => {
  const [t] = useTranslation();
  const [status, setStatus] = useState(false);
  const [count, setCount] = useState(1);
  const counterRef = useRef<any>();

  const increment = () => {
    setCount(count + 1);
    updateNative();
  };

  const update = e => {
    console.log(`🛠 LOG: 🚀 --> ----------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 32 ~ update ~ e`, e);
    console.log(`🛠 LOG: 🚀 --> ----------------------------------------------------------`);

    setCount(e.nativeEvent.count);
  };

  const updateNative = () => {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(counterRef.current), // 1
      UIManager.CounterView.Commands.updateFromManager, // 2
      [count], // 3
    );
  };

  return (
    <GenericModal pageTitle={t('ModalPage:PageName')}>
      <ScrollView>
        <View>
          <Text style={styles.mainText}>{t('ModalPage:thisIsAModal')}</Text>
        </View>
        <TouchableOpacity style={[styles.wrapper, styles.border]} onPress={increment}>
          <Text style={styles.button}>{count}</Text>
        </TouchableOpacity>
        <View style={styles.container} />
        <View style={styles.container} />
        <View style={styles.container} />
        <View style={styles.container} />
        <View style={styles.container} />
      </ScrollView>
    </GenericModal>
  );
};

export default ModalPage;
