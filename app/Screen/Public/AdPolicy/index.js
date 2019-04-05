import React from 'react'
import { StatusBar, ImageBackground, Dimensions } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, View } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/AdsDetail/Style'


//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            active: 'true',
            modalGallery: {
                visible: false,               
            }
        };

 
    }
    
    render() {
        return <Container style={Style.bgMain}>
            <StatusBar backgroundColor="#39405B" animated barStyle="light-content" />

            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <ImageBackground source={require('@Asset/images/shadow.png')} imageStyle={'cover'} style={Styles.shadow} />

                <View style={Styles.overview}>
                    <View style={{width: '100%', flexDirection: 'row',alignItems: 'center'}}>
                        <Text style={{width: '100%',textAlign: 'center'}} >
                        Advertising Policy
                        </Text>
                    </View>
                    <Text style={Styles.overviewDesc}>{"\n"}
                        You must be 18 and over to put ads on Taahaa{"\n"}
                        You cannot sell it, if it is not in your possession. You cannot sell tickets and pre-order items.{"\n"}
                        Don’t advertise any restricted or prohibited items as per your country Law, where you reside.{"\n"}
                        Don’t create more than one ad for the same item.{"\n"}
                        Once your ad has done its job, delete it. If you don’t, other users might still contact you about it, which is a nuisance for them and you.{"\n"}
                        Place the ad on right category. Please don’t try to get more views or avoid paying our fees by posting in the wrong one. You’ll get better results when your ad appears in the right place.{"\n"}
                        Keep website links and contact details in the designated place and out of your ad title, description and photos. Don’t be tempted to spam with keywords.{"\n"}
                        keep it clean and use plain English. That goes for the images you post too. State Clearly what the item is so that user can find it easily.{"\n"}
                        You can post multiple items in one ad if you’re selling them together. Otherwise, you’ll need to create individual ads. You may need to pay a fee, depending on what you’re advertising. {"\n"}
                        Clearly state the price you want for your item. {"\n"}
                        Don’t say you’ll only send an item in the post. We encourage our users to meet face-to-face whenever possible.{"\n"}
                        Be safe and do the right thing.{"\n"}{"\n"}

                    </Text>

                    <Text style={Styles.overviewTitle}>Without prejudice to the generality of the above, Taahaa does not permit posting or listing of classifieds in relation to the following:{"\n"}{"\n"}</Text>
                    <View>
                        <Text style={Styles.overviewDesc}>•	"Securities" within the meaning of the Securities Contract Regulation Act, including shares, bonds, debentures, etc. and/or any other financial instruments/assets of any description</Text>
                    </View>
                    <Text style={Styles.overviewDesc}>
                        •	Living, dead creatures and/or the whole or any part of any animal which has been kept or preserved by any means whether artificial or natural including rugs, skins, specimens of animals, antlers, horns, hair, feathers, nails, teeth, musk, eggs, nests, other animal products of any description the sale and purchase of which is prevented or restricted in any manner by applicable laws 
                        {"\n"}{"\n"}
                    </Text>
                   
                    <Text style={Styles.overviewTitle}>Your listing, information, Advertisement{"\n"}</Text>
                    <Text style={Styles.overviewDesc}>•	"Securities" within the meaning of the Securities Contract Regulation Act, including shares, bonds, debentures, etc. and/or any other financial instruments/assets of any description</Text>
                    <Text style={Styles.overviewDesc}>•	Living, dead creatures and/or the whole or any part of any animal which has been kept or preserved by any means whether artificial or natural including rugs, skins, specimens of animals, antlers, horns, hair, feathers, nails, teeth, musk, eggs, nests, other animal products of any description the sale and purchase of which is prevented or restricted in any manner by applicable laws </Text>
                    <Text style={Styles.overviewDesc}>•	Shall not contain any viruses, Trojan horses, worms, time bombs, cancel bots, easter eggs or other computer programming routines that may damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or personal information.</Text>
                    <Text style={Styles.overviewDesc}>•	Shall not be allowed to libel anyone or include hate, derogatory, slanderous speech directed at individuals or groups. You should not advocate violence against other users or individuals or groups.{"\n"}{"\n"}</Text>

                    <Text style={Styles.overviewTitle}>In addition to the above and for the purposes of clarity all Users shall be expected to adhere to and comply with the following Policies while listing of items:{"\n"}</Text>
                    <Text style={Styles.overviewTitle}>• Restricted Item Policy: <Text style={Styles.overviewDesc}>In addition to the above prohibited items policy users shall also adhere to and comply with the restricted items policy while listing, posting or providing information in relation to any goods or services.{"\n"}{"\n"}</Text></Text>
                    <Text style={Styles.overviewTitle}>•	The listing for sales of the following items is permitted:{"\n"}{"\n"}</Text>
                    <Text style={Styles.overviewDesc}>1.	Cats and Dogs unless exotic.</Text>
                    <Text style={Styles.overviewDesc}>2.	Aquarium or pond fish, snails or similar creatures.</Text>
                    <Text style={Styles.overviewDesc}>3.	Live insects, crickets and worms used as bait or feeder food for pets.{"\n"}{"\n"}</Text>

                    <Text style={Styles.overviewTitle}>•	Duplicate Ad listings are not allowed. 
                         <Text style={Styles.overviewDesc}>Any ad posted more than once with the same content or Title in the same city and category would be considered as a Duplicate Ad. We advise you to post multiple ads only if you have different items or services for sale. All duplicate ads would be deleted, and posters penalized if the problem persists.{"\n"}{"\n"}</Text>
                    </Text>

                    <Text style={Styles.overviewTitle}>•	Mature Audience/Sexually oriented material: 
                         <Text style={Styles.overviewDesc}>Classifieds relating to items that includes items intended for use in sexual activity would not be permitted. (An example of such classifieds relating to an item not normally permitted would be a classified for the sale of a vibrator). Please also be aware that titles with graphic adult language are inappropriate, regardless of the item contained in the listing itself.{"\n"}{"\n"}</Text>
                    </Text>

                    <Text style={Styles.overviewDesc}>For use of our apps and other services, you confirm and declare that you shall not list or post or provide information in relation to the sale or purchase or exchange of goods and services, content or information that are illegal under the laws and/or are not permitted as per the prohibited items policy and Restricted Items Policy.{"\n"}{"\n"}</Text>

                    <Text style={Styles.overviewTitle}>Consequences of Breach of Listing Policy  {"\n\n"}
                    Users who violate the prohibited items policy and or the restricted items policy may be subject to the following actions{"\n"}{"\n"}
                    </Text>
                    <Text style={Styles.overviewDesc}>1.	Suspension or termination of membership.</Text>
                    <Text style={Styles.overviewDesc}>2.	Permanent blocking of access to the apps.</Text>
                    <Text style={Styles.overviewDesc}>3.	Reporting to Law Enforcement or Appropriate Authorities.</Text>
                    <Text style={Styles.overviewDesc}>4.	And the user will be fully liable to bear all legal and other costs and pay compensation, if they violate prohibited items and restricted items Policy. </Text>
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