import { Image, ScrollView, Text, View } from "react-native";
 
 

const Home =()=>{

    const items = Array.from({ length: 10 }, (_, index) => (
        <View key={index} style={{ height: 215, width: 148, backgroundColor: '#ddebe0', borderRadius: 5, padding: 10, marginRight: 10 }}>
          <Image source={require('../assets/image/mobile_1.png')} style={{ alignSelf: 'center', position: 'absolute', marginTop: 10 }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 130, height: 32, borderWidth: 1, borderColor: 'yellow', alignSelf: 'center', borderRadius: 1.5, marginTop: 110, backgroundColor: 'white' }}>
            <View>
              <Text style={{ fontSize: 15, fontWeight: '500', color: "black" }}>30</Text>
              <Text style={{ fontSize: 5, fontWeight: '500' }}>Days</Text>
            </View>
            <Text>:</Text>
            <View>
              <Text style={{ fontSize: 15, fontWeight: '500', color: "black" }}>20</Text>
              <Text style={{ fontSize: 5, fontWeight: '500' }}>Hours</Text>
            </View>
            <Text style={{ color: 'black' }}>:</Text>
            <View>
              <Text style={{ fontSize: 15, fontWeight: '500', color: "black" }}>15</Text>
              <Text style={{ fontSize: 5, fontWeight: '500' }}>Minutes</Text>
            </View>
            <Text style={{ color: 'black' }}>:</Text>
            <View>
              <Text style={{ fontSize: 15, fontWeight: '500', color: "black" }}>10</Text>
              <Text style={{ fontSize: 5, fontWeight: '500' }}>Seconds</Text>
            </View>
          </View>
          <Text style={{ fontSize: 12, fontWeight: '300', color: 'black', marginTop: 5 }}>Apple</Text>
          <Text style={{ fontSize: 12, fontWeight: '300', color: 'black' }}>iPhone 13 Pro</Text>
          <Text style={{ fontSize: 17, fontWeight: '700', color: 'black' }}>SAR 2600</Text>
        </View>
      ));
    return(
        <View>
           
              <View style={{height:60,justifyContent:'center',paddingLeft:20, elevation:1}}>

                <Text  style={{fontSize:25,fontWeight:'600',color:'black'}}>Hi, Muhammed</Text>
                </View>

                 <ScrollView>
                    <View style={{padding:20}}>
                    <View style={{height:200,width:380,backgroundColor:'black',borderRadius:7, alignSelf:'center',}}></View>
                <Text style={{fontSize:15,fontWeight:'500',color:'black',paddingTop:20,paddingBottom:20}}>Specials</Text>

                <ScrollView horizontal={true} style={{ padding: 10 }}>
      {items}
      </ScrollView>
                    </View>
                 </ScrollView>
                
             

             
        </View>
    );
}

export default Home;