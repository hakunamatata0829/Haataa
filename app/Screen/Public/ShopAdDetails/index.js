import React from 'react'
import { StatusBar, WebView, TouchableOpacity, TextInput, ToolbarAndroid, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, Modal, TouchableHighlight } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge, List, ListItem, Tab, Tabs, Fab } from 'native-base'

import NavigationService from '@Service/Navigation'

import GALLERY from './Gallery'
import OVERVIEW from './Overview'
import SIMILAR from './Similar'


import Style from '@Theme/Style'
import Styles from '@Screen/Public/ShopAdDetails/Style'

import SwiperFlatList from 'react-native-swiper-flatlist';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            active: 'true',
            modalGallery: {
                visible: false,
                images: [
                    'https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/original/audi-r8-philippines-2018-5ab1edb6dc965.jpg',
                    'https://www.drivespark.com/img/2017/04/audi-rolls-out-audi-mobile-terminal-tour-20174-25-1493121929.jpg',
                    'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/15q4/662479/2016-audi-r8-v10-plus-euro-spec-test-review-car-and-driver-photo-663404-s-original.jpg?crop=1xw:1xh;center,center&resize=900:*',
                    'https://cnet3.cbsistatic.com/img/m2qhiyfRzcJc5ax30kAZBbm7-c8=/830x467/2016/07/21/737d4eb3-53da-49fc-bca6-5d44b1f62b76/news-2017-audi-r8-v10-drive-15.jpg',
                    'https://st.automobilemag.com/uploads/sites/11/2015/06/2015-Audi-A3-Cabriolet-rear-three-quarter-view-in-motion-2.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCvhMmjuNU73IMNptiTUZB3DcRKFSH_l3b09D0BZw14NpH-tp3w',
                    'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/whichcar/2016/04/04/4755/Audi-A4-2.0-TFSI-quattro-static-top.jpg',
                    'https://pt.best-wallpaper.net/wallpaper/1366x768/1106/Audi-R8-red_1366x768.jpg',
                    'https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/original/audi-r8-philippines-2018-5ab1edb6dc965.jpg',
                ],
                selected: 0
            }
        };

        this.changeGalleryImage = this.changeGalleryImage.bind(this)
        this.closeGallery = this.closeGallery.bind(this)
        this.openGallery = this.openGallery.bind(this)
    }

    closeGallery() {
        const modalGallery = { ...this.state.modalGallery }
        modalGallery.visible = false
        this.setState({
            modalGallery
        })
    }
    openGallery(selected) {
        const modalGallery = { ...this.state.modalGallery }
        modalGallery.visible = true
        modalGallery.selected = selected
        this.setState({
            modalGallery
        })
    }
    changeGalleryImage(selected) {
        const modalGallery = { ...this.state.modalGallery }
        modalGallery.selected = selected
        this.setState({
            modalGallery
        })
    }

    render() {
        return <Container style={Style.bgMain}>
            <StatusBar backgroundColor="#39405B" animated barStyle="light-content" />

            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <View style={styles.container}>
                    <SwiperFlatList
                    autoplay
                    autoplayDelay={2}
                    autoplayLoop
                    index={2}
                    showPagination
                    >
                    <View style={[styles.child, { backgroundColor: 'tomato' }]}>
                        <Text style={styles.text}>1</Text>
                    </View>
                    <View style={[styles.child, { backgroundColor: 'thistle' }]}>
                        <Text style={styles.text}>2</Text>
                    </View>
                    <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
                        <Text style={styles.text}>3</Text>
                    </View>
                    <View style={[styles.child, { backgroundColor: 'teal' }]}>
                        <Text style={styles.text}>4</Text>
                    </View>
                    </SwiperFlatList>
                </View>


                <ImageBackground source={require('@Asset/images/shadow.png')} imageStyle={'cover'} style={Styles.shadow} />

                {/* <View style={Styles.overview}>
                    <List>
                        <ListItem style={Styles.oItem}>
                            <Text style={Styles.oLabel}>Project Type</Text>
                            <Text style={Styles.oValue}>Apartment/Penthouse</Text>
                        </ListItem>
                        <ListItem style={Styles.oItem}>
                            <Text style={Styles.oLabel}>Unit</Text>
                            <Text style={Styles.oValue}>3,4,5 BHK</Text>
                        </ListItem>
                        <ListItem style={Styles.oItem}>
                            <Text style={Styles.oLabel}>Area Range</Text>
                            <Text style={Styles.oValue}>2200-4301 Sq.Ft</Text>
                        </ListItem>
                        <ListItem style={Styles.oItem}>
                            <Text style={Styles.oLabel}>Starting Price</Text>
                            <Text style={Styles.oValue}>Rs 99 Lac. Onwards.</Text>
                        </ListItem>
                        <ListItem style={Styles.oItem}>
                            <Text style={Styles.oLabel}>Status</Text>
                            <Text style={Styles.oValue}>Ready to Move</Text>
                        </ListItem>
                    </List>
                </View> */}
                
                <View style={Styles.overview}>
                    <Text style={Styles.itemTitle}>Redmi Note 6 Pro (Rose Gold, 64 GB)</Text>
                    <Text style={{color:'#ED5D02'}}>₹11,999</Text>
                    <View style={Styles.amenitiesRow}>
                        <Icon type="FontAwesome" name="stop" style={{fontSize: 5, color: '#39405B', marginTop:5}}/>                        
                        <View>
                            <Text style={Styles.amenitiesLabel}>
                               4 GB RAM | 64 GB ROM | Expandable{"\n"}
                               Upto 256 GB
                            </Text>
                        </View>
                    </View>
                    <View style={Styles.amenitiesRow}>
                        <Icon type="FontAwesome" name="stop" style={{fontSize: 5, color: '#39405B', marginTop:5}}/>                        
                        <View>
                            <Text style={Styles.amenitiesLabel}>
                               15.9 cm (6.26inch)FHD + Display
                            </Text>
                        </View>
                    </View>
                    <View style={Styles.amenitiesRow}>
                        <Icon type="FontAwesome" name="stop" style={{fontSize: 5, color: '#39405B', marginTop:5}}/>                        
                        <View>
                            <Text style={Styles.amenitiesLabel}>
                               12MP + 5MP | 20MP + 2MP Dual Front Camera
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={Styles.overview}>
                    <Text style={Styles.overviewTitle}>Job Description</Text>
                    <Text style={Styles.overviewDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales vitae ligula eu hendrerit. Donec in magna sodales, semper urna et, gravida enim.
                    {"\n\n"}Etiam sagittis turpis a ligula finibus dignissim. Fusce fermentum diam sed vulputate fringilla. Integer interdum, sem sed tincidunt iaculis, odio ante ultricies libero, non tempus nisl erat non enim.
                    {"\n\n"}Mauris dolor magna, sodales et finibus nec, feugiat nec enim. Nullam id arcu lacus.
                </Text>

                </View>

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

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  child: {
    height: height * 0.5,
    width,
    justifyContent: 'center',
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center',
  },
});