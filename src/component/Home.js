import React,{Component} from 'react';
import {View,Text,SafeAreaView} from 'react-native';
import {Header,Footer} from "../commonComponent/Common";

class Home extends Component{
    render(){
        return(
            <SafeAreaView>
                <Header/>
                <View>
                    <Text>Home page</Text>
                </View>
                <Footer/>
            </SafeAreaView>
        )
    }
}

export default Home;
