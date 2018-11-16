import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

import {WindowsWidth} from './global'
import {Card, CardSection} from './Common'

const News = (props) => {
    const {title} = props

    return(
        <View>
            <Card>
                <CardSection>
                    <View>
                        <Text style={[styles.headingStyle, {marginTop: 15}]}>{title}</Text>
                        <View style={styles.newsContainer}>
                            <Text style={styles.newsTextStyle}>{"LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TESTING INDUSTRY. LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TESTING INDUSTRY. LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TESTING INDUSTRY."}</Text>
                        </View>
                    </View>
                </CardSection>
            </Card>
            <Card>
                <CardSection>
                    <View>
                        <Text style={[styles.headingStyle, {marginTop: 15}]}>{title}</Text>
                        <View style={styles.newsContainer}>
                            <Text style={styles.newsTextStyle}>{"LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TESTING INDUSTRY. LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TESTING INDUSTRY. LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TESTING INDUSTRY."}</Text>
                        </View>
                    </View>
                </CardSection>
            </Card>
        </View>
    )
}

const styles = {
    headingStyle: {
        marginLeft: 10
    },
    newsContainer: {
        height: 200,
        width: WindowsWidth - 10,
        margin: 5,
        backgroundColor: 'rgb(229,232,232)',
        justifyContent: 'center'
    },
    newsTextStyle: {
        marginLeft: 10,
        marginRight: 10,
        color: 'rgb(86,85,85)'
    },
}

export {News}