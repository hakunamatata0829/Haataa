import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, ToolbarAndroid } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'

import NavigationService from '@Service/Navigation'

import FEATURED from './Featured'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Home/Style'

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    render() {
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
                    <Text style={Style.actionBarText}>{'Car & Motors'.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                </View>
            </Header>


            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <ImageBackground source={require('@Asset/images/bg.png')} imageStyle={'cover'} style={Styles.slider}>

                    <View style={Styles.headerBg}>
                        <Icon name="clock" type="Feather" style={Styles.headerIcon} />
                        <Text style={Styles.sHeader}>{'Cars'.toUpperCase()}</Text>
                        <Right>
                            <Button small rounded transparent onPress={() => { NavigationService.navigate('PublicAds') }}>
                                <Image source={require('@Asset/images/dot.png')} />
                            </Button>
                        </Right>
                    </View>
                    <FlatList
                        data={FEATURED}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={Styles.featureList}
                        renderItem={({ item, separators }) => (
                            <TouchableOpacity style={Styles.item} underlayColor='transparent' onPress={() => { NavigationService.navigate('PublicAdsDetail') }}>
                                <View>
                                    <View>
                                        <Image source={{ uri: item.image }} style={Styles.itemImg} />
                                        <View style={Styles.itemNoCrv}></View>
                                        <Icon name="bookmark" type="FontAwesome" style={Styles.itemFavorite} />
                                    </View>
                                    <Text style={Styles.itemTitleSm}>{item.title}</Text>
                                    <Text style={Styles.itemLocation}>{item.location}</Text>
                                    <View style={Styles.itemBg}>
                                        <View style={Styles.itemLeftSm}>
                                            <Text style={Styles.itemPriceSm}>{item.price}</Text>
                                        </View>
                                        <View style={Styles.itemRight}>
                                            <View style={Styles.itemPosted}>
                                                <Icon name="calendar" type="FontAwesome" style={Styles.itemIcon} />
                                                <Text style={Styles.itemDate}>{item.date}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />

                    <View style={Styles.headerBg}>
                        <Icon name="clock" type="Feather" style={Styles.headerIcon} />
                        <Text style={Styles.sHeader}>{'Parts'.toUpperCase()}</Text>
                        <Right>
                            <Button small rounded transparent onPress={() => { NavigationService.navigate('PublicAds') }}>
                                <Image source={require('@Asset/images/dot.png')} />
                            </Button>
                        </Right>
                    </View>
                    <FlatList
                        data={FEATURED}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={Styles.featureList}
                        renderItem={({ item, separators }) => (
                            <TouchableOpacity style={Styles.item} underlayColor='transparent'  onPress={() => { NavigationService.navigate('PublicAdsDetail') }}>
                                <View>
                                    <View>
                                        <Image source={{ uri: item.image }} style={Styles.itemImg} />
                                        <View style={Styles.itemNoCrv}></View>
                                        <Icon name="bookmark" type="FontAwesome" style={Styles.itemFavorite} />
                                    </View>
                                    <Text style={Styles.itemTitleSm}>{item.title}</Text>
                                    <View style={Styles.itemBg}>
                                        <View style={Styles.itemLeftSm}>
                                            <Text style={Styles.itemPriceSm}>{item.price}</Text>
                                        </View>                                        
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />


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