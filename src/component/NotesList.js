import React, {Component} from 'react';

import {Calendar} from 'react-native-calendars';
import {View, StyleSheet,SectionList,Text, SafeAreaView} from 'react-native';
import {
    Footer,
    Header,
    Card,
    CardSection
} from '../commonComponent/Common'
import moment from 'moment';
import _ from 'lodash';
import {DisplayAreaView, MyriadFont, WindowsWidth} from "../commonComponent/global";

export default class NotesList extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        classList: [
            {
                "standard": "11th",
                "className": "If you are using lodash,",
                "sname":"If you need the keys to be numbers, you could map the result to a new array with a callback function that replaces the key in each pair with a number coerced from it.",
                "timing": "10:00",
                "color":"red",
                "date":"2018-11-21"
            },
            {
                "standard": "12th",
                "className": "If you are using lodash,",
                "sname":"If you need the keys to be numbers, you could map the result to a new array with a callback function that replaces the key in each pair with a number coerced from it.",
                "timing": "10:30",
                "color":"green",
                "date":"2018-11-21"
            },
            {
                "standard": "10th",
                "className": "If you are using lodash,",
                "sname":"If you need the keys to be numbers, you could map the result to a new array with a callback function that replaces the key in each pair with a number coerced from it.",
                "timing": "11:10",
                "color":"blue",
                "date":"2018-11-22"
            },
            {
                "standard": "08th",
                "className": "If you are using lodash,",
                "sname":"If you need the keys to be numbers, you could map the result to a new array with a callback function that replaces the key in each pair with a number coerced from it.",
                "timing": "11:40",
                "color":"pink",
                "date":"2018-11-22"

            },
            {
                "standard": "09th",
                "className": "If you are using lodash,",
                "sname":"If you need the keys to be numbers, you could map the result to a new array with a callback function that replaces the key in each pair with a number coerced from it.",
                "timing": "12:10",
                "color":"grey",
                "date":"2018-11-23"

            },
            {
                "standard": "11th",
                "className": "If you are using lodash,",
                "sname":"If you need the keys to be numbers, you could map the result to a new array with a callback function that replaces the key in each pair with a number coerced from it.",
                "timing": "01:00",
                "color":"red",
                "date":"2018-11-24"

            },
        ],
        dataList:[],
        allData:[],
        date:moment().format('YYYY-MM-DD'),
        markDates:{},
        iName: 'bars',
        isBack: true
    };
    componentDidMount() {
        const data=_.groupBy(this.state.classList,'date');
        const obj=[],mtemp=[];
        const notList=Object.values(data);
        const dates=Object.keys(data);
        let dateObj={};
        dates.map((item)=>{
            dateObj[item]={selected: false,marked: true, dotColor: 'green'}
        })
        dateObj[moment().format('YYYY-MM-DD')]={selected: true,marked: true, dotColor: 'green'}
        notList.map((items)=>{
            obj.push({
                title:items[0].date,
                data:items
            })
        })

        const temp = _.find(obj,{'title':this.state.date})
        mtemp.push({
            title:Object.values(temp)[0],
            data:Object.values(temp)[1]
        })
        this.setState({dataList:mtemp,allData:obj,markDates:dateObj})
    }

    renderItem = (item) => {
        const {standard, sname, color , timing , className, date} =item;

        return(
            <Card>
                <CardSection>
                    <View style={[styles.colorView, {backgroundColor: color}]}/>

                    <View style={styles.infoContainer}>
                        <Text style={styles.standadContainer}>{className}</Text>
                        <Text style={{fontFamily: MyriadFont,color:'#707070' }}>{sname}</Text>
                        <Text style={styles.dateText}>{moment(date).format('DD MMM YYYY')}</Text>
                    </View>


                </CardSection>
            </Card>
        )
    }

    dateByData(date) {
        if (date in this.state.markDates) {
            let dateObj = {};
            if (date in this.state.markDates) {
                const data = _.groupBy(this.state.classList, 'date');
                const dates = Object.keys(data);

                dates.map((item) => {
                    dateObj[item] = {selected: false, marked: true, dotColor: 'green'}
                })
                dateObj[date] = {selected: true, marked: true, dotColor: 'green'}
            }
            let mtemp = [];
            const temp = _.find(this.state.allData, {'title': date})
            mtemp.push({
                title: Object.values(temp)[0],
                data: Object.values(temp)[1]
            })
            this.setState({dataList: mtemp, date: moment(date).format('YYYY-MM-DD'), markDates: dateObj})
        }else{
            let dateObj = {};
            const data = _.groupBy(this.state.classList, 'date');
            const dates = Object.keys(data);

            dates.map((item) => {
                dateObj[item] = {selected: false, marked: true, dotColor: 'green'}

            })
            dateObj[date] = {selected: true, marked: false, dotColor: 'green'}
            console.log(dateObj)
            this.setState({ dataList: [], markDates: dateObj})
        }
    }
    renderEmptySection = () =>{
        return(
            <Card>
                <CardSection>
                    <View style={[styles.colorView, {backgroundColor: 'red'}]}/>

                    <View style={styles.infoContainer}>
                        <Text style={styles.standardContainer}>No Note Available</Text>
                    </View>
                </CardSection>
            </Card>
        )
    }

    goBack=()=>{
        this.props.navigation.openDrawer();
    };

    render() {
        const date=moment().format('YYYY-MM-DD');
        return (
            <SafeAreaView style={styles.parentContainer}>
                <Header
                    headerText={"School Buddy"}
                    iName={this.state.iName}
                    isBack={this.state.isBack}
                    onBackButtonPress={this.goBack}
                />
                    <View style={{marginTop:5,height: DisplayAreaView}}>
                        <Calendar
                            style={styles.calendar}
                            current={this.state.date}
                            firstDay={1}
                            markedDates={this.state.markDates}
                            onDayPress={(day) => {
                              console.log(day)
                                this.dateByData(day.dateString)
                            }}

                        />
                        {this.state.dataList.length === 0 ?
                            this.renderEmptySection()
                            :
                            <SectionList
                                renderItem={({ item, index, section }) => this.renderItem(item)}
                                sections={this.state.dataList}
                            />
                        }

                    </View>

                <Footer/>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    colorView: {
        width: 2,
    },
    infoContainer: {
        padding: 10,
        width: WindowsWidth
    },
    additionalInfoContainer: {
        padding: 10,
        width: WindowsWidth * 45 /100
    },
    standadContainer: {
        color: 'rgb(7, 7, 7)',
        fontSize: 20,
        width: WindowsWidth ,
        fontFamily: MyriadFont
    },

    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350,
    },
    text: {
        textAlign: 'center',
        borderColor: '#bbb',
        padding: 10,
        backgroundColor: '#eee',
        fontFamily: MyriadFont

    },
    dateText: {
        textAlign: 'right',
        fontFamily: MyriadFont

    },
    container: {
        flex: 1,
        backgroundColor: 'gray'
    }
});