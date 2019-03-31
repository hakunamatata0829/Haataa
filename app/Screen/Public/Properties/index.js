import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, ToolbarAndroid } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'
import Menu, { MenuItem, MenuDivider, Position } from "react-native-enhanced-popup-menu";
import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Home/Style'

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    
    render() {
        let textRef = React.createRef();
        let menuRef = null;
        
        const setMenuRef = ref => menuRef = ref;
        const hideMenu = () => menuRef.hide();
        const showMenu = () => menuRef.show(textRef.current, stickTo = Position.TOP_RIGHT);
        const onPress = () => showMenu();

        return <Container>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#39405B" animated barStyle="light-content" />

                <View style={Style.actionBarLeft}>
                    <Button transparent style={Style.actionMenu} onPress={() => {
                        NavigationService.openDrawer()
                    }}>
                        <Image source={require('@Asset/images/menu.png')} />
                    </Button>
                </View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>{'Properties'.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                    
                </View>
            </Header>
            
            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <ImageBackground source={require('@Asset/images/bg.png')} imageStyle={'cover'} style={Styles.slider}>

                    


                    <View style={Styles.sectionGrey}>
                        <View style={Styles.headerBg}>
                            <Icon name="map-marker-multiple" type="MaterialCommunityIcons" style={Styles.headerIcon} />
                            <Text style={Styles.sHeader}>{'Ad Properties'.toUpperCase()}</Text>
                            <Right>
                                <Button small rounded transparent onPress={() => { NavigationService.navigate('PublicAds') }}>
                                    <Image source={require('@Asset/images/dot.png')} />
                                </Button>
                            </Right>
                        </View>

                        <View style={Styles.city}>
                            <View style={Styles.btnList}>
                                <TouchableOpacity style={Styles.btnCityMain} onPress={() => {
                                    NavigationService.navigate('PublicAds')
                                }}>
                                    <Image source={{ uri: 'https://4.bp.blogspot.com/-B43r-cUpNYQ/VP3X7zvyLzI/AAAAAAAACsw/3SBFTZVWTuk/s1600/7428079.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                                    <View style={Styles.btnCityBgMain} />
                                    <View style={Styles.btnCityLocationMain}>
                                        <Text style={Styles.btnCityText}>Los Angeles</Text>
                                        <Text style={Styles.btnCityCount}>158</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.btnList}>
                                <TouchableOpacity style={Styles.btnCity} onPress={() => {
                                    NavigationService.navigate('PublicAds')
                                }}>
                                    <Image source={{ uri: 'https://i2-prod.birminghampost.co.uk/business/commercial-property/article13376659.ece/ALTERNATES/s615/Hotel-la-Tour-1.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                                    <View style={Styles.btnCityBg} />
                                    <View style={Styles.btnCityLocation}>
                                        <Text style={Styles.btnCityText}>New York</Text>
                                        <Text style={Styles.btnCityCount}>1263</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.btnCity} onPress={() => {
                                    NavigationService.navigate('PublicAds')
                                }}>
                                    <Image source={{ uri: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/05/things-to-do-in-san-francisco-cover-picture.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                                    <View style={Styles.btnCityBg} />
                                    <View style={Styles.btnCityLocation}>
                                        <Text style={Styles.btnCityText}>San Francisco</Text>
                                        <Text style={Styles.btnCityCount}>98</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={Styles.city}>
                            <View style={Styles.btnList}>
                                <TouchableOpacity style={Styles.btnCity} onPress={() => {
                                    NavigationService.navigate('PublicAds')
                                }}>
                                    <Image source={{ uri: 'https://d2t1047w253zzm.cloudfront.net/pm-cities/chicago-il-grant-park-apartments-for-rent.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                                    <View style={Styles.btnCityBg} />
                                    <View style={Styles.btnCityLocation}>
                                        <Text style={Styles.btnCityText}>Chicago</Text>
                                        <Text style={Styles.btnCityCount}>2085</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.btnCity} onPress={() => {
                                    NavigationService.navigate('PublicAds')
                                }}>
                                    <Image source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/f5/b9/e8/boston-freedom-trail.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                                    <View style={Styles.btnCityBg} />
                                    <View style={Styles.btnCityLocation}>
                                        <Text style={Styles.btnCityText}>Boston</Text>
                                        <Text style={Styles.btnCityCount}>253</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.btnList}>
                                <TouchableOpacity style={Styles.btnCityMain} onPress={() => {
                                    NavigationService.navigate('PublicAds')
                                }}>
                                    <Image source={{ uri: 'https://www.tripsavvy.com/thmb/RACn8CwaCqilw1nPIZbdkseVf_k=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/streetcar-in-new-orleans-699112771-5a98de0d1f4e130036d2e855.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                                    <View style={Styles.btnCityBgMain} />
                                    <View style={Styles.btnCityLocationMain}>
                                        <Text style={Styles.btnCityText}>New Orleans</Text>
                                        <Text style={Styles.btnCityCount}>568</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    
                </ImageBackground>
            </Content>



            <View style={Style.footer}>
                <View style={Style.fNav}>
                    <Button transparent style={Style.fBtn} onPress={() => {
                        NavigationService.navigate('PublicHome')
                    }}>
                        <Icon name='home' style={Style.fBtnIcon} type="FontAwesome" />
                    </Button>
                </View>
                <View style={Style.fNav}>
                    <Button transparent style={Style.fBtn} onPress={() => {
                        NavigationService.navigate('PublicAdsSearch')
                    }}>
                        <Icon name='search' style={Style.fBtnIcon} type="FontAwesome" />
                    </Button>
                </View>
                <View style={Style.fNavActive}>
                    <Button transparent style={Style.fBtn} onPress={() => {
                        NavigationService.navigate('MemberAdCreate')
                    }}>
                        <Icon name='plus' style={Style.fBtnIconActive} type="Foundation" />
                    </Button>
                </View>
                <View style={Style.fNav}>
                    <Button transparent style={Style.fBtn} onPress={() => {
                        NavigationService.navigate('MemberBookmark')
                    }}>
                        <Icon name='bookmark' style={Style.fBtnIcon} type="Octicons" />
                    </Button>
                </View>
                <View style={Style.fNav}>
                    <Button transparent style={Style.fBtn} onPress={() => {
                        NavigationService.navigate('MemberMessages')
                    }}>
                        <Icon name='bell' style={Style.fBtnIcon} type="Entypo" />
                    </Button>
                </View>
            </View>

        </Container>
    }
}