import React, {Component} from 'react'
import {
    View,
    SafeAreaView,
    Text,
    ScrollView,
    Image, Platform
} from 'react-native'
import Accordion from 'react-native-collapsible/Accordion';

import Color from '../helper/theme/Color'
import {WindowsHeight,WindowsWidth} from '../commonComponent/global';
import {Header, Footer, TimeTableList, Card, CardSection} from '../commonComponent/Common'

const SECTIONS = [
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    }
];

export default class TimeTable extends Component{
    state = {
        iName:"bars",
        isBack:true,
        active: [],
        collapsed: false,
        timeTable: [
            {
                "id": 1,
                "day": "MONDAY",
                "schedule": [
                    {
                        "startTime": "10:00",
                        "endTime": "10:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "10:30",
                        "endTime": "11:00",
                        "subject": "SCIENCE",
                        "teacherName": "ABC",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "11:00",
                        "endTime": "11:30",
                        "subject": "ENGLISH",
                        "teacherName": "DEF",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "11:30",
                        "endTime": "12:00",
                        "subject": "COMPUTER",
                        "teacherName": "GHI",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "12:00",
                        "endTime": "12:30",
                        "subject": "PT",
                        "teacherName": "GHI",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "12:30",
                        "endTime": "01:00",
                        "subject": "PHYSICS",
                        "teacherName": "JKL",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "01:00",
                        "endTime": "01:30",
                        "subject": "HINDI",
                        "teacherName": "MNO",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "01:30",
                        "endTime": "02:00",
                        "subject": "SS",
                        "teacherName": "PQR",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                ],
                "color": 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')'
            },
            {
                "id": 2,
                "day": "TUESDAY",
                "schedule": [
                    {
                        "startTime": "10:00",
                        "endTime": "10:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "10:30",
                        "endTime": "11:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "11:00",
                        "endTime": "11:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "11:30",
                        "endTime": "12:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "12:00",
                        "endTime": "12:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "12:30",
                        "endTime": "01:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "01:00",
                        "endTime": "01:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "01:30",
                        "endTime": "02:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                ],
                "color": 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')'
            },
            {
                "id": 3,
                "day": "WEDNESDAY",
                "schedule": [
                    {
                        "startTime": "10:00",
                        "endTime": "10:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "10:30",
                        "endTime": "11:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "11:00",
                        "endTime": "11:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "11:30",
                        "endTime": "12:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "12:00",
                        "endTime": "12:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "12:30",
                        "endTime": "01:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "01:00",
                        "endTime": "01:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "01:30",
                        "endTime": "02:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                ],
                "color": 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')'
            },
            {
                "id": 4,
                "day": "THURSDAY",
                "schedule": [
                    {
                        "startTime": "10:00",
                        "endTime": "10:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "10:30",
                        "endTime": "11:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "11:00",
                        "endTime": "11:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "11:30",
                        "endTime": "12:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "12:00",
                        "endTime": "12:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "12:30",
                        "endTime": "01:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "01:00",
                        "endTime": "01:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "01:30",
                        "endTime": "02:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                ],
                "color": 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')'
            },
            {
                "id": 5,
                "day": "FRIDAY",
                "schedule": [
                    {
                        "startTime": "10:00",
                        "endTime": "10:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "10:30",
                        "endTime": "11:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "11:00",
                        "endTime": "11:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "11:30",
                        "endTime": "12:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "12:00",
                        "endTime": "12:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "12:30",
                        "endTime": "01:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "01:00",
                        "endTime": "01:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "01:30",
                        "endTime": "02:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                ],
                "color": 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')'
            },
            {
                "id": 6,
                "day": "SATURDAY",
                "schedule": [
                    {
                        "startTime": "10:00",
                        "endTime": "10:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "10:30",
                        "endTime": "11:00",
                        "subject": "MATHS",
                        "teacherName": "AMW","color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',

                    },
                    {
                        "startTime": "11:00",
                        "endTime": "11:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "11:30",
                        "endTime": "12:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "12:00",
                        "endTime": "12:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "12:30",
                        "endTime": "01:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "01:00",
                        "endTime": "01:30",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                    {
                        "startTime": "01:30",
                        "endTime": "02:00",
                        "subject": "MATHS",
                        "teacherName": "AMW",
                        "color": 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+', 0.15)',
                    },
                ],
                "color": 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')'
            }
        ]
    }

    goBack=()=>{
        this.props.navigation.openDrawer();
    };

    _renderHeader = timeTable => {
        return (
            <Card>
                <CardSection>
                    <View style={[styles.colorView, {backgroundColor: timeTable.color}]}></View>

                    <View style={styles.header}>
                        <Text style={styles.headerText}>{timeTable.day}</Text>
                        <Image source={timeTable.id-1 === this.state.active[0] ?require('../images/up.png') : require('../images/down.png')}/>
                    </View>
                </CardSection>
            </Card>
        );
    };

    _renderContent = timeTable => {
        return timeTable.schedule.map(data =>
            <TimeTableList timeTable={data}/>
        )
    };

    _updateSections = active => {
        debugger
        this.setState({ active });
    };

    render(){
        debugger
        return(
            <SafeAreaView style={styles.parentContainer}>
                <Header
                    headerText={"Time Table"}
                    iName={this.state.iName}
                    isBack={this.state.isBack}
                    onBackButtonPress={this.goBack}
                />

                <View style={{marginTop: 5, height: WindowsHeight - (WindowsHeight * 0.222)}}>
                    <ScrollView>
                        <Accordion
                            sections={this.state.timeTable}
                            activeSections={this.state.active}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                            onChange={this._updateSections}
                            underlayColor={'#FFF'}
                        />
                    </ScrollView>
                </View>

                <Footer/>
            </SafeAreaView>
        )
    }
}

const styles = {
    parentContainer: {
        flex: 1,
    },
    textStyle: {
        fontSize: 22,
        marginLeft: 5,
        color: Color.extraDark
    },
    header: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: WindowsWidth
    },
    headerText:{
        color: '#E25C00',
        fontSize: 26,
    },
    colorView: {
        width: Platform.OS === 'ios'? 2 : 4,
    },
}