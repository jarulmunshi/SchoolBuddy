import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Alert,
    SafeAreaView, StatusBar
} from 'react-native'
import Color from '../helper/theme/Color'
import {WindowsHeight} from '../commonComponent/global';
import {
    FileInfo,
    Footer,
    Header
} from '../commonComponent/Common'

export default class File extends Component{

    state = {
        active: 'Class',
        classList: [
            {
                "date": "23 NOV 2018",
                "head":"SEMESTER 1 CHAPTER 1-3",
                "color":"red"
            },
            {
                "date": "23 NOV 2018",
                "head":"SEMESTER 1 CHAPTER 1-3",
                "color":"green"
            },
            {
                "date": "23 NOV 2018",
                "head":"SEMESTER 1 CHAPTER 1-3",
                "color":"blue"
            },
            {
                "date": "23 NOV 2018",
                "head":"SEMESTER 1 CHAPTER 1-3",
                "color":"orange"
            }
        ],
        iName:'long-arrow-left',
        isBack:true,
        isIcon:true
    };
    goBack=()=>{
        this.props.navigation.goBack();
    };
    changeActiveState(value){
        this.setState({
            active: value
        })
    }

    renderClassInfo(){
        return this.state.classList.map(classInfo =>
            <FileInfo key={classInfo.standard} classInfo={classInfo} />
        )
    }


    render(){
        return(
            <SafeAreaView style={styles.parentContainer}>
                <StatusBar
                    backgroundColor={Color.headerColor}
                />
                <Header
                    headerText={"Files"}
                    iName={this.state.iName}
                    isBack={this.state.isBack}
                    isIcon={this.state.isIcon}
                    onBackButtonPress={this.goBack}
                />

                <View style={{marginTop: 10, height: WindowsHeight - (WindowsHeight * 0.222)}}>
                    <ScrollView>
                        {this.renderClassInfo()}
                    </ScrollView>
                </View>

                <Footer/>
            </SafeAreaView>
        )
    }
}

const styles ={
    parentContainer: {
        flex: 1,
        backgroundColor:'white'
    },
};
