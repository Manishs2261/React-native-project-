import { ScrollView, Text, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Profile = () => {

    return (
        <ScrollView>
            <View>
                <View style={{
                    backgroundColor: 'white',
                    width: '100%',
                    height: 60,
                    elevation: 1,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: "center",
                    paddingHorizontal: 20,
                }}>

                    <Text style={{ color: "black", fontSize: 20, fontWeight: "600" }}>PROFILE </Text>

                </View>

                <View>
                    <View style={{ flexDirection: 'row', alignSelf: "center" }}>
                        <View style={{ height: 80, width: 185, borderColor: 'grey', borderWidth: 1, borderRadius: 7, marginRight: 10, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                            <MaterialIcons name="delete" size={25} color="black"></MaterialIcons>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: '500', color: 'black' }}>Orders</Text>
                                <Text>Manage & Track</Text>
                            </View>


                        </View >
                        <View style={{ height: 80, width: 185, borderColor: 'grey', borderWidth: 1, borderRadius: 7, marginRight: 10, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                            <MaterialIcons name="delete" size={25} color="black"></MaterialIcons>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: '500', color: 'black' }}>Orders</Text>
                                <Text>Manage & Track</Text>
                            </View>


                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: "center", marginTop: 10 }}>
                        <View style={{ height: 80, width: 185, borderColor: 'grey', borderWidth: 1, borderRadius: 7, marginRight: 10, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                            <MaterialIcons name="delete" size={25} color="black"></MaterialIcons>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: '500', color: 'black' }}>Orders</Text>
                                <Text>Manage & Track</Text>
                            </View>


                        </View >
                        <View style={{ height: 80, width: 185, borderColor: 'grey', borderWidth: 1, borderRadius: 7, marginRight: 10, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                            <MaterialIcons name="delete" size={25} color="black"></MaterialIcons>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: '500', color: 'black' }}>Orders</Text>
                                <Text>Manage & Track</Text>
                            </View>


                        </View>
                    </View>
                </View>


                <Text style={{ fontSize: 15, fontWeight: '500', color: 'black', marginLeft: 20, marginTop: 20 }}>My account</Text>

                <View style={{ height: 162, width: 380, borderWidth: 1, borderColor: 'grey', borderRadius: 7, alignSelf: 'center', marginTop: 20, padding: 10, justifyContent: 'space-evenly' }}>

                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="address-book" color="grey" size={25}></FontAwesome>
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: '300', marginLeft: 10 }}>Addresses</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="black"></MaterialIcons>
                    </View>
                    <View style={{ height: 1, width: "100%", backgroundColor: "grey", }}></View>

                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcons name="payment" size={25}></MaterialIcons>
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: '300', marginLeft: 10 }}>Payment</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="black"></MaterialIcons>
                    </View>
                    <View style={{ height: 1, width: "100%", backgroundColor: "grey", }}></View>


                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="address-book" color="grey" size={25}></FontAwesome>
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: '300', marginLeft: 10 }}>Warranty Claims</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="black"></MaterialIcons>
                    </View>


                </View>

                <Text style={{ fontSize: 15, fontWeight: '500', color: 'black', marginLeft: 20, marginTop: 20 }}>Settings</Text>

                <View style={{ height: 162, width: 380, borderWidth: 1, borderColor: 'grey', borderRadius: 7, alignSelf: 'center', marginTop: 20, padding: 10, justifyContent: 'space-evenly' }}>

                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="address-book" color="grey" size={25}></FontAwesome>
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: '300', marginLeft: 10 }}>Language</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="black"></MaterialIcons>
                    </View>
                    <View style={{ height: 1, width: "100%", backgroundColor: "grey", }}></View>

                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcons name="payment" size={25}></MaterialIcons>
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: '300', marginLeft: 10 }}>Security
                            </Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="black"></MaterialIcons>
                    </View>
                    <View style={{ height: 1, width: "100%", backgroundColor: "grey", }}></View>


                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="address-book" color="grey" size={25}></FontAwesome>
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: '300', marginLeft: 10 }}>Notifications</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="black"></MaterialIcons>
                    </View>


                </View>

                <View style={{ height: 61, width: 370, borderColor: 'black', borderWidth: 1, borderRadius: 7, justifyContent: "center", alignItems: 'center', alignSelf: 'center', marginTop: 30 }}>
                    <Text style={{ fontSize: 25, fontWeight: '700', color: 'black' }}>Sign Out</Text>
                </View>

                <View style={{ height: 171, width: 372, borderColor: 'black', borderWidth: 1, borderRadius: 7, alignSelf: 'center', marginBottom: 50, marginTop: 20, padding: 10 }}>

                    <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: "center" }}>
                        <Text style={{ fontSize: 15, fontWeight: '600', color: 'blue', marginRight: 5 }}>Sell with us</Text>
                        <SimpleLineIcons name="share-alt" size={18} color="blue"></SimpleLineIcons>

                    </View>
                    <View style={{ height: 1, width: '100%', backgroundColor: 'grey', opacity: 0.2 }}></View>

                    <View style={{ flexDirection: 'row', width: 340, justifyContent: "space-evenly", marginTop: 10 }}>

                        <EvilIcons name="sc-facebook" size={25}></EvilIcons>
                        <EvilIcons name="sc-twitter" size={25}></EvilIcons>
                        <FontAwesome name="instagram" size={25}></FontAwesome>
                        <FontAwesome name="linkedin" size={25}></FontAwesome>
                    </View>

                    <View style={{ justifyContent: "space-evenly", flexDirection: 'row', marginTop: 10 }}>
                        <Text>Terms of Use </Text>
                        <View style={{ height: 3, width: 3, backgroundColor: 'grey', borderRadius: 3, alignSelf: 'center' }}></View>
                        <Text>Terma of Sale</Text>
                        <View style={{ height: 3, width: 3, backgroundColor: 'grey', borderRadius: 3, alignSelf: 'center' }}></View>
                        <Text>Privacy Policy</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: "space-evenly", marginTop: 10 }}>
                        <Text> Warranty Policy</Text>
                        <View style={{ height: 3, width: 3, backgroundColor: 'grey', borderRadius: 3, alignSelf: 'center' }}></View>
                        <Text> Return Policy</Text>
                        <View style={{ height: 3, width: 3, backgroundColor: 'grey', borderRadius: 3, alignSelf: 'center' }}></View>
                        <Text> Help Center Articles</Text>
                    </View>

                </View>


            </View>
        </ScrollView>
    )
}

export default Profile;