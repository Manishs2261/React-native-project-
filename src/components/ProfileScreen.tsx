import { ScrollView, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Profile=()=>{

    return(
       <ScrollView>

<View
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: 60,
            elevation: 1,
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <Ionicons
            name="arrow-back"
            size={25}
            style={{color: 'black'}}></Ionicons>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              fontWeight: '500',
              marginLeft: 100,
            }}>
            CHECKOUT
          </Text>
        </View>



        <View style={{margin:20}}>

            <Text>Shopping Cart</Text>
            <View style={{borderColor:'grey',height:216,borderRadius:7,borderWidth:1,padding:10 ,justifyContent:'space-evenly'}}>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>Product Name</Text>
                    <Text>Apple iPhone 12</Text>
                </View>

                 <View style={{height:1,width:"100%",backgroundColor:'grey'}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>Quantity</Text>
                    <Text>01</Text>
                </View>

                <View style={{height:1,width:"100%",backgroundColor:'grey'}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>Unit Price</Text>
                    <Text>SAR 2600</Text>
                </View>

                <View style={{height:1,width:"100%",backgroundColor:'grey'}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>Total before Tax</Text>
                    <Text> SAR 2600</Text>
                </View>

            </View>

            <View style={{borderColor:'grey',height:216,borderRadius:7,borderWidth:1,padding:10 ,justifyContent:'space-evenly',marginTop:20}}>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>Sub Total</Text>
                    <Text>2600</Text>
                </View>

                 <View style={{height:1,width:"100%",backgroundColor:'grey'}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>Free Shipping</Text>
                    <Text>SAR 0.0</Text>
                </View>

                <View style={{height:1,width:"100%",backgroundColor:'grey'}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>VAT(5%)</Text>
                    <Text>SAR 130</Text>
                </View>

                <View style={{height:1,width:"100%",backgroundColor:'grey'}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>Total </Text>
                    <Text> SAR 2600</Text>
                </View>

            </View>

            <Text>Enter your Coupon</Text>
            <View style={{height:61,width:380,borderColor:'grey',borderRadius:7,borderWidth:1}}></View>


            <Text>Enter your Gift Card</Text>
            <View style={{height:61,width:380,borderColor:'grey',borderRadius:7,borderWidth:1}}></View>

            <Text>Delivery Method</Text>
            <View style={{width:380,height:124,borderColor:'grey',borderRadius:7,borderWidth:1}}>
                <Text>Free Shipping</Text>
                <View style={{width:355,height:68,borderColor:'yellow',borderRadius:7,borderWidth:1}}>
                    <Text>Free Shipping SAR 0.0</Text>
                </View>
            </View>

            <Text>Payment Method</Text>

            


        </View>
       </ScrollView>
    );
}

export default Profile;