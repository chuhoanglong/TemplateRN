import { StyleSheet } from 'react-native';
import { COLORS } from '@theme/colors';
import { fonts } from '@theme/fonts';
import theme from '@theme';
import { Platform } from '@theme/platform';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
  },
  logo: {
    alignSelf: 'center',
    marginTop: -10,
  },
  header_login: {
    width: Platform.deviceWidth,
    height: (Platform.deviceWidth * 256) / 428,
  },
  text_header_login: {
    fontFamily: fonts.fontLight,
    alignSelf: 'center',
    color: COLORS.GRAY,
    fontSize: 14,
  },
  line_login: {
    width: 50,
    borderWidth: 1,
    borderColor: COLORS.AMETHYST,
    alignSelf: 'center',
    marginTop: 15,
    borderStyle: 'dashed',
  },
  labelLogin: {
    marginLeft: -20,
  },
  labelStyle: {
    fontFamily: fonts.fontRegular,
    fontSize: 14,
  },
  input: {
    marginTop: Platform.SizeScale(35),
    marginHorizontal: Platform.SizeScale(15),
  },
  inputRateStyle: {
    height: Platform.SizeScale(41),
    marginTop: Platform.SizeScale(20),
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: COLORS._E5E5E5,
  },
  inputStyles: {
    color: COLORS.BLACK,
    fontFamily: fonts.fontLight,
    fontSize: 16,
    marginTop: Platform.SizeScale(10),
  },
  button: {
    height: Platform.SizeScale(45),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonGroup: {
    marginTop: Platform.SizeScale(30),
    marginBottom: Platform.SizeScale(10),
    marginHorizontal: Platform.SizeScale(20),
  },
  finger: {
    width: Platform.SizeScale(47),
    height: Platform.SizeScale(47),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Platform.SizeScale(47 / 2),
    padding: Platform.SizeScale(10),
  },
  func: {
    width: Platform.SizeScale(47),
    height: Platform.SizeScale(47),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Platform.SizeScale(47 / 2),
    padding: Platform.SizeScale(10),
    backgroundColor: '#0D5650',
    marginHorizontal: Platform.SizeScale(10),
  },
  lang: {
    position: 'absolute',
    right: Platform.SizeScale(20),
    top: Platform.SizeScale(30),
  },
  funcGroup: {
    marginTop: Platform.SizeScale(40),
    justifyContent: 'center',
  },
  checkBox: {
    width: Platform.SizeScale(18),
    height: Platform.SizeScale(18),
    borderRadius: 6,
    marginRight: Platform.SizeScale(10),
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  styWrapFunc: {
    marginHorizontal: Platform.SizeScale(30),
    justifyContent: 'space-between',
    marginTop: Platform.SizeScale(20),
  },
  styTextOr: {
    alignSelf: 'center',
    marginTop: Platform.SizeScale(20),
  },
  styTxtFb: {
    marginHorizontal: Platform.SizeScale(10),
  },
  styWrapLogin: {
    width: Platform.SizeScale(125),
    borderRadius: 50,
    paddingHorizontal: Platform.SizeScale(5),
    paddingVertical: Platform.SizeScale(4),
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE,
    marginHorizontal: Platform.SizeScale(6),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  styWrapOptionLogin: {
    alignSelf: 'center',
    marginVertical: Platform.SizeScale(20),
  },
  styTxtRegis: {
    color: COLORS.AMETHYST,
    textDecorationLine: 'underline',
  },
  styWrapTxtRegis: {
    alignSelf: 'center',
    marginVertical: 30,
  },
});

export default styles;
