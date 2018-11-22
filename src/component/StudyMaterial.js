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
import {DisplayAreaView} from '../commonComponent/global';
import {
    StudyMaterialInfo,
    Footer,
    Header,
    TodayClassInfo
} from '../commonComponent/Common'

export default class StudyMaterial extends Component{

    state = {
        active: 'Class',
        classList: [
            {
                "standard": "11th",
                "className": "A",
                "sname":"MATHS",
                "color":"red"
            },
            {
                "standard": "12th",
                "className": "A",
                "sname":"PHYSICS",
                "color":"green"
            },
            {
                "standard": "10th",
                "className": "A",
                "sname":"ENGLISH",
                "color":"blue"
            },
            {
                "standard": "08th",
                "className": "A",
                "sname":"HINDI",
                "color":"pink"
            },
            {
                "standard": "09th",
                "className": "A",
                "sname":"BIOLOGY",
                "color":"grey"
            },
            {
                "standard": "11th",
                "className": "A",
                "sname":"CHEMISTRY",
                "color":"red"
            },
        ],
        iName:"bars",
        isBack:true
    };

    changeActiveState(value){
        this.setState({
            active: value
        })
    };

    goBack=()=>{
        this.props.navigation.openDrawer();
    };

    goNext=()=>{
        this.props.navigation.navigate('File');
    };
    renderClassInfo(){
        return this.state.classList.map(classInfo =>
            <StudyMaterialInfo key={classInfo.standard} classInfo={classInfo}
                               onBackButtonPress={this.goNext}/>
        )
    };


    render(){
        return(
            <SafeAreaView style={styles.parentContainer}>
                <StatusBar
                    backgroundColor={Color.headerColor}
                />
                <Header
                    headerText={"Study Material"}
                    iName={this.state.iName}
                    isBack={this.state.isBack}
                    onBackButtonPress={this.goBack}
                />

                <View style={{marginTop: 10, height: DisplayAreaView}}>
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
