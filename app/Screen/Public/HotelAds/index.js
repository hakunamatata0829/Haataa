import React from 'react'

import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, Picker } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, List, ListItem, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'
import Select from 'react-select'
import NavigationService from '@Service/Navigation'

import FEATURED from './Featured'
import Modal from "react-native-modal";

import Style from '@Theme/Style'
import Styles from '@Screen/Public/HotelAds/Style'


//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const options = [
    { value: 'mobile', label: 'Mobile' },
    { value: 'web', label: 'Web' },
    { value: 'device', label: 'Device' }
  ]

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: undefined,    
            isFilterModalVisible: false,
            price:'low',
            selectedOption: null,
        };
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    _toggleMobileModal = () =>
    this.setState({ isFilterModalVisible: !this.state.isFilterModalVisible });

    render() {
        const { selectedOption } = this.state;
        return <Container style={Style.bgMain}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#39405B" animated barStyle="light-content" />

                <View style={Style.actionBarLeft}>
                    <Button transparent style={Style.actionBarBtn} onPress={() => {
                        NavigationService.navigate('PublicHotel')
                    }}>
                        <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                    </Button>
                </View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>{'Hotel, Motel & Guest Houses'}</Text>
                </View>
                <View style={Style.actionBarRight}>
                    <Button transparent style={Style.actionBtnRight} onPress={this._toggleMobileModal}>
                        <Icon active name='search' style={Style.actionIcon} type="FontAwesome" />
                    </Button>
                </View>
            </Header>


            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>
                
                <ImageBackground source={require('@Asset/images/bg_white.png')} imageStyle={'cover'} style={Style.slider}>
                    <View style={{backgroundColor:'#f0f0f0', paddingVertical:5,paddingHorizontal:10}}>
                        <Text style={{color: '#39405B'}} >3,000 Hotels, Motels & Guest Houses</Text>
                    </View>
                    <View style={Styles.section}>
                        <FlatList
                            data={FEATURED}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, separators }) => (
                                <TouchableOpacity style={Styles.item} underlayColor='transparent' onPress={() => { NavigationService.navigate('PublicHotelAdDetails') }}>
                                    <View style={Styles.itemLeft}>
                                        <Image source={{ uri: item.image }} style={Styles.itemImg} />
                                        {/* <Icon name="bookmark" type="FontAwesome" style={Styles.itemFavorite} /> */}
                                    </View>
                                    <View style={Styles.itemRight}>
                                        <Text style={Styles.itemTitle}>FabHotel Kelvish New Delhi Airport</Text>
                                        <View style={Styles.itemPosted}>
                                            <Icon name="map-marker-multiple" type="MaterialCommunityIcons" style={Styles.headerIcon} />
                                            <Text style={Styles.itemPosted}>Gurugram, New Delhi</Text>
                                        </View>
                                        <View style={Styles.itemPosted}>
                                            <Text style={Styles.itemDate}>wifi</Text>
                                            <Icon name="square" type="FontAwesome" style={Styles.itemIcon} />
                                            <Text style={Styles.itemDate}>restaurant</Text>
                                            <Icon name="square" type="FontAwesome" style={Styles.itemIcon} />
                                            <Text style={Styles.itemDate}>spa</Text>
                                            <Icon name="square" type="FontAwesome" style={Styles.itemIcon} />
                                            <Text style={Styles.itemDate}>parking</Text>
                                        </View>                                        
                                    </View>
                                    <Right>
                                        <Text style={{backgroundColor:'#01c061',color:'#f0f0f0',borderRadius:5,paddingHorizontal: 5, marginTop:-30}}>8.0</Text>
                                    </Right>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </ImageBackground>
            </Content>
                                
            <Footer style={Style.greyTopLine}>
                <FooterTab style={Style.bgFilter}>
                    <Button style={Style.bgFilter} onPress={() => {
                        NavigationService.navigate('PublicAds')
                    }}>
                        <Icon name="sort-amount-asc" type="FontAwesome" style={Style.textBlue} />
                        <Text style={Style.textBlack}>Sort by</Text>
                    </Button>
                    <Button style={Style.bgFilter} onPress={this._toggleMobileModal}>
                        <Icon name="filter" type="FontAwesome" style={Style.textBlue} />
                        <Text style={Style.textBlack}>Filter</Text>
                    </Button>
                </FooterTab>
            </Footer>
            <Modal isVisible={this.state.isFilterModalVisible}>
                    <View style={Styles.signBg}>
                        <View style={Styles.modalTopRow}>
                            <View style={{ flexDirection: 'row'}}>
                                <Icon type="FontAwesome"  name="filter" style={{color: '#39405B'}}/>
                                <Text style={Styles.modalTitle}>Hotel Filter</Text>
                            </View>                            
                            <View style={Styles.modalButton}>
                                <Button style={Styles.btnApply} onPress={this._toggleMobileModal}>
                                    <Text style={Styles.applyBtnText}>{'apply'.toUpperCase()}</Text>                        
                                </Button>
                            </View>
                        </View>
                        <View style={Styles.modalRow}>
                            <Text style={Styles.modalLabel}>Price</Text>
                            <View style={Styles.formPicker}>
                                <Picker
                                    selectedValue={this.state.price}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ price: itemValue })}>
                                    <Picker.Item label="Low" value="low" style={Styles.pickerText} />
                                    <Picker.Item label="Medium" value="medium" />
                                    <Picker.Item label="High" value="high" />
                                </Picker>
                            </View>
                        </View>                            
                        <View style={Styles.modalRow}>
                            <Text style={Styles.modalLabel}>Location</Text>
                            <View>
                                 {/* <Select 
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={options} 
                                /> */}
                                <TextInput style={Styles.formPicker} placeholder={'Enter Location'} />
                            </View>
                        </View> 
                        <View style={Styles.modalRow}>
                            
                        </View>                            
                    </View>
                </Modal>
        </Container>
    }
}