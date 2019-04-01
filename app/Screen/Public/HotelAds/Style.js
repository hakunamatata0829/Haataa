import { Right } from "native-base";

const React = require("react-native");
const { Platform } = React;

export default  {
    layoutContent: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },

    section: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor:'#fff'
    },
    itemList: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
    },
    itemBg: {
        ...Platform.select({
            ios: {
            },
        }),
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    item: {
        flex: 1,
        borderRadius: 0,
        borderBottomWidth: 1,
        borderColor: '#DDD',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    itemImgBg: {
        flex: 1,
    },
    itemImg: {
        textAlign: 'center',
        height: '100%',
        width: 100,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        ...Platform.select({
            ios: {
                borderRadius: 0,
            },
        }),
    },
    itemFavorite: {
        position: 'absolute',
        alignSelf: 'flex-end',
        color: '#ED5D02',
        paddingRight: 10,
        fontSize: 18,
    },
    itemTitle: {
        color: '#39405B',
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        paddingHorizontal: 5,
    },
    itemPrice: {
        color: '#ED5D02',
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        paddingHorizontal: 20,
    },
    itemLocation: {
        color: '#999',
        fontSize: 11,
        fontFamily: 'Montserrat-Regular',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    crv: {
        borderRadius: 0,
    },
    itemRow: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 15,
    },
    itemOverview: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    itemIcon: {
        color: '#333',
        marginRight: 4,
        marginTop: 6,
        fontSize: 6,
    },
    headerIcon:{
        color: '#333',
        marginRight: 2,
        marginTop: 2,
        fontSize: 12,
    },
    itemDate: {
        color: '#999',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginRight: 5,
    },
    itemPosted: {
        marginTop: 0,
        color: '#333',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        paddingHorizontal: 5,
        flexDirection: 'row',
    },
    itemLeft: {
        flexWrap: 'wrap',
        minWidth: '30%',
        maxWidth: '50%',
    },
    itemRight: {
        flexWrap: 'wrap',
        minWidth: '50%',
        maxWidth: '60%',
    },

    bgFilter: {
        backgroundColor: '#FFF',
        borderTopWidth: 0.5,
        borderColor: '#DDD',
        flexDirection: 'row',
    },
    picker: {
        flex: 1,
        backgroundColor: '#DDD',
        color: '#39405B',
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: 'Montserrat-Regular',
        
        
    },
    pickers:{
        color: '#39405B',       
        paddingHorizontal: 20, 
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
    modalTopRow: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 30,
        paddingVertical: 15,
        paddingBottom:0,
        width:'100%',
        justifyContent:'space-between'
    },
    
    modalTitle: {
        color: '#39405B',
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        paddingHorizontal: 5,
        paddingTop:5,
    },
    
    modalButton:{
        width: 100,        
    },
    
    btnApply: {
        width: 100,
        borderRadius: 5,
        backgroundColor: '#ef752c',
        paddingVertical: 0,
        paddingHorizontal: 5,
        marginTop: 0,
        marginBottom: 0,
        marginRight:0,
        fontSize: 12,
    },

    applyBtnText: {
        flex: 2,
        alignItems: 'center',
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFF',
        fontSize: 12,
        paddingVertical:0,
        textAlign: 'center',
        alignSelf: 'center',  
    },
    modalRow: {
        paddingLeft: 10,
        paddingRight: 15,
        paddingVertical: 5,
        width:'100%',        
    },
    modalLabel: {
        color: '#39405B',
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        paddingHorizontal: 5,
        paddingTop:5,
    },

    formPicker: {
        borderWidth: 1,
        borderRadius:5,
        borderColor: '#DDD', 
    },
    pickerText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: '#333',
    },

    picker: {
        paddingVertical: 0,
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingLeft: 10,
        paddingVertical: 0,
        fontFamily: 'Montserrat-Regular',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#999',
        marginHorizontal: 10,
        marginVertical:5,
    },
    pickers:{
        color: '#39405B',       
        paddingHorizontal: 20, 
    },

    badgeRight:{
        backgroundColor:'#01c061',
        color:'#f0f0f0',
        paddingHorizontal: 5,
        borderRadius:5
    },
    

    
 }