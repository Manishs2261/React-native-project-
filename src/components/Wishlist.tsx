import { View,Text,Image } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Wishlist =()=>{

    return(
        <View>
         <View style={{ backgroundColor: 'white',
            width: '100%',
            height: 60,
            elevation: 1,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent:"center",
            paddingHorizontal: 20,}}>
            <Text style={{fontSize:20,fontWeight:'600',color:'black'}}>WISHLIST</Text>
         </View>

         <View style={{width:380,height:162,borderColor:'grey',borderWidth:1,borderRadius:7 , alignSelf:"center", flexDirection:"row",padding:20}}>

         <Image source={require('../assets/image/mobile_1.png')} style={{alignSelf:'center'}} ></Image>

        <View style={{marginLeft:20}}>

                <View style={ {flexDirection:'row',justifyContent:"space-between",flex:1, }}>

                        <View >
                        <Text style={{fontSize:15,color:'black'}}>Apple</Text>
                        <Text style={{fontSize:15,color:'black'}}> iPhone 13 Pro</Text>
                           <View style={{ width:20,height:20,backgroundColor:'grey',borderRadius:10,marginTop:5}}>

                           </View>
                        </View>

                        <MaterialIcons name="delete" size={25} color="black"></MaterialIcons>

                </View>
                


         <Text style={{}}>SAR 3000</Text>
         <Text style={{fontSize:16, fontWeight:'700',color:'black'}}>SAR 2600</Text>
        </View>
         <View>

          
         </View>

        
         </View>


        </View>
    )
}

export default Wishlist;