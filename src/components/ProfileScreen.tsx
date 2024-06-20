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

            <Text style={{fontSize:15,fontWeight:'500',color:"black",marginBottom:20}}>Shopping Cart</Text>
            <View style={{borderColor:'black',height:216,borderRadius:7,borderWidth:1,padding:10 ,justifyContent:'space-evenly'}}>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black'}}>Product Name</Text>
                    <Text style={{fontSize:15,fontWeight:'400',color:"black"}}>Apple iPhone 12</Text>
                </View>

                 <View style={{height:1,width:"100%",backgroundColor:'grey'}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black'}}>Quantity</Text>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black'}}>01</Text>
                </View>

                <View style={{height:1,width:"100%",backgroundColor:'grey'}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black'}}>Unit Price</Text>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black'}}>SAR 2600</Text>
                </View>

                <View style={{height:1,width:"100%",backgroundColor:'grey'}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black'}}>Total before Tax</Text>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black'}}> SAR 2600</Text>
                </View>

            </View>

            <View style={{borderColor:'black',height:216,borderRadius:7,borderWidth:1,padding:10 ,justifyContent:'space-evenly',marginTop:20}}>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black'}}>Sub Total</Text>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black'}}>2600</Text>
                </View>

                 <View style={{height:1,width:"100%",backgroundColor:'grey'}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black'}}>Free Shipping</Text>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black'}}>SAR 0.0</Text>
                </View>

                <View style={{height:1,width:"100%",backgroundColor:'grey'}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black'}}>VAT(5%)</Text>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black'}}>SAR 130</Text>
                </View>

                <View style={{height:1,width:"100%",backgroundColor:'grey'}}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black'}}>Total </Text>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black'}}> SAR 2600</Text>
                </View>

            </View>

            <Text style={{fontSize:15,fontWeight:'400' , color:'black',marginVertical:20}}>Enter your Coupon</Text>
            <View style={{height:61,width:380,borderColor:'grey',borderRadius:7,borderWidth:1}}></View>


            <Text style={{fontSize:15,fontWeight:'400' , color:'black' ,marginVertical:20}}>Enter your Gift Card</Text>
            <View style={{height:61,width:380,borderColor:'grey',borderRadius:7,borderWidth:1}}></View>

            <Text style={{fontSize:15,fontWeight:'400' , color:'black', marginVertical:20}}>Delivery Method</Text>
            <View style={{width:380,height:124,borderColor:'grey',borderRadius:7,borderWidth:1,padding:10}}>
                <Text style={{fontSize:15,fontWeight:'400' , color:'black',marginBottom:5}}>Free Shipping</Text>
                <View style={{width:355,height:68,borderColor:'orange',borderRadius:7,borderWidth:1 ,}}>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black'}}>Free Shipping SAR 0.0</Text>
                </View>
            </View>

            <Text style={{fontSize:15,fontWeight:'500' , color:'black', marginVertical:20}}>Payment Method</Text>
            <View  style={{height:355,width:380,borderColor:'black',borderWidth:1 ,borderRadius:7,padding:20}}>

                      <Text style={{fontSize:15, fontWeight:'400',color:'black',marginBottom:10}}>Free Shipping</Text>
                <View style={{borderWidth:1, width:355, height:68,borderColor:'black', borderRadius:7}}></View>
            </View>

            


        </View>
       </ScrollView>
    );
}

export default Profile;