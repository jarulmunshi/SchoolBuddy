import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

import {Slider, News} from './Common'

const CommunityInfo = (props) => {
    return(
        <View>
            <Slider title={'SPORTS FESTIVAL'}/>

            <News title={'NEWS'}/>
        </View>
    )
}

export {CommunityInfo}