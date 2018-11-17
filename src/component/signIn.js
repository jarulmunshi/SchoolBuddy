import React,{Component} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {View, Text, SafeAreaView, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar} from 'react-native';
import {Input,Button,Link} from "../commonComponent/Common";
import Color from './../helper/theme/Color';
import Icon from 'react-native-vector-icons/FontAwesome';
import {WindowsWidth,WindowsHeight} from "../commonComponent/global";
import {emailEmpty,passwordEmpty,checkEmail} from './../validation/Validation';
class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            //iName:'long-arrow-left',
            iName:"bars",
            isBack:true,
            email:process.env.NODE_ENV === 'development' && 'jarul@gmail.com' || '',
            password:process.env.NODE_ENV === 'development' && '' || 'jarul',
            emailError:'',
            passwordError: '',
            iconError:''
        };
    }

    componentDidMount(){
        SplashScreen.hide();
    }

    validateUser=()=> {
        if(emailEmpty(this.state.email) && passwordEmpty(this.state.password)){
            this.setState({iconError:'exclamation-circle',emailError:'Require',passwordError:'Require'});
        }
        else if(emailEmpty(this.state.email) || passwordEmpty(this.state.password)){
            if(emailEmpty(this.state.email)){
                this.setState({iconError:'exclamation-circle',emailError:'Require'});
            }
            else if(passwordEmpty(this.state.password)){
                this.setState({iconError:'exclamation-circle',passwordError:'Require'});
            }
        }
        else if(!checkEmail(this.state.email)){
            this.setState({iconError:'exclamation-circle',emailError:'Invalid'});
        }
        else {
            const data={
                email:this.state.email,
                password:this.state.password
            };
            if(this.state.email === 'admin@gmail.com' && this.state.password === 'admin'){
                this.props.navigation.navigate('Admin');
            }else if(this.state.email === 'jarul@gmail.com' && this.state.password === 'jarul'){
                this.props.navigation.navigate('Home');
            }
        }


        };

    render(){
        const {textStyle}=styles;
        return(
            <View style={{backgroundColor:'white',flex:1}}>
                <StatusBar
                    backgroundColor={Color.headerColor}
                />
            <KeyboardAvoidingView enabled={true} keyboardVerticalOffset={100}>
            <View>
                <View style={{ width: WindowsWidth, height:WindowsHeight * 0.25 }} >
                    <Image source={require('./../images/Cloud.png')} resizeMode="cover"  />
                </View>
                <View style={{height: WindowsHeight * 0.2}}>
                    <Image source={require('./../images/CoberArt1024-500.png')} resizeMode="contain"
                           style={{ width: WindowsWidth, height: WindowsHeight * 0.15}} />
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Input
                                onChange={(value)=>this.setState({email:value,emailError:''})}
                                placeholder="Email"
                                value={this.state.email}
                                keyboardType="email-address"
                                autoCapitalize={false}
                            />
                        </View>
                        <View style={{left:WindowsWidth *0.85,alignItems:'center',justifyContent: 'center',
                            position: 'absolute'
                            ,top:WindowsHeight * 0.020}}>
                            {this.state.emailError !=="" &&
                            <Icon name={this.state.iconError} size={20} style={{color: 'red'}}/>}
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Input
                                onChange={(value)=>this.setState({password:value,passwordError:''})}
                                value={this.state.password}
                                placeholder="Password"
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={{left:WindowsWidth *0.85,alignItems:'center',justifyContent: 'center',
                            position: 'absolute'
                            ,top:WindowsHeight * 0.020}}>
                            {this.state.passwordError !=="" &&
                            <Icon name={this.state.iconError} size={20} style={{color: 'red'}}/>}
                        </View>
                    </View>

                    <Button onPress={()=>this.validateUser()}>LOG IN</Button>
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
            </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles={
    textStyle:{
        color:'red',
        fontSize:16,
    }
};
export default SignIn;
