import React from 'react';
import {Image,View} from 'react-native';
import {WindowsHeight,WindowsWidth} from './global';
const Footer = (props) =>{
    return(
        <View style={styles.footerStyle}>
            <Image source={require('./../images/Footer1.png')} resizeMode="contain"
                   style={{ width: WindowsWidth }}/>
        </View>
    )
};
const styles={
    footerStyle:{
        top: WindowsHeight - (WindowsHeight * 0.16),
        //backgroundColor:'red',
        position: 'absolute',
        height: WindowsHeight * 0.16,
        width: WindowsWidth
        //alignItems: 'center'
    }
};
export {Footer};
