import {Image, ScrollView, Text, View} from 'react-native';
 

const Home = () => {
  const items = Array.from({length: 10}, (_, index) => (
    <View
      key={index}
      style={{
        height: 215,
        width: 148,
        backgroundColor: '#ddebe0',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
      }}>
      <Image
        source={require('../assets/image/mobile_1.png')}
        style={{alignSelf: 'center', position: 'absolute', marginTop: 10}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: 130,
          height: 32,
          borderWidth: 1,
          borderColor: 'yellow',
          alignSelf: 'center',
          borderRadius: 1.5,
          marginTop: 110,
          backgroundColor: 'white',
        }}>
        <View>
          <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
            30
          </Text>
          <Text style={{fontSize: 5, fontWeight: '500'}}>Days</Text>
        </View>
        <Text>:</Text>
        <View>
          <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
            20
          </Text>
          <Text style={{fontSize: 5, fontWeight: '500'}}>Hours</Text>
        </View>
        <Text style={{color: 'black'}}>:</Text>
        <View>
          <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
            15
          </Text>
          <Text style={{fontSize: 5, fontWeight: '500'}}>Minutes</Text>
        </View>
        <Text style={{color: 'black'}}>:</Text>
        <View>
          <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
            10
          </Text>
          <Text style={{fontSize: 5, fontWeight: '500'}}>Seconds</Text>
        </View>
      </View>
      <Text
        style={{fontSize: 12, fontWeight: '300', color: 'black', marginTop: 5}}>
        Apple
      </Text>
      <Text style={{fontSize: 12, fontWeight: '300', color: 'black'}}>
        iPhone 13 Pro
      </Text>
      <Text style={{fontSize: 17, fontWeight: '700', color: 'black'}}>
        SAR 2600
      </Text>
    </View>
  ));



  const itemList = Array.from({length: 10}, (_, index) => (
    <View
      key={index}
      style={{
        height: 215,
        width: 148,
        backgroundColor: '#ddebe0',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
      }}>
      <Image
        source={require('../assets/image/mobile_1.png')}
        style={{alignSelf: 'center'}}
      />
     
      <Text
        style={{fontSize: 12, fontWeight: '300', color: 'black', marginTop: 5}}>
        Apple
      </Text>
      <Text style={{fontSize: 12, fontWeight: '300', color: 'black'}}>
        iPhone 13 Pro
      </Text>
      <Text style={{fontSize: 17, fontWeight: '700', color: 'black'}}>
        SAR 2600
      </Text>
    </View>
  ));
  return (
   <ScrollView>
      <View>
      <View
        style={{
          height: 60,
          justifyContent: 'center',
          paddingLeft: 20,
          elevation: 1,
        }}>
        <Text style={{fontSize: 25, fontWeight: '600', color: 'black'}}>
          Hi, Muhammed
        </Text>
      </View>

      <ScrollView>
        <View style={{padding: 20}}>
          <View
            style={{
              height: 200,
              width: 380,
              backgroundColor: 'black',
              borderRadius: 7,
              alignSelf: 'center',
            }}></View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: 'black',
              paddingTop: 20,
              paddingBottom: 20,
            }}>
            Specials
          </Text>

          <ScrollView horizontal={true} style={{padding: 10}}>
            {items}
          </ScrollView>
        </View>
      </ScrollView>



      <View style={{height:100,width:380,backgroundColor:"black", borderRadius:7,alignSelf:"center",justifyContent:'center'}}>
  <Text style={{color:"white",fontSize:34,fontWeight:"700",alignSelf:'center'}}>
    Mobile
  </Text>
      </View>

       <View style={{flexDirection:'row', justifyContent:'space-around',marginTop:20,marginRight:20,marginLeft:20 }}>

       <View style={{backgroundColor:'yellow' , height:30, width:130 ,borderRadius:15,justifyContent:"center"
      }}>
        <Text style={{color:"black",alignSelf:'center',fontSize:15}}>
        New Arrival Item
        </Text>
      </View>

      <View style={{backgroundColor:'yellow' , height:30, width:100 ,borderRadius:15,justifyContent:"center"
      }}>
        <Text style={{color:"black",alignSelf:'center',fontSize:15}}>
        Best Selling
        </Text>
      </View>

      <View style={{backgroundColor:'yellow' , height:30, width:120 ,borderRadius:15,justifyContent:"center"
      }}>
        <Text style={{color:"black",alignSelf:'center',fontSize:15}}>
        On Sale Items
        </Text>
      </View>
       </View>


       <ScrollView horizontal={true} style={{padding: 10}}>
            {itemList}
          </ScrollView>


          <View style={{height:100,width:380,backgroundColor:"black", borderRadius:7,alignSelf:"center",justifyContent:'center'}}>
  <Text style={{color:"white",fontSize:34,fontWeight:"700",alignSelf:'center'}}>
    LAPTOP
  </Text>
      </View>

       <View style={{flexDirection:'row',marginTop:20,marginRight:20,marginLeft:20 }}>

       <View style={{backgroundColor:'yellow' , height:25, width:90 , marginRight:5,borderRadius:15,justifyContent:"center"
      }}>
        <Text style={{color:"black",alignSelf:'center',fontSize:15}}>
        Best Seller
        </Text>
      </View>

      <View style={{backgroundColor:'yellow' , height:25,marginRight:5, width:40 ,borderRadius:15,justifyContent:"center"
      }}>
        <Text style={{color:"black",alignSelf:'center',fontSize:15}}>
        HP
        </Text>
      </View>

      <View style={{backgroundColor:'yellow' , height:25,marginRight:5, width:50  ,borderRadius:15,justifyContent:"center"
      }}>
        <Text style={{color:"black",alignSelf:'center',fontSize:15}}>
        Dell
        </Text>
      </View>

      <View style={{backgroundColor:'yellow' , height:25, marginRight:5,width:70  ,borderRadius:15,justifyContent:"center"
      }}>
        <Text style={{color:"black",alignSelf:'center',fontSize:15}}>
        Apple
        </Text>
      </View>
      <View style={{backgroundColor:'yellow' , height:25, marginRight:5,width:60  ,borderRadius:15,justifyContent:"center"
      }}>
        <Text style={{color:"black",alignSelf:'center',fontSize:15}}>
        Acer
        </Text>
      </View>
       </View>


       <ScrollView horizontal={true} style={{padding: 10}}>
            {itemList}
          </ScrollView>


          <View style={{height:100,width:380,backgroundColor:"black", borderRadius:7,alignSelf:"center",justifyContent:'center'}}>
  <Text style={{color:"white",fontSize:34,fontWeight:"700",alignSelf:'center'}}>
    TABLET
  </Text>
      </View>

      <View style={{flexDirection:'row',marginTop:20,marginRight:20,marginLeft:20 }}>

<View style={{backgroundColor:'yellow' , marginRight:10,height:25, width:90 ,borderRadius:15,justifyContent:"center"
}}>
 <Text style={{color:"black",alignSelf:'center',fontSize:15}}>
 Best Seller
 </Text>
</View>

<View style={{backgroundColor:'yellow' ,marginRight:10, height:25, width:90 ,borderRadius:15,justifyContent:"center"
}}>
 <Text style={{color:"black",alignSelf:'center',fontSize:15}}>
 Best Rated
 </Text>
</View>

<View style={{backgroundColor:'yellow' , marginRight:10,height:25, width:80 ,borderRadius:15,justifyContent:"center"
}}>
 <Text style={{color:"black",alignSelf:'center',fontSize:15}}>
 Specials
 </Text>
</View>
</View>



       <ScrollView horizontal={true} style={{padding: 10}}>
            {itemList}
          </ScrollView>


          <View style={{height:100,width:380,backgroundColor:"black", borderRadius:7,alignSelf:"center",justifyContent:'center'}}>
  <Text style={{color:"white",fontSize:34,fontWeight:"700",alignSelf:'center'}}>
    SMART WATCH
  </Text>
      </View>

       <View style={{flexDirection:'row',marginTop:20,marginRight:20,marginLeft:20 }}>

       <View style={{backgroundColor:'yellow' , marginRight:10,height:25, width:90 ,borderRadius:15,justifyContent:"center"
      }}>
        <Text style={{color:"black",alignSelf:'center',fontSize:15}}>
        Best Seller
        </Text>
      </View>

      <View style={{backgroundColor:'yellow' ,marginRight:10, height:25, width:90 ,borderRadius:15,justifyContent:"center"
      }}>
        <Text style={{color:"black",alignSelf:'center',fontSize:15}}>
        Best Rated
        </Text>
      </View>

      <View style={{backgroundColor:'yellow' , marginRight:10,height:25, width:80 ,borderRadius:15,justifyContent:"center"
      }}>
        <Text style={{color:"black",alignSelf:'center',fontSize:15}}>
        Specials
        </Text>
      </View>
       </View>


       <ScrollView horizontal={true} style={{padding: 10}}>
            {itemList}
          </ScrollView>

    </View>
   </ScrollView>
  );
};

export default Home;
