import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    TextInput
} from 'react-native'

import {WindowsHeight, WindowsWidth, MyriadFont} from '../commonComponent/global';
import {Input, Button} from './Common'

const AddNote = (props) => {
    return(
        <TouchableOpacity  style={{height:WindowsHeight,width:WindowsWidth,backgroundColor:'rgba(0,0,0,0.5)',position:'absolute',justifyContent:'center',alignItems:'center'}} onPress={props.toggle}>
            <View style={styles.viewContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.textStyle}>{props.heading}</Text>
                </View>
                <View style={{margin: 10}}>
                    <Input
                        borderWidth={1}
                        placeholder={'Title'}
                        placeholderTextColor={'rgb(119,119,119)'}
                        color={'rgb(119,119,119)'}
                        onChange={(value) => props.title(value)}
                    />

                    <Input
                        multiline={true}
                        borderWidth={1}
                        placeholder={'Details'}
                        placeholderTextColor={'rgb(119,119,119)'}
                        color={'rgb(119,119,119)'}
                        height={150}
                        onChange={(value) => props.description(value)}
                    />

                    <Button style={{marginLeft: 2, marginTop: 10}} onPress={() => props.newNote(props.titleValue, props.descriptionValue)}>SUBMIT</Button>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = {
    viewContainer: {
        width:WindowsWidth-50,
        marginLeft: 25,
        marginRight: 25,
        backgroundColor: 'rgb(217,217,217)'
    },
    headingContainer: {
        height: 30,
        backgroundColor: 'rgb(51,51,51)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: '#FFF',
        fontSize: 22,
        marginTop: 5,
        fontFamily: MyriadFont
    }
}

export {AddNote}