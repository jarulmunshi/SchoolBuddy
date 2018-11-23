import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Alert,
    SafeAreaView,
    StatusBar,
    AsyncStorage,
    BackHandler
} from 'react-native'
import Color from '../helper/theme/Color'
import {DisplayAreaView} from '../commonComponent/global';
import {
    FileInfo,
    Footer,
    Header
} from '../commonComponent/Common'
import StudyMaterial from "./StudyMaterial";

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
        isIcon:true,
        uploadFile: false
    };

    constructor(props){
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.getRole()
    }

    getRole = async () => {
        const userRole = await AsyncStorage.getItem("role")

        if(userRole === 'teacher'){
            this.setState({
                uploadFile: true
            })
        }
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.navigate('StudyMaterial');
        return true;
    }

    goBack=()=>{
        this.props.navigation.navigate('StudyMaterial');
    };

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
                    uploadFile={this.state.uploadFile}
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
