import { Image, ScrollView, Text, View } from "react-native";
 
 

const Home =()=>{
    return(
        <View>
           
              <View style={{height:60,justifyContent:'center',paddingLeft:20, elevation:1}}>

                <Text  style={{fontSize:25,fontWeight:'600',color:'black'}}>Hi, Muhammed</Text>
                </View>

                 <ScrollView>
                    <View style={{padding:20}}>
                    <View style={{height:200,width:380,backgroundColor:'black',borderRadius:7, alignSelf:'center'}}></View>
                <Text style={{fontSize:15,fontWeight:'500',color:'black',paddingTop:20}}>Specials</Text>

                <View style={{height:215,width:148 ,backgroundColor:'#ddebe0'}}>
                    <Image source={require('../assets/image/mobile_1.png')}  style={{alignSelf:'center' ,position:'absolute',}}></Image>
                    <View style={{width:130,height:30, borderWidth:1,borderColor:'yellow',alignSelf:'center',borderRadius:1.5 ,marginTop:120,backgroundColor:'white'}}>

                        <Text style={{fontSize:15,fontWeight:'500',color:"black"}}>30</Text>
                    </View>
                    <Text style={{fontSize:12,fontWeight:'300',color:'black'}}>Apple</Text>
                    <Text style={{fontSize:12,fontWeight:'300',color:'black'}}>iPhone 13 Pro</Text>
                    <Text style={{fontSize:17,fontWeight:'700',color:'black'}}>SAR 2600</Text>
                </View>
                    </View>
                 </ScrollView>
                
             

             
        </View>
    );
}

export default Home;