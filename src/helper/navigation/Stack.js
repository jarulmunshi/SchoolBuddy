import React from 'react';
import Login from './../../component/signIn';
import Home from './../../helper/navigation/Drawer';
import ChangePassword from './../../component/ChangePassword';
import {createStackNavigator} from 'react-navigation';
import Report from './../../component/Report';
import Timetable from './../../component/Timetable';
import GetStart from './../../component/getStarted';
const stack = createStackNavigator(
    {
        Login:{
            screen:Login
        },
        Home:{
            screen:Home
        },
        ChangePassword:{
            screen:ChangePassword
        }
    },
    {
        initialRouteName:'Login',
        headerMode:'none'
    }
);

export default stack;
