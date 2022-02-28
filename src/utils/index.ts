import { Alert, Linking } from 'react-native';

export const alertError = (message: string) => {
  Alert.alert('Error!', message);
};

export function alertMessage(message: string, onPress?: any, content = '') {
  setTimeout(() => {
    Alert.alert(message, content, [
      {
        text: 'OK',
        onPress: onPress,
      },
    ]);
  }, 0);
}

export const showConfirm = (message = '', onPositive = () => {}, onNegative = () => {}, title = 'Verfication') => {
  Alert.alert(title, message, [
    {
      text: 'OK',
      onPress: onPositive,
    },
    {
      text: 'Cancel',
      onPress: onNegative,
    },
  ]);
};

export const inputAlert = (
  title: string,
  message: string,
  onNegative = (password?: string) => {},
  onPositive = () => {},
) => {
  Alert.prompt(
    title,
    message,
    [
      {
        text: 'Cancel',
        onPress: () => onPositive(),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: password => onNegative(password),
      },
    ],
    'secure-text',
  );
};

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const openUrl = (url: string) => {
  Linking.openURL(url);
};
