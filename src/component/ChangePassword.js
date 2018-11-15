import React,{Component} from 'react';
import {View,Text,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import {Input,Button,Link,Header,Footer} from "../commonComponent/Common";
import Color from './../helper/theme/Color';
import {WindowsWidth,WindowsHeight} from "../commonComponent/global";
class ChangePassword extends Component{
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
            <SafeAreaView>
                <Header
                    headerText="Change Password"
                    iName={this.state.iName}
                    isBack={this.state.isBack}
                />
                <View style={{alignItems: 'center'}}>
                    <Input
                        placeholder="Enter old password"
                    />
                    <Input
                        placeholder="Enter new password"
                    />

                    <Input
                        placeholder="Enter confirm password"
                    />
                    <Button>SUBMIT</Button>
                </View>
               <Footer/>
            </SafeAreaView>
        )
    }
}
export default ChangePassword;
