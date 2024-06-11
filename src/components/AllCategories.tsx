import { View, Text,Image, ScrollView } from "react-native";

const AllCategories=()=>{

    return(
         <ScrollView>
            <View style={{paddingTop:50}}>
            <View style={{height:200,width:380, flexDirection:'row', backgroundColor:'#ede4e4',borderRadius:7,alignSelf:'center', padding:20}}>
                  
                  <Image source={require('../assets/image/mobile_1.png')} ></Image>

                  <View style={{justifyContent:'space-evenly', marginLeft:25}}>
                    <Text style={{fontSize:20,fontWeight:"500",color:'black',width:70,marginBottom:10,}}>
                    Mobile Phones
                    </Text>
                    <Text style={{fontWeight:'300',fontSize:12 , color:'black', width:210}}>
                    Lorem ipsum dolor sit amet consectetur. Tellus volutpat enim augue duis quam in. Ultricies facilisis augue nulla adipiscing malesuada pharetra porttitor et. Nec augue purus egestas

                    </Text>
                    <View  style={{backgroundColor:'yellow', marginTop:20,width:198,height:32,borderRadius:3,justifyContent:'center'}}>
                      <Text style={{fontSize:16,fontWeight:"500",color:'black',alignSelf:'center'}}>
                        View All
                      </Text>
                    </View>
                  </View>
               
            </View>


            <View style={{height:200,width:380, flexDirection:'row', backgroundColor:'#ede4e4',borderRadius:7,alignSelf:'center', padding:20,marginTop:10}}>
                  
                  <Image source={require('../assets/image/laptop.png')} ></Image>

                  <View style={{justifyContent:'space-evenly', marginLeft:10}}>
                    <Text style={{fontSize:20,fontWeight:"500",color:'black',width:70,marginBottom:10,}}>
                    Laptop
                    </Text>
                    <Text style={{fontWeight:'300',fontSize:12 , color:'black', width:210}}>
                    Lorem ipsum dolor sit amet consectetur. Tellus volutpat enim augue duis quam in. Ultricies facilisis augue nulla adipiscing malesuada pharetra porttitor et. Nec augue purus egestas

                    </Text>
                    <View  style={{backgroundColor:'yellow', marginTop:20,width:198,height:32,borderRadius:3,justifyContent:'center'}}>
                      <Text style={{fontSize:16,fontWeight:"500",color:'black',alignSelf:'center'}}>
                        View All
                      </Text>
                    </View>
                  </View>
               
            </View>

            <View style={{height:200,width:380, flexDirection:'row',marginTop:10, backgroundColor:'#ede4e4',borderRadius:7,alignSelf:'center', padding:20}}>
                  
                  <Image source={require('../assets/image/tablat.png')} ></Image>

                  <View style={{justifyContent:'space-evenly', marginLeft:25}}>
                    <Text style={{fontSize:20,fontWeight:"500",color:'black',width:70,marginBottom:10,}}>
                    Tablets
                    </Text>
                    <Text style={{fontWeight:'300',fontSize:12 , color:'black', width:210}}>
                    Lorem ipsum dolor sit amet consectetur. Tellus volutpat enim augue duis quam in. Ultricies facilisis augue nulla adipiscing malesuada pharetra porttitor et. Nec augue purus egestas

                    </Text>
                    <View  style={{backgroundColor:'yellow', marginTop:20,width:198,height:32,borderRadius:3,justifyContent:'center'}}>
                      <Text style={{fontSize:16,fontWeight:"500",color:'black',alignSelf:'center'}}>
                        View All
                      </Text>
                    </View>
                  </View>
               
            </View>

            <View style={{height:200,width:380, flexDirection:'row', marginTop:10,backgroundColor:'#ede4e4',borderRadius:7,alignSelf:'center', padding:20}}>
                  
                  <Image source={require('../assets/image/watch.png')} ></Image>

                  <View style={{justifyContent:'space-evenly', marginLeft:25}}>
                    <Text style={{fontSize:20,fontWeight:"500",color:'black',width:80,marginBottom:10,}}>
                    Smart Watches
                    </Text>
                    <Text style={{fontWeight:'300',fontSize:12 , color:'black', width:210}}>
                    Lorem ipsum dolor sit amet consectetur. Tellus volutpat enim augue duis quam in. Ultricies facilisis augue nulla adipiscing malesuada pharetra porttitor et. Nec augue purus egestas

                    </Text>
                    <View  style={{backgroundColor:'yellow', marginTop:20,width:198,height:32,borderRadius:3,justifyContent:'center'}}>
                      <Text style={{fontSize:16,fontWeight:"500",color:'black',alignSelf:'center'}}>
                        View All
                      </Text>
                    </View>
                  </View>
               
            </View>
        </View>
         </ScrollView>
    );
}


export default AllCategories;