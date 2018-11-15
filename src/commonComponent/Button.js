import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import Color from './../helper/theme/Color';
import {WindowsWidth} from "./global";
const Button = ({onPress,children}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyles.buttonStyle}>
            <Text style={buttonStyles.textStyle}>{children}</Text>
        </TouchableOpacity>
    )
};
const buttonStyles={
    buttonStyle:{
        backgroundColor:Color.headerColor,
        width:WindowsWidth * 0.8,
        borderWidth:1,
        height:48,
        alignItems: 'center'
    },
    textStyle:{
        fontSize:16,
        color:Color.headerTextColor,
        fontWeight:'400',
        paddingBottom:10,
        paddingTop:10
    }
};
export {Button};
