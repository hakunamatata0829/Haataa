import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, Picker } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Radio, Right, Body, Input, ListItem, Form, Footer, Textarea, View, FooterTab, Badge, Label } from 'native-base'
import RadioGroup from 'react-native-custom-radio-group'

import NavigationService from '@Service/Navigation'
//import Button as cButton from '@Component/Button'
import Style from '@Theme/Style'
import Styles from '@Screen/Public/AdsSearch/Style'


//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export const propertyType = [{
    label: 'Buy',
    value: 'type_buy'
}, {
    label: 'Rent',
    value: 'type_rent'
}, {
    label: 'Projects',
    value: 'type_projects'
}];

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: undefined,
            sliderOneChanging: false,
            sliderOneValue: [10000],
            multiSliderValue: [100, 100000],
        };
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    sliderOneValuesChangeStart = () => {
        this.setState({
            sliderOneChanging: true,
        });
    }

    sliderOneValuesChange = (values) => {
        let newValues = [0];
        newValues[0] = values[0];
        this.setState({
            sliderOneValue: newValues,
        });
    }

    sliderOneValuesChangeFinish = () => {
        this.setState({
            sliderOneChanging: false,
        });
    }

    multiSliderValuesChange = (values) => {
        this.setState({
            multiSliderValue: values,
        });
    }



    render() {
        return <Container style={Style.bgMain}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#39405B" animated barStyle="light-content" />

                <View style={Style.actionBarLeft}>
                    <Button transparent style={Style.actionBarBtn} onPress={() => {
                        NavigationService.navigate('PublicAds')
                    }}>
                        <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                    </Button>
                </View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>{'Search'.toUpperCase()}</Text>
                </View>
                <View style={Style.actionBarRight}>
                </View>
            </Header>


            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <View style={Styles.section}>
                    <View style={Styles.textView}>
                        <Label style={Styles.labelPrice}>Ad Title</Label>
                        <TextInput style={Styles.textInput} bordered placeholder="Title" />
                    </View>
                    <View style={Styles.textView}>
                        <Label style={Styles.labelPrice}>Category</Label>
                    </View>
                    <View style={Styles.picker}>
                        <Picker
                            selectedValue={this.state.language}
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                            <Picker.Item label="Properties" value="properties" />
                            <Picker.Item label="Cars" value="cars" />
                            <Picker.Item label="Electronics" value="electronics" />
                            <Picker.Item label="Fashion" value="fashion" />
                            <Picker.Item label="Books" value="books" />
                            <Picker.Item label="Household" value="household" />
                            <Picker.Item label="Pets" value="pets" />
                            <Picker.Item label="Jobs" value="jobs" />
                            <Picker.Item label="Local Shopping" value="Local Shopping" />
                                <Picker.Item label="Hotel, Motel Guest house" value="Hotel, Motel Guest house" />
                                <Picker.Item label="Travel & Amusement" value="Travel & Amusement" />                                
                            <Picker.Item label="Services" value="services" style={Styles.pickerText} />
                        </Picker>
                    </View>
                    <View style={Styles.textView}>
                        <Label style={Styles.labelPrice}>Location</Label>                         
                    </View>
                    <View style={Styles.picker}>
                        <Picker
                            selectedValue={this.state.location}
                            onValueChange={(itemValue, itemIndex) => this.setState({ location: itemValue })} >
                            <Picker.Item label="All" value="all" />
                            <Picker.Item label="Albania" value="albania" />
                            <Picker.Item label="Algeria" value="algeria" />
                            <Picker.Item label="Andorra" value="andorra" />
                            <Picker.Item label="Angola" value="angola" />
                            <Picker.Item label="Antigua and Barbuda" value="antigua and barbuda" />
                            <Picker.Item label="Argentina" value="argentina" />
                            <Picker.Item label="Australia" value="australia"  />
                            <Picker.Item label="Austria" value="austria" />
                            <Picker.Item label="Azerbaijan" value="azerbaijan" />

                            <Picker.Item label="The Bahamas" value="the bahamas" />
                            <Picker.Item label="Bahrain" value="bahrain" />
                            <Picker.Item label="Bangladesh" value="bangladesh" />
                            <Picker.Item label="Barbados" value="barbados" />
                            <Picker.Item label="Belarus" value="Belarus" />
                            <Picker.Item label="Belgium" value="Belgium" />
                            <Picker.Item label="Belize" value="Belize" />
                            <Picker.Item label="Benin" value="Benin" />
                            <Picker.Item label="Bhutan" value="Bhutan" />
                            <Picker.Item label="Bolivia" value="Bolivia" />
                            <Picker.Item label="Bosnia and Herzegovina" value="Bosnia and Herzegovina" />
                            <Picker.Item label="Botswana" value="Botswana" />
                            <Picker.Item label="Brazil" value="Brazil" />
                            <Picker.Item label="Brunei" value="Brunei" />
                            <Picker.Item label="Bulgaria" value="Bulgaria" />
                            <Picker.Item label="Burkina Faso" value="Burkina Faso" />
                            <Picker.Item label="Burundi" value="Burundi" />

                            <Picker.Item label="Cabo Verde" value="Cabo Verde" />
                            <Picker.Item label="Cambodia" value="Cambodia" />
                            <Picker.Item label="Cameroon" value="Cameroon" />
                            <Picker.Item label="Canada" value="Canada" />
                            <Picker.Item label="Central African Republic" value="Central African Republic" />
                            <Picker.Item label="Chad" value="Chad" />
                            <Picker.Item label="Chile" value="Chile" />
                            <Picker.Item label="China" value="China" />
                            <Picker.Item label="Colombia" value="Colombia" />                            
                            <Picker.Item label="Comoros" value="Comoros" />
                            <Picker.Item label="Congo, Democratic Republic of the" value="Congo, Democratic Republic of the" />
                            <Picker.Item label="Congo, Republic of the" value="Congo, Republic of the" />
                            <Picker.Item label="Costa Rica" value="Costa Rica" />
                            <Picker.Item label="Côte d’Ivoire" value="Côte d’Ivoire" />
                            <Picker.Item label="Croatia" value="Croatia" />
                            <Picker.Item label="Cuba" value="Cuba" />
                            <Picker.Item label="Cyprus" value="Cyprus" />
                            <Picker.Item label="Czech Republic" value="Czech Republic" />

                            <Picker.Item label="Denmark" value="Denmark" />
                            <Picker.Item label="Djibouti" value="Djibouti" />
                            <Picker.Item label="Dominica" value="Dominica" />
                            <Picker.Item label="Dominican Republic" value="Dominican Republic" />

                            <Picker.Item label="East Timor" value="East Timor" />
                            <Picker.Item label="Ecuador" value="Ecuador" />
                            <Picker.Item label="Egypt" value="Egypt" />
                            <Picker.Item label="El Salvador" value="El Salvador" />
                            <Picker.Item label="Equatorial Guinea" value="Equatorial Guinea" />
                            <Picker.Item label="Eritrea" value="Eritrea" />
                            <Picker.Item label="Estonia" value="Estonia" />
                            <Picker.Item label="Eswatini" value="Eswatini" />
                            <Picker.Item label="Ethiopia" value="Ethiopia" />

                            <Picker.Item label="Fiji" value="Fiji" />
                            <Picker.Item label="Finland" value="Finland" />
                            <Picker.Item label="France" value="France" />

                            <Picker.Item label="Gabon" value="Gabon" />
                            <Picker.Item label="The Gambia" value="The Gambia" />
                            <Picker.Item label="Georgia" value="Georgia" />
                            <Picker.Item label="Germany" value="Germany" />
                            <Picker.Item label="Ghana" value="Ghana" />
                            <Picker.Item label="Greece" value="Greece" />
                            <Picker.Item label="Grenada" value="Grenada" />
                            <Picker.Item label="Guatemala" value="Guatemala" />
                            <Picker.Item label="Guinea" value="Guinea" />                            
                            <Picker.Item label="Guinea-Bissau" value="Guinea-Bissau" />
                            <Picker.Item label="Guyana" value="Guyana" />

                            <Picker.Item label="Haiti" value="Haiti" />
                            <Picker.Item label="Honduras" value="Honduras" />
                            <Picker.Item label="Hungary" value="Hungary" />

                            <Picker.Item label="Iceland" value="Iceland" />
                            <Picker.Item label="India" value="India" />
                            <Picker.Item label="Indonesia" value="Indonesia" />
                            <Picker.Item label="Iran" value="Iran" />
                            <Picker.Item label="Iraq" value="Iraq" />
                            <Picker.Item label="Ireland" value="Ireland" />
                            <Picker.Item label="Israel" value="Israel" />
                            <Picker.Item label="Italy" value="Italy" />
                            
                            <Picker.Item label="Jamaica" value="Jamaica" />
                            <Picker.Item label="Japan" value="Japan" />
                            <Picker.Item label="Jordan" value="Jordan" />

                            <Picker.Item label="Kazakhstan" value="Kazakhstan" />
                            <Picker.Item label="Kenya" value="Kenya" />
                            <Picker.Item label="Kiribati" value="Kiribati" />
                            <Picker.Item label="Korea, North" value="Korea, North" />
                            <Picker.Item label="Korea, South" value="Korea, South" />
                            <Picker.Item label="Kosovo" value="Kosovo" />
                            <Picker.Item label="Kuwait" value="Kuwait" />
                            <Picker.Item label="Kyrgyzstan" value="Kyrgyzstan" />

                            <Picker.Item label="Laos" value="Laos" />
                            <Picker.Item label="Latvia" value="Latvia" />
                            <Picker.Item label="Lebanon" value="Lebanon" />
                            <Picker.Item label="Lesotho" value="Lesotho" />
                            <Picker.Item label="Liberia" value="Liberia" />
                            <Picker.Item label="Libya" value="Libya" />
                            <Picker.Item label="Liechtenstein" value="Liechtenstein" />
                            <Picker.Item label="Lithuania" value="Lithuania" />
                            <Picker.Item label="Luxembourg" value="Luxembourg" />

                            <Picker.Item label="Madagascar" value="Madagascar" />
                            <Picker.Item label="Malawi" value="Malawi" />
                            <Picker.Item label="Malaysia" value="Malaysia" />
                            <Picker.Item label="Maldives" value="Maldives" />
                            <Picker.Item label="Mali" value="Mali" />
                            <Picker.Item label="Malta" value="Malta" />
                            <Picker.Item label="Marshall Islands" value="Marshall Islandsbahrain" />
                            <Picker.Item label="Mauritania" value="Mauritania" />
                            <Picker.Item label="Mauritius" value="Mauritius" />
                            <Picker.Item label="Mexico" value="Mexico" />
                            <Picker.Item label="Micronesia, Federated States of" value="Micronesia, Federated States of" />
                            <Picker.Item label="Moldova" value="Moldova" />
                            <Picker.Item label="Monaco" value="Monaco" />
                            <Picker.Item label="Mongolia" value="Mongolia" />
                            <Picker.Item label="Montenegro" value="Montenegro" />
                            <Picker.Item label="Morocco" value="Morocco" />
                            <Picker.Item label="Mozambique" value="Mozambique" />
                            <Picker.Item label="Myanmar" value="Myanmar" />

                            <Picker.Item label="Namibia" value="Namibia" />
                            <Picker.Item label="Nauru" value="Nauru" />
                            <Picker.Item label="Nepal" value="Nepal" />
                            <Picker.Item label="Netherlands" value="Netherlands" />
                            <Picker.Item label="New Zealand" value="New Zealand" />
                            <Picker.Item label="Nicaragua" value="Nicaragua" />
                            <Picker.Item label="Niger" value="Niger" />
                            <Picker.Item label="Nigeria" value="Nigeria" />
                            <Picker.Item label="North Macedonia" value="North Macedonia" />
                            <Picker.Item label="Norway" value="Norway" />

                            <Picker.Item label="Oman" value="Oman" />

                            <Picker.Item label="Pakistan" value="Pakistan" />
                            <Picker.Item label="Palau" value="Palau" />
                            <Picker.Item label="Panama" value="Panama" />
                            <Picker.Item label="Papua New Guinea" value="Papua New Guinea" />
                            <Picker.Item label="Paraguay" value="Paraguay" />
                            <Picker.Item label="Peru" value="Peru" />
                            <Picker.Item label="Philippines" value="Philippines" />
                            <Picker.Item label="Poland" value="Poland" />
                            <Picker.Item label="Portugal" value="Portugal" />

                            <Picker.Item label="Qatar" value="Qatar" />

                            <Picker.Item label="Romania" value="Romania" />
                            <Picker.Item label="Russia" value="Russia" />
                            <Picker.Item label="Rwanda" value="Rwanda" />

                            <Picker.Item label="Saint Kitts and Nevis" value="Saint Kitts and Nevis" />
                            <Picker.Item label="Saint Lucia" value="Saint Lucia" />
                            <Picker.Item label="Saint Vincent and the Grenadines" value="Saint Vincent and the Grenadines" />
                            <Picker.Item label="Samoa" value="Samoa" />
                            <Picker.Item label="San Marino" value="San Marino" />
                            <Picker.Item label="Sao Tome and Principe" value="Sao Tome and Principe" />
                            <Picker.Item label="Saudi Arabia" value="Saudi Arabia" />
                            <Picker.Item label="Senegal" value="Senegal" />
                            <Picker.Item label="Serbia" value="Serbia" />
                            <Picker.Item label="Seychelles" value="Seychelles" />
                            <Picker.Item label="Sierra Leone" value="Sierra Leone" />
                            <Picker.Item label="Singapore" value="Singapore" />
                            <Picker.Item label="Slovakia" value="Slovakia" />
                            <Picker.Item label="Slovenia" value="Slovenia" />
                            <Picker.Item label="Solomon Islands" value="Solomon Islands" />
                            <Picker.Item label="Somalia" value="Somalia" />
                            <Picker.Item label="South Africa" value="South Africa" />
                            <Picker.Item label="Spain" value="Spain" />
                            <Picker.Item label="Sri Lanka" value="Sri Lanka" />
                            <Picker.Item label="Sudan" value="Sudan" />
                            <Picker.Item label="Sudan, South" value="Sudan, South" />
                            <Picker.Item label="Suriname" value="Suriname" />
                            <Picker.Item label="Sweden" value="Sweden" />
                            <Picker.Item label="Switzerland" value="Switzerland" />
                            <Picker.Item label="Syria" value="Syria" />

                            <Picker.Item label="Taiwan" value="Taiwan" />
                            <Picker.Item label="Tajikistan" value="Tajikistan" />
                            <Picker.Item label="Tanzania" value="Tanzania" />
                            <Picker.Item label="Thailand" value="Thailand" />
                            <Picker.Item label="Togo" value="Togo" />
                            <Picker.Item label="Tonga" value="Tonga" />
                            <Picker.Item label="Trinidad and Tobago" value="Trinidad and Tobago" />
                            <Picker.Item label="Tunisia" value="Tunisia" />
                            <Picker.Item label="Turkey" value="Turkey" />
                            <Picker.Item label="Turkmenistan" value="Turkmenistan" />
                            <Picker.Item label="Tuvalu" value="Tuvalu" />

                            <Picker.Item label="Uganda" value="Uganda" />
                            <Picker.Item label="Ukraine" value="Ukraine" />
                            <Picker.Item label="United Arab Emirates" value="United Arab Emirates" />
                            <Picker.Item label="United Kingdom" value="United Kingdom" />
                            <Picker.Item label="United States" value="United States" />
                            <Picker.Item label="Uruguay" value="Uruguay" />
                            <Picker.Item label="Uzbekistan" value="Uzbekistan" /
                            >
                            <Picker.Item label="Vanuatu" value="Vanuatu" />
                            <Picker.Item label="Vatican City" value="Vatican City" />
                            <Picker.Item label="Venezuela" value="Venezuela" />
                            <Picker.Item label="Vietnam" value="Vietnam" />

                            <Picker.Item label="Yemen" value="Yemen" />
                            <Picker.Item label="Zambia" value="Zambia" />
                            <Picker.Item label="Zimbabwe" value="Zimbabwe" />                            

                        </Picker>
                    </View>


                    <View style={Styles.price}>
                        <Label style={Styles.labelPrice}>Price</Label>
                        <View style={Styles.col}>
                            <View style={Styles.pricePicker}>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={Styles.priceSelect}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                                    <Picker.Item label="Min" value="10" />
                                    <Picker.Item label="$1000" value="1000" />
                                    <Picker.Item label="$2000" value="2000" />
                                    <Picker.Item label="$3000" value="3000" />
                                    <Picker.Item label="$4000" value="4000" />
                                    <Picker.Item label="$5000" value="5000" />
                                    <Picker.Item label="$6000" value="6000" />
                                    <Picker.Item label="$7000" value="7000" />
                                    <Picker.Item label="$8000" value="8000" />
                                    <Picker.Item label="$9000" value="9000" />
                                    <Picker.Item label="$10000" value="10000" />
                                </Picker>
                            </View>
                            <View style={Styles.pricePicker}>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={Styles.priceSelect}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                                    <Picker.Item label="Max" value="10" />
                                    <Picker.Item label="$1000" value="1000" />
                                    <Picker.Item label="$2000" value="2000" />
                                    <Picker.Item label="$3000" value="3000" />
                                    <Picker.Item label="$4000" value="4000" />
                                    <Picker.Item label="$5000" value="5000" />
                                    <Picker.Item label="$6000" value="6000" />
                                    <Picker.Item label="$7000" value="7000" />
                                    <Picker.Item label="$8000" value="8000" />
                                    <Picker.Item label="$9000" value="9000" />
                                    <Picker.Item label="$10000" value="10000" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={Styles.btnBg}>
                        <Button style={Styles.btn} onPress={() => {
                            NavigationService.navigate('PublicAds')
                        }}>
                            <Text style={Styles.btnText}>{'Search'.toUpperCase()}</Text>
                            <Icon active name='search' type="FontAwesome" style={Styles.btnIcon} />
                        </Button>
                    </View>
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