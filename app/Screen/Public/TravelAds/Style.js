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
        marginVertical: 20,
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
        width: '100%',
        height: 100,
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
        paddingHorizontal: 10,
        paddingBottom:10,
    },
    itemPrice: {
        color: '#333',
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        paddingHorizontal: 10,
        paddingBottom:10,
    },
    itemLocation: {
        color: '#999',
        fontSize: 11,
        fontFamily: 'Montserrat-Regular',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    headerIcon:{
        color: '#333',
        marginRight: 2,
        marginTop: 2,
        fontSize: 12,
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
        color: '#CCC',
        marginRight: 5,
        fontSize: 14,
    },
    itemDate: {
        color: '#999',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginRight: 20,
    },
    itemPosted: {
        marginTop: 10,
        color: '#999',
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    itemLeft: {
        flexWrap: 'wrap',
        minWidth: '40%',
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
 }