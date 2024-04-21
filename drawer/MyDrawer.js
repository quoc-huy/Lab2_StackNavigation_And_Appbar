// import { createDrawerNavigator } from "@react-navigation/drawer";
// import HomeScreen from "./HomeScreen";
// import DetailsScreen from "./DetailsScreen";
// import CustomDrawerNavigation from "./CustomDrawerNavigation";

// const Drawer= createDrawerNavigator()
// const MyDrawer=()=>{
//     return(
//         <Drawer.Navigator drawerContent={(props)=> <CustomDrawerNavigation{...props}/>}>
            
//             <Drawer.Screen name="Home" component={HomeScreen}/>
//             <Drawer.Screen name="Detail" component={DetailsScreen}/>
            
//         </Drawer.Navigator>
//     )
// }
// export default MyDrawer;

import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../src/HomeScreen";
import DetailsScreen from "../src/DetailsScreen";
import CustomDrawerNavigation from "./CustomDrawerNavigation";

const Drawer = createDrawerNavigator()
const MyDrawer = ()=>{
    return(
        <Drawer.Navigator
            drawerContent={(props)=> <CustomDrawerNavigation{...props}/>}
        >
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Details" component={DetailsScreen}/>
        </Drawer.Navigator>
    )
}
export default MyDrawer