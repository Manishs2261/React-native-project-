import {View, Text, ScrollView, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 

const CheckOutScreen = () => {
  return (
    <ScrollView>
     <View>
     <View>

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
         
      </View>


     <View style={{margin:20}}>
     <Text style={{color: 'black', fontSize: 15, fontWeight: '600', marginBottom:20}}>
          Personal Details
        </Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View>
                <View style={{flexDirection: 'row',marginBottom:10}}>
                    <Text style={{color: 'red'}}>*</Text>
                    <Text style={{color: 'black'}}>First Name</Text>
                </View>
          <View
            style={{
              height: 40,
              width: 170,
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 7,
            }}>
            <TextInput></TextInput>
          </View>
        </View>

        <View>
          <View style={{flexDirection: 'row',marginBottom:10}}>
            <Text style={{color: 'red'}}>*</Text>
            <Text style={{color: 'black'}}>Last Name</Text>
          </View>
          <View
            style={{
              height: 40,
              width: 170,
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 7,
            }}>
            <TextInput></TextInput>
          </View>
        </View>


    


 
      </View>


         <View style={{flexDirection:'row',marginTop:20,}}>
            <Text style={{color:'red'}}>*</Text>
            <Text style={{color:"black",fontSize:15,fontWeight:'600',marginBottom:10}}>Email Address</Text>
         </View>

        <View style={{height:40,width:"100%",borderColor:'black',borderRadius:7,borderWidth:1 }}></View>

        <View style={{flexDirection:'row',marginTop:20,marginBottom:10}}>
            <Text style={{color:'red'}}>*</Text>
            <Text style={{color:"black",fontSize:15,fontWeight:'600'}}>Phone Number</Text>
         </View>

        <View style={{height:40,width:"100%",borderColor:'black',borderRadius:7,borderWidth:1}}>
            <View style={{height:38,width:30,backgroundColor:'yellow',borderTopLeftRadius:7,borderBottomLeftRadius:7,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'black',}}>+91</Text>
            </View>
        </View>


         
           
            <Text style={{color:"black",fontSize:15,fontWeight:'600'}}>Company Name</Text>

        <View style={{height:40,width:"100%",borderColor:'black',borderRadius:7,borderWidth:1}}></View>


        <View style={{flexDirection:'row'}}>
            <Text style={{color:'red'}}>*</Text>
            <Text style={{color:"black",fontSize:15,fontWeight:'600'}}>Address line 1</Text>
         </View>

        <View style={{height:40,width:"100%",borderColor:'black',borderRadius:7,borderWidth:1}}></View>


       
             
            <Text style={{color:"black",fontSize:15,fontWeight:'600'}}>Address line 2</Text>
        <View style={{height:40,width:"100%",borderColor:'black',borderRadius:7,borderWidth:1}}></View>

        <View style={{flexDirection:'row'}}>
            <Text style={{color:'red'}}>*</Text>
            <Text style={{color:"black",fontSize:15,fontWeight:'600'}}>City</Text>
         </View>

        <View style={{height:40,width:"100%",borderColor:'black',borderRadius:7,borderWidth:1}}></View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'red'}}>*</Text>
                    <Text style={{color: 'black'}}>Country</Text>
                </View>
          <View
            style={{
              height: 40,
              width: 180,
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 7,
            }}>
             <MaterialIcons name='keyboard-arrow-down' size={30} color={"black"}></MaterialIcons>
          </View>
        </View>

        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'red'}}>*</Text>
            <Text style={{color: 'black'}}>Region</Text>
          </View>
          <View
            style={{
              height: 40,
              width: 180,
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 7,
            }}>
             <MaterialIcons name='keyboard-arrow-down' size={30} color={"black"}></MaterialIcons>
          </View>
        </View>
 
      </View>

      <View style={{height:61,width:362,backgroundColor:'yellow',borderRadius:7,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'black',fontSize:25,fontWeight:'600'}}>Continue</Text>

      </View>
     </View>

     </View>


      
    </ScrollView>
  );
};

export default CheckOutScreen;
