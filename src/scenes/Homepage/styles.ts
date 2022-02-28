import { StyleSheet } from 'react-native';
import { COLORS } from '@theme/colors';
import { fonts } from '@theme/fonts';
import theme from '@theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    padding: 15,
  },
  languangeContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 8,
  },
  mainText: {
    color: COLORS.WHITE,
    fontFamily: fonts.fontBold,
    fontSize: 30,
    paddingBottom: 20,
    textAlign: 'center',
  },
  subText: {
    color: COLORS.WHITE,
    fontFamily: fonts.regular,
    fontSize: 13,
    paddingBottom: 20,
    textAlign: 'center',
  },
  buttonGoToContainer: {
    margin: 10,
  },
  navigationButton: {
    backgroundColor: COLORS.SUN_FLOWER,
    borderWidth: 0,
    justifyContent: 'center',
  },
  buttonText: {
    color: COLORS.WHITE,
    fontFamily: fonts.regular,
  },
  iconContent: {
    color: COLORS.WHITE,
    marginRight: 5,
    fontSize: 20,
  },
  headerIconContent: {
    color: COLORS.PETER_RIVER,
    fontSize: 35,
  },
  navigationButtonBordered: {
    alignSelf: 'center',
    backgroundColor: COLORS.TRANSPARENT,
    borderColor: COLORS.ALIZARIN,
    borderWidth: 1,
    marginTop: 15,
  },
  navigationButtonBorderedText: {
    color: COLORS.WHITE,
    fontFamily: fonts.regular,
  },
  marginTop10: {
    marginTop: 10,
  },
});

export default styles;
