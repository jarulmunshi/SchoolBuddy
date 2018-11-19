import React from 'react'
import {
    Text,
    View,
    Platform,
    Switch
} from 'react-native'
//import Switch from 'react-native-customisable-switch';

import {Card, CardSection} from './Common'
import {MyriadFont,WindowsWidth} from './global'

const AttendanceList = (props) => {
    const {id, rollNo, name, present, color} =props.notesInfo

    return(
        <Card>
            <CardSection>
                <View style={[styles.colorView, {backgroundColor: color}]}></View>

                <View style={styles.listContainerStyle}>
                    <Text style={[styles.nameStyle, {width: WindowsWidth*0.1, padding: 10,}]}>{rollNo}</Text>

                    <View style={styles.dataRow}>
                        <Text style={styles.nameStyle}>{name}</Text>
                        {/*<Switch
                            defaultValue={present}
                            activeText={'P'}
                            inactiveText={'A'}
                            activeTextColor={'#FFF'}
                            inactiveTextColor={'#FFF'}
                            activeBackgroundColor={'#F00'}
                            inactiveBackgroundColor={'#0F0'}
                        />*/}
                        <Switch
                            value={present}
                            onValueChange={() => props.toggleAttendance(id-1, present)}
                        />
                    </View>
                </View>

            </CardSection>
        </Card>
    )
}

const styles = {
    colorView: {
        width: Platform.OS === 'ios'? 2 : 4,
    },
    dataRow: {
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: WindowsWidth * 0.9
    },
    listContainerStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: WindowsWidth
    },
    nameStyle: {
        color: '#000',
        fontSize: 22,
        fontFamily: MyriadFont,
        marginTop: 5
    },
}

export {AttendanceList}