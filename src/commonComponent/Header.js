import React from 'react';
import {Text,View,TouchableWithoutFeedback} from 'react-native';
const Header = () =>{
    return(
        <View style={{backgroundColor:'blue'}}>
            <Text>Home</Text>
        </View>
    )
};
const headerStyles={
    headerStyle:{
        borderColor:'#ddd',
        shadowColor:'#fff',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.7,
        flexDirection:'row',
        marginTop:20
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:20

    }
};
export {Header};
