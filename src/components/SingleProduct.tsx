import { Text, View ,Image} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SingleProduct =()=>{

    return(
<View>
    <View style={{backgroundColor:'white',width:'100%',height:60,elevation:1 ,alignItems:'center', justifyContent:'space-between'  ,flexDirection:'row'}}>

      <Ionicons name="arrow-back" size={25} style={{color:'black'}}></Ionicons>
      <Text style={{color:'black',fontSize:25,fontWeight:'500'}} >Apple iPhone 12</Text>
      <Ionicons name="arrow-back" size={25}></Ionicons>

    </View>

    <View style={{height:400,width:400,backgroundColor:'#e6eaf0', justifyContent:"center",alignItems:'center',borderRadius:10 , alignSelf:'center'}}>
        <Image source={require('../assets/image/mobile_1.png')} style={{height:345,width:250, }} ></Image>

    </View>

    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <View style={{alignItems:'center'}}>
         <Text style={{fontSize:25,color:"black"}}>SAR 2600</Text>
         <Text>SAR 2600</Text>
         </View>
        <View style={{height:30,width:202,borderRadius:7,borderColor:"gray",borderWidth:1,flexDirection:'row',justifyContent:'space-evenly'}}>
            <Text>G - Pay </Text>
            <Text>Phone pe</Text>
            <Text>UPI</Text>
        </View>
    </View>

    <View style={{flexDirection:'row'}}>
        <View>
        <Text>Brand:</Text>
        <Text>Product Code:</Text>
        <Text>Availability:</Text>
        </View>
        <View>
       <Text>Apple</Text>
       <Text>#123</Text>
       <Text>in Stock</Text>
        </View>
    </View>

    <Text>Conditions:</Text>
    <View style={{flexDirection:'row',justifyContent:"space-evenly"}}>
        <View style={{height:40,width:40,borderColor:'grey',borderWidth:1,}}>
            <Text>Good</Text>
        </View>
        <View style={{height:40,width:40,borderColor:'grey',borderWidth:1,}}>
            <Text>Very Good</Text>
        </View>
        <View style={{height:40,width:40,borderColor:'grey',borderWidth:1,}}>
            <Text>Best</Text>
        </View>
    </View>

    <Text>Size</Text>
    <View style={{flexDirection:'row'}}>
    <View style={{height:40,width:40,borderColor:'grey',borderWidth:1,}}>
            <Text>Good</Text>
        </View>
        <View style={{height:40,width:40,borderColor:'grey',borderWidth:1,}}>
            <Text>Good</Text>
        </View>
    </View>

    <Text>Color</Text>
    <View>
        <View style={{height:40,width:40,backgroundColor:'black',borderRadius:20}}></View>
    </View>

<Text>Warranty:</Text>

<View style={{flexDirection:'row'}}>
<View style={{height:40,width:40,borderColor:'grey',borderWidth:1,}}>
            <Text>Good</Text>
        </View>
        <View style={{height:40,width:40,borderColor:'grey',borderWidth:1,}}>
            <Text>Good</Text>
        </View>
</View>
    

</View>
    );
}

export default SingleProduct;