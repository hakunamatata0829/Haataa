import React from 'react'
import { TouchableHighlight, StatusBar, WebView, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, Picker, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, Accordion, View, FooterTab, Badge, List, ListItem, Tab, Tabs } from 'native-base'
import Modal from "react-native-modal";
import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Member/Profile/Style'


//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isMobileModalVisible: false,
            isEmailModalVisible: false,
            gender: null
        }
        
        this.renderAccordionHeader = this.renderAccordionHeader.bind(this)
        this.renderAccordionContent = this.renderAccordionContent.bind(this)
        this.renderAccordionContentBasic = this.renderAccordionContentBasic.bind(this)
        this.renderAccordionContentAddress = this.renderAccordionContentAddress.bind(this)
        this.renderAccordionContentContact = this.renderAccordionContentContact.bind(this)
        this.renderAccordionContentSocial = this.renderAccordionContentSocial.bind(this)
    }
     
    _toggleMobileModal = () =>
    this.setState({ isMobileModalVisible: !this.state.isMobileModalVisible });

    _toggleEmailModal = () =>
    this.setState({ isEmailModalVisible: !this.state.isEmailModalVisible });
    
    renderAccordionHeader(item, expanded) {
        return (
            <View style={Styles.accordionTab}>
                <Text style={Styles.accordionTabText}>
                    {" "}{item.title}
                </Text>
                {expanded
                    ? <Icon style={Styles.accordionTabIcon} name="keyboard-arrow-down" type="MaterialIcons" />
                    : <Icon style={Styles.accordionTabIcon} name="keyboard-arrow-right" type="MaterialIcons" />}
            </View>
        );
    }
    renderAccordionContent(item) {
        var fn = 'renderAccordionContent' + (item.type.charAt(0).toUpperCase() + item.type.substr(1));
        return <View style={Styles.accordionContent}>
            {this[fn]()}
        </View>
    }
    renderAccordionContentBasic() {
        return <View>
            <View style={Styles.col}>
                <TextInput style={Styles.textInputHalf} placeholder={'First Name'} />
                <TextInput style={Styles.textInputHalf} placeholder={'Last Name'} />
            </View>
            <View style={Styles.formPicker}>
                <Picker
                    selectedValue={this.state.gender}
                    onValueChange={(itemValue, itemIndex) => this.setState({ gender: itemValue })}>
                    <Picker.Item label="Male" value="male" style={Styles.pickerText} />
                    <Picker.Item label="Female" value="female" />
                </Picker>
            </View>
            <TextInput style={Styles.textInputMulti} multiline={true} numberOfLines={8} placeholder={'About You'} />
            <Button style={Styles.btn} onPress={() => {
                NavigationService.navigate('MemberHome')
            }}>
                <Text style={Styles.formBtnText}>{'Save'.toUpperCase()}</Text>
                <Icon active name='arrow-right' type="Feather" style={Styles.formBtnIcon} />
            </Button>
        </View>
    }
    renderAccordionContentAddress() {
        return <View>
            <TextInput style={Styles.textInput} numberOfLines={2} placeholder={'Address'} />
            <View style={Styles.col}>
                <TextInput style={Styles.textInputHalf} placeholder={'City'} />
                <TextInput style={Styles.textInputHalf} placeholder={'State'} />
            </View>
            <TextInput style={Styles.textInput} placeholder={'Country'} />
            <TextInput style={Styles.textInputLast} placeholder={'Postcode'} />
            <Button style={Styles.btn} onPress={() => {
                NavigationService.navigate('MemberHome')
            }}>
                <Text style={Styles.formBtnText}>{'Save'.toUpperCase()}</Text>
                <Icon active name='arrow-right' type="Feather" style={Styles.formBtnIcon} />
            </Button>
        </View>
    }
    renderAccordionContentContact() {
        return <View>
                    <List>
                        <ListItem thumbnail style={Styles.listItem}>
                            <Body>
                                <Text style={Styles.listTextTitle}>Mobile Number</Text>
                                <Text note numberOfLines={1} style={Styles.listContent}>2023020330</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <TouchableOpacity onPress={this._toggleMobileModal}>
                                        <Text style={{color:'#ef752c'}}>Verify It</Text>
                                    </TouchableOpacity>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail style={Styles.listItem}>
                            <Body>
                                <Text style={Styles.listTextTitle}>Email ID</Text>
                                <Text note numberOfLines={1} style={Styles.listContent}>az@taahaa.com</Text>
                            </Body>
                            <Right>
                                <Button transparent >
                                    <TouchableOpacity onPress={this._toggleEmailModal}>
                                        <Text style={{color:'#04d872'}}>Verified</Text>
                                    </TouchableOpacity>
                            
                                </Button>
                            </Right>
                        </ListItem>
                        
                        <TextInput style={Styles.listTextInput} placeholder={'Phone Number.'} />                    
                        
                    </List>
            {/* <TextInput style={Styles.textInput} placeholder={'Your Mobile No.'} />
            <TextInput style={Styles.textInput} placeholder={'Your Telephone No.'} />
            <TextInput style={Styles.textInput} placeholder={'Your Email Address'} />
            <TextInput style={Styles.textInputLast} placeholder={'Your Website url'} /> */}
            <Button style={Styles.contact_btn} onPress={() => {
                NavigationService.navigate('MemberHome')
            }}>
                <Text style={Styles.formBtnText}>{'Save'.toUpperCase()}</Text>
                <Icon active name='arrow-right' type="Feather" style={Styles.formBtnIcon} />
            </Button>
        </View>
    }
    renderAccordionContentSocial() {
        return <View>
            <TextInput style={Styles.textInput} placeholder={'Facebook'} />
            <TextInput style={Styles.textInput} placeholder={'Twitter'} />
            <TextInput style={Styles.textInput} placeholder={'YouTube'} />
            <TextInput style={Styles.textInputLast} placeholder={'Google+'} />
            <Button style={Styles.btn} onPress={() => {
                NavigationService.navigate('MemberHome')
            }}>
                <Text style={Styles.formBtnText}>{'Save'.toUpperCase()}</Text>
                <Icon active name='arrow-right' type="Feather" style={Styles.formBtnIcon} />
            </Button>
        </View>
    }

    render() {
        return <Container style={Style.bgMain}>
            <StatusBar backgroundColor="#39405B" animated barStyle="light-content" />

            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <View style={Styles.profile}>
                    <ImageBackground source={{ uri: ('https://images.pexels.com/photos/894723/pexels-photo-894723.jpeg?auto=compress&cs=tinysrgb&h=400') }} imageStyle={'cover'} style={Styles.coverImg} />
                    <View style={Styles.bgBlue} />

                    <View style={Styles.owner}>
                        <View style={Styles.ownerBg}>
                            <Image source={{ uri: ('https://images.pexels.com/photos/894723/pexels-photo-894723.jpeg?auto=compress&cs=tinysrgb&h=300') }} style={Styles.ownerAvatarImg} />
                            <Button transparent style={Styles.profleEdit} onPress={() => {
                                NavigationService.navigate('MemberHome')
                            }}>
                                <Icon active name='edit' style={Style.textWhite} type="FontAwesome" />
                            </Button>
                        </View>
                        <View style={Styles.ownerInfo}>
                            <Text style={Styles.ownerName}>Russell Crowe</Text>
                            <Text style={Styles.ownerLocation}>New York, United States</Text>
                        </View>
                    </View>

                    <View style={[Styles.back, Style.actionBarIn]}>
                        <Button transparent style={Style.actionBarBtn} onPress={() => {
                            NavigationService.navigate('MemberHome')
                        }}>
                            <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                        </Button>
                    </View>
                </View>

                <View style={Styles.formBg}>
                    <Accordion
                        style={Styles.accordion}
                        dataArray={[
                            {
                                type: 'basic',
                                title: 'Basic',
                            },
                            {
                                type: 'address',
                                title: 'Address Informations'
                            },
                            {
                                type: 'contact',
                                title: 'Contact Informations',
                            },
                            {
                                type: 'social',
                                title: 'Social Media'
                            },
                        ]}
                        expanded={-1}
                        renderHeader={this.renderAccordionHeader}
                        renderContent={this.renderAccordionContent}
                    />
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
            <Modal isVisible={this.state.isMobileModalVisible}>
                <View style={Styles.signBg}>
                    <View style={Styles.closeIcon}>
                        <TouchableOpacity onPress={this._toggleMobileModal}>
                            <Icon type="FontAwesome"  name="close" />                        
                        </TouchableOpacity>                        
                    </View>
                    
                    <Text style={Styles.textHeader} >Mobile Number Verification</Text>
                    <Text style={Styles.textDescription} >Enter the OTP sent to your registered mobile number below box</Text>

                    <View style={Styles.textInputView}>
                        <TextInput style={Styles.textInputVerify} placeholder={'OTP'} />
                    </View>
                    
                    <Button style={Styles.btnVerify} onPress={this._toggleMobileModal}>
                        <Text style={Styles.verifyBtnText}>{'Verify'.toUpperCase()}</Text>                        
                    </Button>
                    <Button style={Styles.btnOTP} onPress={this._toggleMobileModal}>
                        <Text style={Styles.sendOtpBtnText}>{'Send OTP Again'.toUpperCase()}</Text>                        
                    </Button>                    
                </View>
            </Modal>
            <Modal isVisible={this.state.isEmailModalVisible}>
                <View style={Styles.signBg}>
                    <View style={Styles.closeIcon}>
                        <TouchableOpacity onPress={this._toggleEmailModal}>
                            <Icon type="FontAwesome"  name="close" />                        
                        </TouchableOpacity>                        
                    </View>
                    <Text style={Styles.textHeader} >Email ID Verification</Text>
                    <Text style={Styles.textDescription} >Enter the OTP sent to your registered email id in below box</Text>
                    <View style={Styles.textInputView}>
                        <TextInput style={Styles.textInputVerify} placeholder={'OTP'} />
                    </View>
                    
                    <Button style={Styles.btnVerify} onPress={this._toggleEmailModal}>
                        <Text style={Styles.verifyBtnText}>{'Verify'.toUpperCase()}</Text>                        
                    </Button>
                    <Button style={Styles.btnOTP} onPress={this._toggleEmailModal}>
                        <Text style={Styles.sendOtpBtnText}>{'Send OTP Again'.toUpperCase()}</Text>                        
                    </Button>
                    
                </View>
            </Modal>

        </Container>
    }
}