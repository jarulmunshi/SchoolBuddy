import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Alert,
    Image,
    SafeAreaView
} from 'react-native'
import FAB from 'react-native-fab'

import {WindowsHeight, WindowsWidth} from '../commonComponent/global';
import {Header, Footer, CustomMenu, CalendarView, ClassNotesInfo, AddNote, AttendanceList} from '../commonComponent/Common'
import Color from '../helper/theme/Color'

export default class ManageClass extends Component{
    state = {
        active: 'Attendance',
        isBack:true,
        iName:"bars",
        notesList: [
            {
                'id': 1,
                'title':'Last date of Exam form 23 nov 2018',
                'description':'Loream Ipsum is simply dummy text of the printing and testing industry. Loream Ipsum is simply dummy text of the printing and testing industry.',
                'createdDate':'12 Nov 2018',
                'color':'red'
            },
            {
                'id': 2,
                'title':'Last date of Exam form 23 nov 2018',
                'description':'Loream Ipsum is simply dummy text of the printing and testing industry. Loream Ipsum is simply dummy text of the printing and testing industry.',
                'createdDate':'12 Nov 2018',
                'color':'blue'
            },
            {
                'id': 3,
                'title':'Last date of Exam form 23 nov 2018',
                'description':'Loream Ipsum is simply dummy text of the printing and testing industry. Loream Ipsum is simply dummy text of the printing and testing industry.',
                'createdDate':'12 Nov 2018',
                'color':'green'
            }
        ],
        showCalendar: false,
        showAddNote: false,
        attendanceList: [
            {
                "id":1,
                "rollNo":1,
                "name":"VIJAY PATEL",
                "present":true,
                "color": "red",
            },
            {
                "id":2,
                "rollNo":2,
                "name":"PARTH PATEL",
                "present":true,
                "color": "green",
            },
            {
                "id":3,
                "rollNo":3,
                "name":"KESHAV SHAH",
                "present":false,
                "color": "yellow",
            },
            {
                "id":4,
                "rollNo":4,
                "name":"ADITI SHARMA",
                "present":true,
                "color": "pink",
            },
            {
                "id":5,
                "rollNo":5,
                "name":"RADHIKA JAIN",
                "present":false,
                "color": "blue",
            },
            {
                "id":6,
                "rollNo":6,
                "name":"JINAL JAIN",
                "present":true,
                "color": "purple",
            },
            {
                "id":7,
                "rollNo":7,
                "name":"SWEETY SINGH",
                "present":true,
                "color": "golden",
            },
        ],
        title: '',
        description: '',
    }

    changeActiveState(value){
        this.setState({
            active: value
        })
    }

    hideCalendar(){
        this.setState({
            showCalendar: false
        })
    }

    hideAddNote(){
        this.setState({
            showAddNote: false
        })
    }

    toggleSwitch(id, value){
        let newState = Object.assign({}, this.state);
        newState.attendanceList[id].present = !value;
        this.setState(newState);
    }

    renderClassNotes(){
        return this.state.notesList.map(notes =>
            <ClassNotesInfo key={notes.id} notesInfo={notes}/>
        )
    }

    renderAttendanceList(){
        return this.state.attendanceList.map(attendance =>
            <AttendanceList key={attendance.id} notesInfo={attendance} toggleAttendance={(id, value) => this.toggleSwitch(id, value)}/>
        )
    }

    addNote(title, description){
        let newState = Object.assign({}, this.state);
        let newNote = {
            'id': 8,
            'title': title,
            'description': description,
            'createdDate': '12 NOV 2018',
            'color': 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')'
            //'#'+(Math.random()*0xFFFFFF<<0).toString(16) generating random color

        }
        newState.notesList.push(newNote)
        this.setState(newState);
        this.setState({showAddNote: false})
    }

    changeTitle(value){
        this.setState({
            title: value
        })
    }

    changeDescription(value){
        this.setState({
            description: value
        })
    }

    goBack=()=>{
        this.props.navigation.openDrawer();
    };

    render(){
        return(
            <SafeAreaView style={styles.parentContainer}>
                <Header
                    headerText={"Manage Class"}
                    iName={this.state.iName}
                    isBack={this.state.isBack}
                    onBackButtonPress={this.goBack}
                />

                <View style={{marginTop: 5, height: WindowsHeight - (WindowsHeight * 0.222)}}>

                    <CustomMenu
                        menus={["Attendance", "Class Notes"]}
                        active={this.state.active}
                        activeChange={(value) => this.changeActiveState(value)}
                    />

                    {
                        (this.state.active === 'Attendance') &&
                            <View style={{flex: 1}}>
                                <View style={styles.attendanceContainer}>
                                    <TouchableOpacity onPress={() => this.setState({showCalendar: true})}>
                                        <View style={{flexDirection: 'row', width: WindowsWidth/3,}}>
                                            <Image
                                                source={require('../images/calendar.png')}
                                                style={styles.imageStyle}
                                            />
                                            <Text style={[styles.textStyle, {marginRight: 5}]}>{'11 NOV 2018'}</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <View style={{flexDirection: 'row', width: WindowsWidth/3, justifyContent: 'center'}}>
                                        <Text style={[styles.textStyle, {color: 'rgb(109,109,109)', fontSize: 20}]}>{'PRESENT'}</Text>
                                        <View style={[styles.CircleShapeView, {backgroundColor: '#79AF1B'}]}>
                                            <Text style={{color:'#FFF', fontSize: 14}}>{10}</Text>
                                        </View>
                                    </View>

                                    <View style={{flexDirection: 'row', width: WindowsWidth/3, justifyContent: 'center'}}>
                                        <Text style={[styles.textStyle, {color: 'rgb(109,109,109)', fontSize: 20}]}>{'ABSENT'}</Text>
                                        <View style={[styles.CircleShapeView, {backgroundColor: '#AC0119'}]}>
                                            <Text style={{color:'#FFF', fontSize: 14}}>{5}</Text>
                                        </View>
                                    </View>
                                </View>
                                <ScrollView style={{marginTop: 10}}>
                                    {this.renderAttendanceList()}
                                </ScrollView>
                            </View>
                    }

                    {
                        (this.state.active === 'Class Notes') &&
                            <View style={{flex: 1}}>
                                <ScrollView>
                                    {this.renderClassNotes()}
                                </ScrollView>
                                <FAB buttonColor="rgb(2,110,115)" onClickAction={() => this.setState({showAddNote: true})}/>
                            </View>

                    }

                </View>

                {
                    (this.state.showCalendar) &&
                    <CalendarView
                        toggle={() => this.hideCalendar()}
                    />
                }

                {
                    (this.state.showAddNote) &&
                    <AddNote
                        toggle={() => this.hideAddNote()}
                        newNote={(title,description) => this.addNote(title, description)}
                        title={(value) => this.changeTitle(value)}
                        titleValue={this.state.title}
                        description={(value) => this.changeDescription(value)}
                        descriptionValue={this.state.description}
                        heading={'Add Notes'}
                    />
                }

                <Footer/>
            </SafeAreaView>
        )
    }
}

const styles = {
    parentContainer: {
        flex: 1,
    },
    attendanceContainer: {
        marginTop: 5,
        height: 50,
        backgroundColor: 'rgb(241,241,241)',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        width: WindowsWidth
    },
    imageStyle: {
        height: 25,
        width: 25
    },
    textStyle: {
        fontSize: 18,
        marginLeft: 5,
        color: Color.extraDark,
    },
    CircleShapeView: {
        width: 20,
        height: 20,
        borderRadius: 20/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
}