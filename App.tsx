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
import Profile from './src/components/ProfileScreen';
 

 

 

function App(): React.JSX.Element {
   
  return (
     
    <View>
    {/* <Login/> */}

    {/* <Home/> */}

    {/* <AllCategories/> */}

    {/* <SingleProduct/> */}
    {/* <CheckOutScreen/> */}
    <Profile/>
    </View>
  );
}

 

export default App;
