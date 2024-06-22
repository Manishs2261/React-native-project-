/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

 
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './src/components/Login';
import Home from './src/components/Home';
import AllCategories from './src/components/AllCategories';
import SingleProduct from './src/components/SingleProduct';
import CheckOutScreen from './src/components/CheckOutScreen';
import Profile from './src/components/Pofile';
import Wishlist from './src/components/Wishlist';
import SignUp from './src/components/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
 

 
const Stack = createNativeStackNavigator();

 

function App(): React.JSX.Element {
   
  return (


    <NavigationContainer>

 
<Stack.Navigator initialRouteName="Splash">
<Stack.Screen
name='Login'
component={Login}>
  
</Stack.Screen>

</Stack.Navigator>
 
  </NavigationContainer>
);
     
//     <View>
//     {/* <Login/> */}

//     {/* <Home/> */}

//     {/* <AllCategories/> */}
// {/* 
//     <SingleProduct/> */}
//     {/* <CheckOutScreen/> */}
//     {/* <Profile/> */}

//     {/* <Wishlist/> */}
//     {/* <Profile/> */}
//     <SignUp/>
    
//     </View>
  // );
}

 

export default App;
