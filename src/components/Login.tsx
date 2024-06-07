import React from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Images } from '../globles/images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
function ChooseLanguage() {
  return (


<View style={{padding:20}}>

  <Image source={require('../assets/image/Mask_group_copy.png')} style={{alignSelf:'center'}} ></Image>

 <Text style={{fontSize:30,fontWeight:"600",color:"black",alignSelf:'center'}}>
 Welcome Back !
 </Text>
 <Text style={{fontWeight:"400",fontSize:15,color:'black',alignSelf:'center',marginTop:10}}>
 Please login first to avail our service
 </Text>

 <Text style={{color:'black',fontWeight:'400',marginTop:35,marginBottom:5}}>
  Email Address
 </Text>

 <View style={{borderRadius:7,paddingLeft:10, borderColor:'black',borderWidth:1,height:50}}>
 <TextInput
  placeholder="Enter Email Id"
  placeholderTextColor="black"
 ></TextInput>
 </View>

 <Text style={{fontWeight:'400',marginTop:20,marginBottom:5,color:'black'}}>Password</Text>

 <View style={{borderRadius:7,paddingLeft:10,borderColor:'black',borderWidth:1,height:50 ,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
  <TextInput
  placeholder='Enter Password'
  placeholderTextColor="black">

 
  </TextInput>

  <MaterialIcons name='remove-red-eye' size={20} style={{marginRight:10}}></MaterialIcons>
   

 </View>

 <View style={{flexDirection:"row",justifyContent:'space-between'}}>
  <View style={{flexDirection:'row', alignItems:'center',marginTop:20}}>
    <View style={{width:15,height:15,backgroundColor:'yellow',borderRadius:3 , marginRight:10,justifyContent:'center',alignContent:'center'
    }}><MaterialIcons name='done' size={13} color={"black"} style={{alignItems:'center'}}></MaterialIcons></View>
    <Text style={{color:"black"}}>Remember me</Text>
  </View>
  <Text style={{color:'black',marginTop:20}}>Forgot Password ?</Text>
 </View>

 <View style={{width:350,height:61,backgroundColor:'yellow',borderRadius:7,marginTop:30,justifyContent:'center'}}>
  <Text style={{color:'black',fontSize:25,fontWeight:"600",alignSelf:'center'}}>Login</Text>
 </View>

 <Text style={{color:'black',fontSize:20,fontWeight:"400",alignSelf:'center',marginTop:10}}>Or continue with</Text>

 <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:20}}>
  
  <View style={{width:163,height:61,borderColor:'black',borderRadius:7,borderWidth:1,justifyContent:'space-evenly',flexDirection:'row',alignItems:'center'}}>
  <Image source={require('../assets/image/google.png')} style={{height:40,width:40}}></Image>
    <Text style={{fontSize:20,alignSelf:'center',fontWeight:'500',color:'black'}}>Google</Text>
  </View>
  <View style={{width:163,height:61,borderColor:'black',borderRadius:7,borderWidth:1,justifyContent:'space-evenly',flexDirection:'row',alignItems:'center'}}>
  <Image source={require('../assets/image/facebook.png')} style={{height:50,width:50}}></Image>
    <Text style={{fontSize:20,alignSelf:'center',fontWeight:'500',color:'black'}}>Facebook</Text>
  </View> 

 </View>

<Text style={{fontSize:15,fontWeight:'600',marginTop:40,alignSelf:'center',marginBottom:10}}>Don’t have an account yet? </Text>

<View style={{backgroundColor:'black',width:350,height:61,borderRadius:7,justifyContent:'center',alignItems:'center'}}>
  <Text style={{color:'white',fontSize:25,fontWeight:'600'}}>Create Account</Text>

</View>

 
 
 
</View>
 
    
  )
}

export default ChooseLanguage