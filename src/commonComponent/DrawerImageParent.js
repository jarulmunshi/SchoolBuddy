import React from 'React';
import {Text,View,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {WindowsHeight,WindowsWidth} from './global';
import Color from './../helper/theme/Color';
const drawerImageparent=(props)=> {
    return(
        <SafeAreaView>
            <View
                style={{
                    height: WindowsHeight,
                }}
            >
                <View style={{paddingLeft: WindowsWidth * 0.60}}>
                    <TouchableOpacity onPress={()=>props.navigation.closeDrawer()}>
                        <Icon name="times" size={30} style={{color:Color.drawerTextColor}}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{alignItems: 'center',height:WindowsHeight * 0.01}}
                                  onPress={()=>props.navigation.navigate('StudyMaterial')}>
                    <Image onPress={()=>props.navigation.navigate('StudyMaterial')} source={require('./../images/CoberArt1024-500.png')} style={{height:WindowsHeight * 0.15, width: WindowsWidth * 0.60}} resizeMode="contain"/>
                </TouchableOpacity>
                <View style={{top:WindowsHeight * 0.20}}>
                    <TouchableOpacity style={[style.viewStyle,{borderTopWidth:1,borderTopColor:'gray'}]}
                                      onPress={()=>props.navigation.navigate('TodaysClass')}>
                        <Text style={style.textStyle}>Attendance / Notes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.viewStyle}
                                      onPress={()=>props.navigation.navigate('TimeTable')}>
                        <Text style={style.textStyle}>Time Table</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.viewStyle}
                                      onPress={()=>props.navigation.navigate('Community')}>
                        <Text style={style.textStyle}>Community</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.viewStyle} onPress={()=>props.navigation.navigate('Message')}>
                        <Text style={style.textStyle}>Messages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.viewStyle} onPress={()=>props.navigation.navigate('StudyMaterial')}>
                        <Text style={style.textStyle}>Study Materials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.viewStyle} onPress={()=>props.navigation.navigate('ChangePassword')}>
                        <Text style={style.textStyle}>Change Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: WindowsHeight * 0.30 }}>
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
        justifyContent: 'center'
    },
    textStyle:{
        color:Color.drawerTextColor,
        fontSize: 18,
        marginLeft: 10
    }
}

export {drawerImageparent}
