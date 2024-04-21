
import "react-native-gesture-handler"
import React from "react";
import { NavigationContainer }from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { Drawer, PaperProvider } from "react-native-paper";
import CustomNavigationBar from './src/CustomNavigationBar';
import DetailsScreen from './src/DetailsScreen';
import HomeScreen from './src/HomeScreen';
import MyDrawer from "./drawer/MyDrawer";
import MyBottomTabNavigator from "./tab/MyBottomTabNavigator";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();

const App=()=>{
  return( 
   <><PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}>
          <Stack.Screen name="Home"
            component={HomeScreen} />
          <Stack.Screen name="Details"
            component={DetailsScreen} />
        </Stack.Navigator>

      </NavigationContainer>
    </PaperProvider><NavigationContainer>
        <PaperProvider>
          <MyDrawer></MyDrawer>
        </PaperProvider>
      </NavigationContainer></>
  );
}
export default App;
