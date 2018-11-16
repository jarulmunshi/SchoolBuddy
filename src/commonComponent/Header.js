import React from 'react';
import {Text,View,TouchableWithoutFeedback,StatusBar} from 'react-native';
import Color from './../helper/theme/Color';
import {WindowsHeight,WindowsWidth} from './global';
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = (props) =>{
        const {textStyle,headerStyle,viewStyle,subViewStyle,subViewStyle2}=headerStyles;
        return(
        <View>
            {/*<StatusBar
                hidden={false}
                backgroundColor={Color.headerColor}
                barStyle="light-content"
            />*/}
            <View style={viewStyle}>
                <View style={subViewStyle}>
                    {props.isBack&&
                    <TouchableWithoutFeedback onPress={()=>{props.onBackButtonPress()}}>
                        <Icon name={props.iName} size={25} style={{color:Color.headerTextColor,marginLeft:5}}/>
                    </TouchableWithoutFeedback>}

                </View>
                <View style={subViewStyle2}>
                    <Text style={textStyle}>{props.headerText}</Text>
                </View>
            </View>
        </View>
    )
};
const headerStyles={
    viewStyle:{
        backgroundColor: Color.headerColor,
        height: WindowsHeight * 0.062,
        flexDirection: 'row',
        width:WindowsWidth,
    },
    subViewStyle:{
        width: WindowsWidth * 0.08,
        marginLeft: 15,
        justifyContent: 'center'
    },
    subViewStyle2:{
        width:WindowsWidth,
        alignItems:'center',
        justifyContent: 'center'
    },
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
        fontSize:20,
        color:Color.headerTextColor,
        textAlign: 'center',
        marginRight:WindowsWidth * 0.24,
    }
};
export {Header};
