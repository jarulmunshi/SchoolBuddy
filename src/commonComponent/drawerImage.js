import React from 'React';
import {Text,View,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {WindowsHeight,WindowsWidth} from './global';
import Color from './../helper/theme/Color';
const drawerImage=(props)=> {
    return(
    <SafeAreaView>
        <View
            style={{
                height: WindowsHeight,
            }}
        >
            <View style={{paddingLeft: WindowsWidth * 0.60}}>
                <Icon name="times" size={30} style={{color:Color.drawerTextColor}}/>
            </View>
            <View style={{alignItems: 'center',height:WindowsHeight * 0.01}}>
                <Image source={require('./../images/CoberArt1024-500.png')} style={{height:WindowsHeight * 0.15}} resizeMode="contain"/>
            </View>
            <View style={{top:WindowsHeight * 0.25}}>
                <TouchableOpacity style={[style.viewStyle,{borderTopWidth:1,borderTopColor:'gray'}]}>
                    <Text style={style.textStyle}>Today's Classes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.viewStyle}>
                    <Text style={style.textStyle}>Study Materials</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.viewStyle}>
                    <Text style={style.textStyle}>Manage Class</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.viewStyle} onPress={()=>props.navigation.navigate('ChangePassword')}>
                    <Text style={style.textStyle}>Change Password</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: WindowsHeight * 0.45 }}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
                    <Text style={{textAlign: 'center',color:"red",fontSize:25}}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
    )};
const style={
    viewStyle: {
        borderBottomWidth: 1,
        borderBottomColor:'gray',
        height:WindowsHeight * 0.08,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle:{
        color:Color.drawerTextColor,
        fontSize: 18
    }
}

export {drawerImage}
