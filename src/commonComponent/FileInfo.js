import React from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import Color from './../helper/theme/Color';
import {Card, CardSection} from './Common'
import {WindowsWidth,MyriadFont} from './global'

const FileInfo = (props) => {
    const {head, date, color} =props.classInfo;

    return(
        <Card>
            <CardSection>
                <View style={[styles.colorView, {backgroundColor: color}]}></View>
                <View style={{justifyContent:'center',marginLeft:5}}>
                    <Image style={styles.imageContainer1} source={require('../images/pdf.png')}/>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.classContainer}>{head}</Text>
                    <Text style={styles.divisonContainer}> {date}</Text>
                </View>
                <View style={styles.additionalInfoContainer}>
                    <View style={{ justifyContent: 'space-between'}}>
                        <View style={{alignItems:'center',marginRight: 10}}>
                            <View style={{flexDirection: 'row'}}>
                                <Image style={styles.imageContainer} source={require('../images/delete.png')}/>
                                <Image style={styles.imageContainer} source={require('../images/download.png')}/>
                            </View>
                        </View>
                    </View>
                </View>
            </CardSection>
        </Card>
    )
};

const styles = {
    colorView: {
        width: 3,
    },
    infoContainer: {
        padding: 15,
        width: WindowsWidth * 60 /100
    },
    additionalInfoContainer: {
        padding: 15,
        width: WindowsWidth * 40 /100
    },
    standardContainer: {
        color: 'rgb(7, 7, 7)',
        fontSize: 30,
        width: WindowsWidth * 75 /100,
        fontFamily: MyriadFont
    },
    nameContainer: {
        color: Color.drawerTextColor,
        fontSize: 24,
        marginTop: 5,
        fontFamily: MyriadFont
    },
    classContainer: {
        color: 'rgb(7,7,7)',
        fontSize: 20,
        marginTop: 5,
        fontFamily: MyriadFont
    },
    divisonContainer: {
        color: 'rgb(104, 102, 102)',
        fontSize: 15,
        marginTop: 5,
        fontFamily: MyriadFont
    },
    countContainer: {
        color: 'rgb(195,206,233)',
        fontSize: 25
    },
    totalCountContainer: {
        fontSize: 12,
        color: 'rgb(117,118,118)',
        marginTop: 5,
        fontFamily: MyriadFont
    },
    imageContainer: {
        width: 20,
        height: 20,
        margin: 5
    },
    imageContainer1: {
        width: 25,
        height: 35,
        margin: 5
    }
};

export {FileInfo}
