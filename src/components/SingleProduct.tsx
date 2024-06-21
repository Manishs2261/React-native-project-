import { Text, View, Image, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SingleProduct = () => {

    return (
        <ScrollView>
            <View>
                <View style={{ backgroundColor: 'white', width: '100%', height: 60, elevation: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }}>

                    <Ionicons name="arrow-back" size={25} style={{ color: 'black' }}></Ionicons>
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: '500' }} >Apple iPhone 12</Text>
                    <Ionicons name="search-outline" color='black' size={25}></Ionicons>

                </View>

                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ height: 400, width: 400, backgroundColor: '#e6eaf0', justifyContent: "center", alignItems: 'center', borderRadius: 10, alignSelf: 'center' }}>
                        <Image source={require('../assets/image/mobile_1.png')} style={{ height: 345, width: 250, }} ></Image>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, alignItems: 'center' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text>SAR 2600</Text>
                            <Text>SAR 2600</Text>
                        </View>
                        <View style={{ height: 30, width: 202, borderRadius: 7, borderColor: "gray", borderWidth: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <Text>G - Pay </Text>
                            <Text>Phone pe</Text>
                            <Text>UPI</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <View>
                            <Text style={{ color: 'black', fontSize: 15, }}>Brand :</Text>
                            <Text style={{ color: 'black', fontSize: 15, }}>Product Code :</Text>
                            <Text style={{ color: 'black', fontSize: 15, }}>Availability :</Text>
                        </View>
                        <View style={{ height: 60, width: 1, backgroundColor: 'grey', marginHorizontal: 30 }}></View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 15, }} >Apple</Text>
                            <Text style={{ color: 'black', fontSize: 15, }}>#123</Text>
                            <Text style={{ color: 'black', fontSize: 15, }}>in Stock</Text>
                        </View>
                    </View>

                    <Text style={{ color: "black", fontWeight: "600", marginTop: 30 }}>Conditions :</Text>
                    <View style={{ flexDirection: 'row', justifyContent: "flex-start", marginTop: 20 }}>
                        <View style={{ height: 40, width: 80, borderColor: 'grey', borderWidth: 1, borderRadius: 7, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: 'black' }}>Good</Text>
                        </View>
                        <View style={{ height: 40, width: 80, borderColor: 'grey', borderWidth: 1, borderRadius: 7, justifyContent: "center", alignItems: "center", marginHorizontal: 20 }}>
                            <Text style={{ color: 'black' }}>Very Good</Text>
                        </View>
                        <View style={{ height: 40, width: 80, borderColor: 'grey', borderWidth: 1, borderRadius: 7, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: 'black' }}>Best</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 15, fontWeight: "600", color: 'black', marginTop: 30, marginBottom: 20 }}>Size :</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ height: 40, width: 80, borderColor: 'grey', borderWidth: 1, borderRadius: 7, justifyContent: "center", alignItems: "center", marginRight: 20 }}>
                            <Text style={{ color: 'black' }}>128GB</Text>
                        </View>
                        <View style={{ height: 40, width: 80, borderColor: 'grey', borderWidth: 1, borderRadius: 7, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "black" }}>512GB</Text>
                        </View>
                    </View>

                    <Text style={{ color: 'black', marginTop: 30, fontSize: 15, fontWeight: '600', marginBottom: 10 }}>Color :</Text>
                    <View>
                        <View style={{ height: 40, width: 40, backgroundColor: 'black', borderRadius: 20 }}></View>
                    </View>

                    <Text style={{ color: 'black', fontSize: 15, fontWeight: '600', marginTop: 30, marginBottom: 10 }}>Warranty:</Text>

                    <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                        <View style={{ height: 40, width: 90, borderColor: 'grey', borderWidth: 1, borderRadius: 7, justifyContent: "center", alignItems: "center", marginRight: 20 }}>
                            <Text style={{ color: 'black' }}>12 Months</Text>
                        </View>
                        <View style={{ height: 40, width: 90, borderColor: 'grey', borderWidth: 1, borderRadius: 7, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: 'black' }}>24 Months</Text>
                        </View>
                    </View>
                </View>

                <View style={{ width: "100%", height: 1, backgroundColor: 'grey', marginBottom: 8, marginHorizontal: 20, }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="star-outline" color="#ad930e" size={25} style={{ marginHorizontal: 3 }}></Ionicons>
                        <Ionicons name="star-outline" color="#ad930e" size={25} style={{ marginHorizontal: 3 }}></Ionicons>
                        <Ionicons name="star-outline" color="#ad930e" size={25} style={{ marginHorizontal: 3 }}></Ionicons>
                        <Ionicons name="star-outline" color="#ad930e" size={25} style={{ marginHorizontal: 3 }}></Ionicons>
                        <Ionicons name="star-outline" color="#ad930e" size={25} style={{ marginHorizontal: 3 }}></Ionicons>

                    </View>
                    <Text style={{ color: 'black' }}>0 Reviews</Text>
                    <Text style={{ color: 'black' }}> Write a Reviews</Text>
                </View>
                <View style={{ width: "100%", height: 1, backgroundColor: 'grey', marginBottom: 20, marginHorizontal: 20, marginTop: 8 }}></View>

                <View style={{ height: 200, width: 400, backgroundColor: '#f3f0f5', padding: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 15, fontWeight: '400', color: 'black' }}>Decription</Text>
                        <Text style={{ fontSize: 15, fontWeight: '400', color: '#f2b211' }}>Specifications</Text>
                        <Text style={{ fontSize: 15, fontWeight: '400', color: 'black' }}>Reviews (0)</Text>
                    </View>
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>Condition</Text>
                </View>


            </View>
        </ScrollView>
    );
}

export default SingleProduct;