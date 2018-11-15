import React from 'react';
import { Image,Text } from 'react-native';
import SignIn from './../../component/signIn';
import Home from './../../component/Home';
import Color from './../theme/Color';
import {drawerImage} from './../../commonComponent/Common';
import {DrawerNavigator,DrawerItems} from 'react-navigation';
import {WindowsHeight,WindowsWidth} from './../../commonComponent/global';
import ChangePassword from "../../component/ChangePassword";
const Drawer = DrawerNavigator({
     Class:{
            screen:Home
        },
        ChangePassword:{
            screen:ChangePassword
        }
},
    {
    drawerWidth: WindowsWidth * 0.7,
    contentComponent:drawerImage,
    contentOptions: {
        activeTintColor: 'black',
        activeBackgroundColor : 'transparent',
        inactiveTintColor : 'black',
        itemsContainerStyle: {
            marginVertical: 0,
        },
        iconContainerStyle: {
            opacity: 1,
        },
        itemStyle :{
            height : 50,
        }
    }
});

export default Drawer;
