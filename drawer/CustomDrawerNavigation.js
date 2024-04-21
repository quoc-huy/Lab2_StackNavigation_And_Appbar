// import { Drawer } from "react-native-paper"

// const CustomDrawerNavigation= ({navigation })=>{
//     return(
//         <Drawer.Section style={{paddingTop: 40}}>
//             <Drawer.Item label="Home" icon={"home"} onPress={()=> navigation.navigate("Home")}/>
//             <Drawer.Item label="Detail" icon={"star"} onPress={navigation.navigate("Detail")}/>
//         </Drawer.Section>
//     )
// }
// export default CustomDrawerNavigation;
import { View } from "react-native";
import { Drawer } from "react-native-paper";

const CustomDrawerNavigation = ({ navigation })=>{
    return(
        <Drawer.Section style={{paddingTop: 40}}>
            <Drawer.Item
                label="Home"
                icon={"home"}
                onPress={()=> navigation.navigate("Home")}
            />
            <Drawer.Item
                label="Detail"
                icon={"star"}
                onPress={()=> navigation.navigate("Details")}
            />
        </Drawer.Section>
    )
}
export default CustomDrawerNavigation;