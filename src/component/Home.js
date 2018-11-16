import React,{Component} from 'react';
import {View,Text,SafeAreaView, Alert} from 'react-native';
import {Header,Footer} from "../commonComponent/Common";

import Color from '../helper/theme/Color'

class Home extends Component{
    static navigationOptions = {
        drawerLabel: `Today's Class`
    };
    constructor(props){
        super(props);
        this.state={
            //iName:'long-arrow-left',
            iName:"bars",
            isBack:true
        };
    }
    goBack=()=>{
        this.props.navigation.openDrawer();
    }
    render(){
        return(
            <SafeAreaView style={{backgroundColor:'white',flex:1}}>
                <Header
                    headerText="Home"
                    iName={this.state.iName}
                    isBack={this.state.isBack}
                    onBackButtonPress={this.goBack}
                />
                <View style={{backgroundColor:"white"}}>
                    <Text>Home page</Text>
                </View>
                <Footer/>
            </SafeAreaView>
        )
    }
}

export default Home;
