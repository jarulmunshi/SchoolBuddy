import React,{Component} from 'react';
import {View,Text,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import {Input,Button,Link} from "../commonComponent/Common";
import Color from './../helper/theme/Color';
import {WindowsWidth,WindowsHeight} from "../commonComponent/global";
class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            //iName:'long-arrow-left',
            iName:"bars",
            isBack:true
        };
    }

    render(){
        return(
            <View>
                <View style={{ width: WindowsWidth, height:WindowsHeight * 0.25 }} >
                    <Image source={require('./../images/Cloud.png')} resizeMode="cover"  />
                </View>
                <View style={{height: WindowsHeight * 0.2}}>
                    <Image source={require('./../images/CoberArt1024-500.png')} resizeMode="contain"
                           style={{ width: WindowsWidth, height: WindowsHeight * 0.15}} />
                </View>
                <View style={{alignItems: 'center'}}>
                    <Input
                        placeholder="Email"
                    />
                    <Input
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <Button onPress={()=>this.props.navigation.navigate('Home')}>LOG IN</Button>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Link>Forgot Password?</Link>
                </View>
                <View style={{
                    top: WindowsHeight - 135,
                    position: 'absolute',
                    height:  135 ,
                    width: WindowsWidth}}>
                    <Image source={require('./../images/Footer_emoji.png')} resizeMode="cover"
                           style={{ width: WindowsWidth, height: 135 }}/>
                </View>
            </View>
        )
    }
}
export default SignIn;
