import React from 'react';
import {TextInput,Text,View} from 'react-native';
import Color from './../helper/theme/Color';
import {WindowsWidth,WindowsHeight} from "./global";
const Input =({label,value,onChange,placeholder,secureTextEntry,keyboardType,editable,autoCapitalize,style,borderWidth,borderColor})=>{
    return(
     <View style={[inputStyles.containerStyle,style]}>
         <TextInput
             secureTextEntry={secureTextEntry}
             placeholder={placeholder}
             placeholderTextColor={Color.headerColor}
             autoCorrect={false}
             value={value}
             onChangeText={onChange}
             style={[inputStyles.inputStyle,borderColor ? {borderColor} : null ,borderWidth ? {borderWidth}: null]}
             keyboardType={keyboardType||'default'}
             editable={editable||true}
             autoCapitalize={autoCapitalize||true}
             underlineColorAndroid={'transparent'}
         />
     </View>
    )
};

const inputStyles={
    textStyle:{
        paddingLeft:5,
        color:Color.headerColor
    },
    inputStyle:{
        color:Color.headerColor,
        borderWidth:0.5,
        borderColor:Color.headerColor,
        fontSize:20,
        height: WindowsHeight * 0.06,
        width:WindowsWidth * 0.8,
        paddingLeft:15
    },
    containerStyle:{
        alignItems:'center',
        padding: 5
    }
};
export {Input}
