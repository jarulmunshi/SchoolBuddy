import {Dimensions, Platform} from 'react-native';

module.exports = {
    WindowsWidth: Dimensions.get('window').width,
    WindowsHeight: Dimensions.get('window').height,
    LatoFont: Platform.OS === 'ios'? 'Lato' : 'Lato_Regular',
    MyriadFont: Platform.OS === 'ios'? 'Myriad Pro' : 'MyriadPro_Regular',
};
