import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";

const DetailsScreen =({navigation})=>{
    return(
        // <View style={style.container}>
        //     <Text>Details Screen</Text>
        // </View>
        <View style={style.container}>
            <Text>Details Screen</Text>
            <Button mode="container" onPress={()=> navigation.navigate('Home')}>
                Go to home
            </Button>
        </View>
    )
}
export default DetailsScreen;
const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
});