import { ScrollView, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const BuyNow=()=>{

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
                <View style={{width:355,height:68,borderColor:'orange',borderRadius:7,borderWidth:1 , flexDirection:'row',justifyContent:"flex-start",alignItems:'center',padding:10 }}>
                    <MaterialCommunityIcons name="truck-delivery-outline" size={35}></MaterialCommunityIcons>
                    <Text style={{fontSize:15,fontWeight:'400' , color:'black',marginLeft:15}}>Free Shipping SAR 0.0</Text>
                </View>
            </View>

            <Text style={{fontSize:15,fontWeight:'500' , color:'black', marginVertical:20}}>Payment Method</Text>
            <View  style={{height:300,width:380,borderColor:'black',borderWidth:1 ,borderRadius:7,padding:20}}>

                      <Text style={{fontSize:15, fontWeight:'400',color:'black',marginBottom:10}}>Free Shipping</Text>
                      <View style={{borderWidth:1, width:345, height:68,borderColor:'black', borderRadius:7, marginBottom:10 , flexDirection:'row',alignItems:"center",justifyContent:'flex-start',padding:10}}>
                        <MaterialIcons name="payment" size={35}></MaterialIcons>
                        <Text style={{fontSize:15, fontWeight:'400',color:'black',marginBottom:10,marginLeft:15}}>Credit Card / Debit Card </Text>
                      </View>
                      <View style={{borderWidth:1, width:345, height:68,borderColor:'black', borderRadius:7, marginBottom:10,flexDirection:'row',justifyContent:"flex-start",alignItems:'center',padding:10 }}>
                      <MaterialIcons name="payment" size={35}></MaterialIcons>
                        <Text style={{fontSize:15, fontWeight:'400',color:'black',marginBottom:10 ,marginLeft:10}}>Phone pe </Text>
                      </View>
                      <View style={{borderWidth:1, width:345, height:68,borderColor:'black', borderRadius:7, marginBottom:10,flexDirection:'row',justifyContent:"flex-start",alignItems:'center',padding:10 }}>
                      <MaterialIcons name="payment" size={35}></MaterialIcons>
                        <Text style={{fontSize:15, fontWeight:'400',color:'black',marginBottom:10 ,marginLeft:15}}>Google Pay</Text>
                      </View>
                
            </View>

            <View style={{flexDirection:'row',marginTop:20}}>
                <View  style={{height:20,width:20,backgroundColor:'yellow', borderRadius:2 ,}}>
                    <MaterialIcons name="done" color='black' size={18}></MaterialIcons>
                </View>
                <Text style={{fontSize:15,fontWeight:'500',color:'black', marginLeft:10}}>I have read and agree to the</Text>
                <Text style={{fontSize:15,fontWeight:'bold',color:'black', marginLeft:10}}>Terms & Conditions</Text>
            </View>

            <View style={{height:61,width:370,backgroundColor:'yellow', borderRadius:7,marginVertical:30,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:25,fontWeight:"600",color:"black"}}>Proceed to Pay</Text>

            </View>

            


        </View>
       </ScrollView>
    );
}

export default BuyNow;