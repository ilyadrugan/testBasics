import { StyleSheet } from 'react-native';

const gs = StyleSheet.create({
  h1: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 48,
    lineHeight: 48,
  },
  italic: {
    fontStyle: 'italic',
  },
  bold: {
    fontFamily: 'OpenSans-Bold',
  },
  semiBold: {
    fontFamily: 'OpenSans-Bold',
  },
  medium: {
    fontFamily: 'OpenSans-Medium',
  },
  regular: {
    fontFamily: 'OpenSans-Regular',
  },
  light: {
    fontFamily: 'OpenSans-Light',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  link: {
    color: 'green',
  },
  p: {
    marginTop: 9,
    marginBottom: 9,
  },
  h1Big: {
    fontFamily: 'Inter-Black',
    // fontWeight: 'bold',
    fontSize: 48,
    lineHeight: 50,
  },
  h1Intro: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 44,
    lineHeight: 48,
  },
  h2: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    lineHeight: 30,
  },
  h2Intro: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 32,
    lineHeight: 32,
  },
  fontBody2: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 14,
    lineHeight: 18,
  },
  fontBody1: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 24,
    lineHeight: 24,
  },
  fontBodyMedium: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 21,
    lineHeight: 21,
  },
  fontCaption: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    lineHeight: 21,
  },
  fontCaptionMedium: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 21,
    lineHeight: 21,
  },
  fontCaption2: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    lineHeight: 18,
  },
  fontCaption3: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 18,
  },
  fontCaptionSmall: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 16,
  },
  fontCaptionSmallMedium: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 13,
    lineHeight: 14,
  },
  fontCaptionSmallSmall: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    lineHeight: 18,
  },
  fontTiny: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 8,
    lineHeight: 8,
  },
  fontLight: {
    fontFamily: 'OpenSans-Light',
    fontSize: 24,
    lineHeight: 24,
  },
  fontLightSmall: {
    fontFamily: 'OpenSans-Light',
    fontSize: 14,
    lineHeight: 14,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  center: {
    textAlign: 'center',
  },
  colorWhite: {
    color: 'white',
  },

  w100: { width: '100%' },

  shadow: {
    shadowColor: '#13141a4d',
    elevation: 8,
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
  },

  mt2: { marginTop: 2 },
  mt4: { marginTop: 4 },
  mt8: { marginTop: 8 },
  mt6: { marginTop: 6 },
  mt12: { marginTop: 12 },
  mt16: { marginTop: 16 },
  mt18: { marginTop: 18 },
  mt20: { marginTop: 20 },
  mt22: { marginTop: 22 },
  mt24: { marginTop: 24 },
  mt32: { marginTop: 32 },
  mt36: { marginTop: 36 },
  mt44: { marginTop: 44 },
  mt48: { marginTop: 48 },
  mt64: { marginTop: 64 },
  mt72: { marginTop: 72 },
  mt96: { marginTop: 96 },
  mt128: { marginTop: 128 },

  mr4: { marginRight: 4 },
  mr6: { marginRight: 6 },
  mr8: { marginRight: 8 },
  mr12: { marginRight: 12 },
  mr16: { marginRight: 16 },
  mr24: { marginRight: 24 },
  mr32: { marginRight: 32 },
  mr48: { marginRight: 48 },
  mr64: { marginRight: 64 },
  mr72: { marginRight: 72 },
  mr96: { marginRight: 96 },
  mr128: { marginRight: 128 },

  mb4: { marginBottom: 4 },
  mb8: { marginBottom: 8 },
  mb6: { marginBottom: 6 },
  mb12: { marginBottom: 12 },
  mb16: { marginBottom: 16 },
  mb24: { marginBottom: 24 },
  mb32: { marginBottom: 32 },
  mb48: { marginBottom: 48 },
  mb64: { marginBottom: 64 },
  mb96: { marginBottom: 96 },
  mb128: { marginBottom: 128 },
  mbAuto: { marginBottom: 'auto' },

  ml4: { marginLeft: 4 },
  ml8: { marginLeft: 8 },
  ml12: { marginLeft: 12 },
  ml16: { marginLeft: 16 },
  ml24: { marginLeft: 24 },
  ml32: { marginLeft: 32 },
  ml48: { marginLeft: 48 },
  ml64: { marginLeft: 64 },
  ml96: { marginLeft: 96 },
  ml128: { marginLeft: 128 },

  cardHeader: {
    paddingTop: 30,
    marginBottom: 15,
  },

  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  alignCenter: {
    alignItems: 'center',
  },
  tapArea: {
    padding: 16,
    margin: -16,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContentRow: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
});

export default gs;
