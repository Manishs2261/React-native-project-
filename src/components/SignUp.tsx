import { ScrollView, Text, View,Image, TextInput } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SignUp =()=>{
    return(
        <ScrollView>
            <View style={{margin:20}}>
                <View style={{flexDirection:'row',justifyContent:'space-between' ,marginTop:20,}}>
                    <View style={{height:40,width:40,backgroundColor:'yellow',borderRadius:7 , justifyContent:'center',alignItems:'center' }}>
                        <MaterialIcons name="arrow-back-ios-new" size={25} color="black"></MaterialIcons>
                    </View>
                    <View style={{width:72,height:40,backgroundColor:'yellow' , justifyContent:'center',alignItems:"center",borderRadius:7}}>
                            <Text style={{color:"black",fontSize:18}}>Skip</Text>
                        </View>

                </View>

                <Image source={require('../assets/image/Mask_group_copy.png')} style={{alignSelf:'center'}} ></Image>
                <Text style={{fontSize:30,fontWeight:'600',color:'black', alignSelf:'center'}}>Welcome to Alaaadeen</Text>

                <Text style={{marginBottom:5,marginTop:20,color:'black'}}>First Name</Text>
                <View style={{height:50,width:380,borderColor:'grey',borderRadius:7,borderWidth:1}}>
                    <TextInput placeholder="Enater Name"></TextInput>
                </View>

                <Text style={{marginBottom:5,marginTop:20,color:'black'}}>Last Name</Text>
                <View style={{height:50,width:380,borderColor:'grey',borderRadius:7,borderWidth:1}}>
                <TextInput placeholder="Enater Last Name"></TextInput>
                </View>

                <Text style={{marginBottom:5,marginTop:20,color:'black'}}>Phone number</Text>
                <View style={{height:50,width:380,borderColor:'grey',borderRadius:7,borderWidth:1}}>
                <TextInput placeholder="Enater Phone Number"></TextInput>
                </View>

                <Text style={{marginBottom:5,marginTop:20,color:'black'}}>Email Address</Text>
                <View style={{height:50,width:380,borderColor:'grey',borderRadius:7,borderWidth:1}}>
                <TextInput placeholder="Enater Email Id"></TextInput>
                </View>

                <Text style={{marginBottom:5,marginTop:20,color:'black'}}>Password</Text>
                <View style={{height:50,width:380,borderColor:'grey',borderRadius:7,borderWidth:1}}>
                <TextInput placeholder="Enater Password - Rahul@55"></TextInput>
                </View>
                <Text style={{marginBottom:5,marginTop:20,color:'black'}}>Confirm Password</Text>
                <View style={{height:50,width:380,borderColor:'grey',borderRadius:7,borderWidth:1}}>
                <TextInput placeholder="Re-enater Password"></TextInput>
                </View>

                <View style={{flexDirection:'row' ,justifyContent:'space-between',marginTop:20}}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{width:30,height:2,backgroundColor:'grey',  marginRight:10}}></View>
                    <View style={{width:30,height:2,backgroundColor:'grey',  marginRight:10}}></View>
                    <View style={{width:30,height:2,backgroundColor:'grey', marginRight:10}}></View>
                    </View>

                    <Text style={{fontSize:15,fontWeight:'800',color:'black'}}>Strong</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <View style={{height:20,width:20,borderColor:'black',borderWidth:1,borderRadius:10 ,justifyContent:'center',alignItems:'center'}}>
                        <MaterialIcons name="done" color="black" size={18}></MaterialIcons>
                         
                    </View>
                    <Text style={{fontSize:14,fontWeight:'500',color:'black', marginLeft:10}}>At least 8 characters with a combination of letters & numbers</Text>
                </View>

                <View style={{flexDirection:'row',marginTop:20}}>
                    <View style={{height:20,width:20 ,borderRadius:4 , backgroundColor:'yellow',justifyContent:'center',alignItems:'center'}}>
                        <MaterialIcons name="done" color="black" size={18}></MaterialIcons>
                         
                    </View>
                    <Text style={{fontSize:14,fontWeight:'500',color:'black', marginLeft:10}}>Subscribe to our newsletter for regular updates</Text>
                </View>

                <View style={{height:50,width:350,backgroundColor:'yellow',borderRadius:7,marginTop:50,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:30,fontWeight:'600',color:'black',}}>Sign Up</Text>

                </View>

                <View style={{flexDirection:'row',margin:20 ,justifyContent:"center"}}>
                    <Text>Already have an account?  </Text>
                    <Text style={{fontSize:15,fontWeight:'700',color:'black'}}>Log in</Text>
                </View>

            </View>
        </ScrollView>
    )
}
     
export default SignUp;