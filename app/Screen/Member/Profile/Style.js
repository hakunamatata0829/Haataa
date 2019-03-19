const React = require("react-native");
const { Platform } = React;

export default {
  layoutContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  shadow: {
    flex: 1,
    height: 20,
  },


  
  section: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },


  profile: {
    flex: 1,
    height: 250,
    justifyContent: 'center',
  },
  bgBlue: {
    width: '100%',
    flex: 1,
    height: 250,
    backgroundColor: '#39405B',
    position: 'absolute',
    opacity: 0.85,
  },
  coverImg: {
    flex: 1,
    height: 250,
  },
  back: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },


  owner: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  ownerTitle: {
    flex: 1,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 20,
    color: '#333',
  },
  ownerAvatar: {
    borderWidth: 5,
    borderColor: '#DDD',
    padding: 5,
    alignItems: 'center',
  },
  ownerAvatarImg: {
    width: 80,
    height: 80,
  },
  ownerInfo: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  ownerName: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: '#FFF',
    marginTop: 20,
    marginBottom: 5,
  },
  ownerLocation: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#FFF',
    opacity: 0.7,
    marginBottom: 20,
  },
  ownerBg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profleEdit: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    bottom: 0,
  },

  tabBorder: {
    backgroundColor: '#ED5D02',
  },
  tabGrey: {
    backgroundColor: '#FFF',
    fontFamily: 'Montserrat-Regular',
  },
  tabText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#999',
  },
  tabTextActive: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#333',
  },
  infoTab: {
    paddingVertical: 20,
  },
  infoItem: {
    alignItems: 'flex-start',
    paddingVertical: 30,
  },
  infoItemLast: {
    borderBottomWidth: 0,
  },
  infoIcon: {
    marginRight: 10,
  },
  infoHeader: {
    fontFamily: 'Montserrat-Regular',
    color: '#333',
    marginBottom: 5,
    fontSize: 12,
  },
  infoDesc: {
    fontFamily: 'Montserrat-Regular',
    color: '#999',
    fontSize: 12,
  },

  formBg: {
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 30,
    paddingBottom: 30,
  },
  col: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    fontFamily: 'Montserrat-Regular',
    borderWidth: 1,
    borderColor: '#DDD',
    fontSize: 12,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#666',
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        paddingVertical: 15,
      }
    }),
  },
  textInputLast: {
    fontFamily: 'Montserrat-Regular',
    borderWidth: 1,
    borderColor: '#DDD',
    fontSize: 12,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#666',
    ...Platform.select({
      ios: {
        paddingVertical: 15,
      }
    }),
  },
  textInputMulti: {
    fontFamily: 'Montserrat-Regular',
    borderWidth: 1,
    borderColor: '#CCC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 12,
    width: '100%',
    ...Platform.select({
      ios: {
        height: 100,
        paddingTop: 20,
      },
      android: {
        textAlignVertical: 'top',
      },
    }),
  },
  textInputHalf: {
    fontFamily: 'Montserrat-Regular',
    borderWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 12,
    width: '50%',
    color: '#666',
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        paddingVertical: 15,
      }
    }),
  },
  btn: {
    width: '100%',
    borderRadius: 0,
    backgroundColor: '#ED5D02',
    paddingVertical: 20,
    paddingHorizontal: 5,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 12,
  },
  btnText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    fontSize: 14,
    alignSelf: 'center',
  },

  formBtnText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    fontSize: 12,
  },
  formBtnIcon: {
    color: '#FFF',
    fontSize: 24,
  },

  overview: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  overviewTitle: {
    flex: 1,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 10,
  },
  overviewDesc: {
    flex: 1,
    color: '#666',
    lineHeight: 20,
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
  },

  formPicker: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDD',
    borderBottomWidth: 0,
    paddingLeft: 15,
  },
  pickerText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#333',
  },

  accordion: {
    width: '100%',
  },
  accordionTab: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 0,
    marginBottom: 1,
  },
  accordionTabText: {
    color: '#39405B',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
  accordionTabIcon: {
    fontSize: 24,
    color: '#39405B',
  },
  accordionContent: {
    paddingVertical: 10,
  },
  
  listItem: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#DDD',
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginLeft:0,
    height:60,
    color: '#666',
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        paddingVertical: 0,
      }
    }),
  },
  listTextTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    width: '100%',
    color: '#666',
    borderBottomWidth: 0,
    paddingTop:10,
    ...Platform.select({
      ios: {
        paddingVertical: 5,
      }
    }),
  },
  listContent: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#39405B',
  },
  listTextInput: {
    fontFamily: 'Montserrat-Regular',
    borderWidth: 1,
    borderColor: '#DDD',
    fontSize: 12,
    width: '100%',
    paddingVertical:10,
    // paddingHorizontal: 20,
    marginLeft:0,
    paddingLeft:20,
    paddingTop:15,
    color: '#666',
    borderTopWidth: 1,
    ...Platform.select({
      ios: {
        paddingVertical: 10,
      }
    }),
  },
  contact_btn: {
    width: '100%',
    borderRadius: 0,
    backgroundColor: '#ED5D02',
    paddingVertical: 20,
    paddingHorizontal: 5,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 21,
    fontSize: 12,
  },
  signBg: {
    width: '100%',
    flex: 0 ,
    backgroundColor: '#FFF',
    elevation: 10,
    shadowOffset: {
        width: 15,
        height: 15
    },
    shadowColor: '#999',
    shadowOpacity: 0.1,
    shadowRadius: 0,
    ...Platform.select({
        ios: {
            shadowOffset: {
                width: 5,
                height: 5
            },
        },
    }),
},
col: {
    flexDirection: 'row',
},
textInput: {
    fontFamily: 'Montserrat-Regular',
    borderBottomWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 12,
    width: '100%',
},
textInputHalf: {
    fontFamily: 'Montserrat-Regular',
    borderBottomWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 12,
    width: '50%',
},
btn: {
    width: '100%',
    backgroundColor: '#ED5D02',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 5,
    borderRadius: 0,
    paddingVertical: 15,
    ...Platform.select({
        android: {
            height: 60,
        },
    }),
},
btnText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#333',
    fontSize: 14,
    alignSelf: 'center',
},
loginBtnIcon: {
    color: '#FFF',
    fontSize: 24,
},

login: {
    flex: 1,
    marginVertical: 30,
    width: '100%',
    alignItems: 'center',
},
textHeader: {
  fontFamily: 'Montserrat-Regular',
  paddingHorizontal: 20,
  paddingVertical: 15,
  fontSize: 14,
  width: '100%',
  textAlign: 'center',
  color:'#ef752c',  
},
textDescription: {
  fontFamily: 'Montserrat-Regular',
  paddingHorizontal: 20,
  paddingVertical: 15,
  fontSize: 14,
  width: '100%',
  textAlign: 'center',
  color:'#333',
  alignSelf: 'center',  
},
textInputView: {
  flex: 0,
  flexDirection: 'row',
  justifyContent: 'center',
},
textInputVerify: {
  fontFamily: 'Montserrat-Regular',
  borderWidth: 1,
  borderColor: '#DDD',
  paddingHorizontal: 20,
  paddingVertical: 15,
  fontSize: 12,
  width: '50%',
  textAlign: 'center',
},
verifyBtnText: {
  flex: 2,
  alignItems: 'center',
  fontFamily: 'Montserrat-SemiBold',
  color: '#FFF',
  fontSize: 12,
  textAlign: 'center',
  alignSelf: 'center',  
},
sendOtpBtnText: {
  flex: 2,
  alignItems: 'center',
  fontFamily: 'Montserrat-SemiBold',
  color: '#FFF',
  fontSize: 12,
  textAlign: 'center',
  alignSelf: 'center',  
},
btnVerify: {
  width: '100%',
  borderRadius: 0,
  backgroundColor: '#ef752c',
  paddingVertical: 10,
  paddingHorizontal: 5,
  marginTop: 10,
  marginBottom: 5,
  fontSize: 12,
},
btnOTP: {
  width: '100%',
  borderRadius: 0,
  backgroundColor: '#39405B',
  paddingVertical: 20,
  paddingHorizontal: 5,
  marginTop: 0,
  marginBottom: 0,
  fontSize: 12,
},
closeIcon:{
  alignItems: 'flex-end'
}
}