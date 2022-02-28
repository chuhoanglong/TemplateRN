import { StyleSheet } from 'react-native';
import { COLORS } from '@theme/colors';
import { fonts } from '@theme/fonts';
import theme from '@theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
  },
  content: {
    flex: 1,
    flexGrow: 1,
    padding: 15,
  },
  mainText: {
    color: COLORS.CLOUDS,
    fontFamily: fonts.regular,
    paddingVertical: 10,
  },
  languangeContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 8,
  },
  buttonText: {
    fontFamily: fonts.regular,
  },
});

export default styles;
