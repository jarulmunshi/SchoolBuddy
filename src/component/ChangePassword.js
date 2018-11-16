import React,{Component} from 'react';
import {View,Text,SafeAreaView,Image,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {Input,Button,Link,Header,Footer} from "../commonComponent/Common";
import Color from './../helper/theme/Color';
import {WindowsWidth,WindowsHeight} from "../commonComponent/global";
import {checkEmail, emailEmpty, passwordEmpty} from "../validation/Validation";
import Icon from "react-native-vector-icons/FontAwesome";
class ChangePassword extends Component{
    constructor(props){
        super(props);
        this.state={
            //iName:'long-arrow-left',
            iName:"bars",
            isBack:true,
            opass:'',
            npass:'',
            cpass:'',
            passError:'',
            cpassError:'',
            npassError:''
        };
    }
    validateUser=()=> {
        if(passwordEmpty(this.state.cpass) && passwordEmpty(this.state.opass) && passwordEmpty(this.state.npass)){
            this.setState({iconError:'exclamation-circle',passError:'Require',cpassError:'Require',npassError:'Require'});
        }
        else if(passwordEmpty(this.state.cpass) || passwordEmpty(this.state.npass || passwordEmpty(this.state.npass))){
            if(passwordEmpty(this.state.npass)){
                this.setState({iconError:'exclamation-circle',npassError:'Require'});
            }
            else if(passwordEmpty(this.state.opass)){
                this.setState({iconError:'exclamation-circle',passError:'Require'});
            }
            else {
                this.setState({iconError:'exclamation-circle',cpassError:'Require'});
            }
        }
        else {
            const data={
                email:this.state.email,
                password:this.state.password
            };
            this.props.navigation.navigate('Home');
            // if(role === 'admin'){
            //     this.props.navigation.navigate('Admin',{res,name:res.username,data:this.state.userData});
            // }else if(role === 'teacher'){
            //     this.props.navigation.navigate('TeacherTab',{res,name:res.username,data:this.state.userData});
            // }else {
            //     this.props.navigation.navigate('ParentTab',{res,name:res.username,data:this.state.userData});
            // }}


        }

    };
    render(){
        return(
            <SafeAreaView style={{backgroundColor:'white',flex:1}}>
                <Header
                    headerText="Change Password"
                    iName={this.state.iName}
                    isBack={this.state.isBack}
                />
                <KeyboardAvoidingView enabled={true} keyboardVerticalOffset={100}>
                <View style={{alignItems: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Input
                                placeholder="Enter old password"
                                onChange={(value)=>this.setState({opass:value,passError:''})}
                                value={this.state.opass}
                                autoCapitalize={false}
                                secureTextEntry={true}
                                style={{paddingTop:20,color:Color.headerColor}}
                                borderWidth={1}
                                borderColor={Color.headerColor}
                            />
                        </View>
                        <View style={{left:WindowsWidth *0.85,alignItems:'center',justifyContent: 'center',position: 'absolute'
                            ,top:WindowsHeight * 0.045}}>
                            {this.state.passError !=="" &&
                            <Icon name={this.state.iconError} size={20} style={{color: 'red'}}/>}
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Input
                                placeholder="Enter new password"
                                onChange={(value)=>this.setState({npass:value,npassError:''})}
                                value={this.state.npass}
                                autoCapitalize={false}
                                secureTextEntry={true}
                                style={{paddingTop:20,color:Color.headerColor}}
                                borderWidth={1}
                                borderColor={Color.headerColor}
                            />
                        </View>
                        <View style={{left:WindowsWidth *0.85,alignItems:'center',justifyContent: 'center',position: 'absolute'
                            ,top:WindowsHeight * 0.046}}>
                            {this.state.npassError !=="" &&
                            <Icon name={this.state.iconError} size={20} style={{color: 'red'}}/>}
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Input
                                placeholder="Enter confirm password"
                                onChange={(value)=>this.setState({cpass:value,cpassError:''})}
                                value={this.state.cpass}
                                autoCapitalize={false}
                                secureTextEntry={true}
                                style={{paddingTop:20}}
                                borderWidth={1}
                                borderColor={Color.headerColor}
                            />
                        </View>
                        <View style={{alignItems:'center',justifyContent: 'center',left:WindowsWidth *0.85,position: 'absolute'
                            ,top:WindowsHeight * 0.046}}>
                            {this.state.cpassError !=="" &&
                            <Icon name={this.state.iconError} size={20} style={{color: 'red'}}/>}
                        </View>
                    </View>

                    <Button style={{paddingTop:20}} onPress={this.validateUser}>SUBMIT</Button>

                </View>
               <Footer/>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}
export default ChangePassword;
