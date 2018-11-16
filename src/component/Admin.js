import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native'
import FAB from 'react-native-fab'

import Color from '../helper/theme/Color'
import {WindowsHeight,WindowsWidth} from '../commonComponent/global';
import {AdminMenu, ClassInfoList, Footer, TeacherInfoList, CommunityInfo} from '../commonComponent/Common'

export default class Admin extends Component{

    state = {
        active: 'Class',
        classList: [
            {
                "standard": "11th",
                "name":"JORDAN ALEX",
                "totalStudent": 54,
                "color":"red"
            },
            {
                "standard": "12th",
                "name":"JORDAN ALEX",
                "totalStudent": 54,
                "color":"green"
            },
            {
                "standard": "10th",
                "name":"JORDAN ALEX",
                "totalStudent": 54,
                "color":"blue"
            },
            {
                "standard": "8th",
                "name":"JORDAN ALEX",
                "totalStudent": 54,
                "color":"pink"
            },
            {
                "standard": "9th",
                "name":"JORDAN ALEX",
                "totalStudent": 54,
                "color":"grey"
            },
        ],
        teacherList: [
            {
                "teacherName": "TAIMUR KHAN",
                "subjects":"MATHS, SCIENCE",
                "mobileNo": "+91 9890768978",
                "email":"ABC@GMAIL.COM",
                "color":"red"
            },
            {
                "teacherName": "GOPI PATEL",
                "subjects":"SOCIAL SCIENCE, PHYSICS",
                "mobileNo": "+91 9890768978",
                "email":"ABC@GMAIL.COM",
                "color":"green"
            },
            {
                "teacherName": "AXAY MISHRA",
                "subjects":"MATHS, PHYSICS",
                "mobileNo": "+91 9890768978",
                "email":"ABC@GMAIL.COM",
                "color":"blue"
            },
            {
                "teacherName": "RACHANA PATEL",
                "subjects":"ENGLISH, SPORTS",
                "mobileNo": "+91 9890768978",
                "email":"ABC@GMAIL.COM",
                "color":"pink"
            },
            {
                "teacherName": "RUTA ZALA",
                "subjects":"HINDI, MATHS",
                "mobileNo": "+91 9890768978",
                "email":"ABC@GMAIL.COM",
                "color":"grey"
            }
        ],
        communityData: [
            {
                "type":"news",
                "title":"NEWS",
                "content": "LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TESTING INDUSTRY. LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TESTING INDUSTRY. LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TESTING INDUSTRY."
            },
            {
                "type":"news",
                "title":"NEWS",
                "content": "LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TESTING INDUSTRY. LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TESTING INDUSTRY. LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TESTING INDUSTRY."
            },
            {
                "type":"slider",
                "title":"SPORTS FECTIVAL",
                "content": "LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TESTING INDUSTRY. LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TESTING INDUSTRY. LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TESTING INDUSTRY."
            }
        ]
    }

    changeActiveState(value){
        this.setState({
            active: value
        })
    }

    renderClassInfo(){
        return this.state.classList.map(classInfo =>
            <ClassInfoList key={classInfo.standard} classInfo={classInfo} />
        )
    }

    renderTeacherInfo(){
        return this.state.teacherList.map(teacherInfo =>
            <TeacherInfoList key={teacherInfo.teacherName} teacherInfo={teacherInfo} />
        )
    }

    render(){
        return(
            <View style={styles.parentContainer}>

                <View style={{marginTop: 20, height: WindowsHeight - (WindowsHeight * 0.16)}}>

                    <AdminMenu
                        menus={["Class", "Teacher", "Community"]}
                        active={this.state.active}
                        activeChange={(value) => this.changeActiveState(value)}
                    />

                    {
                        (this.state.active === 'Class') &&
                            <ScrollView>
                                {this.renderClassInfo()}
                            </ScrollView>
                    }

                    {
                        (this.state.active === 'Teacher') &&
                        <ScrollView>
                            {this.renderTeacherInfo()}
                        </ScrollView>
                    }

                    {
                        (this.state.active === 'Community') &&
                        <ScrollView>
                            <CommunityInfo/>
                        </ScrollView>
                    }


                    <FAB buttonColor="rgb(2,110,115)" onClickAction={() => console.log("FAB clicked")}/>
                </View>

                <Footer/>
            </View>
        )
    }
}

const styles ={
    parentContainer: {
        flex: 1,
    },
}