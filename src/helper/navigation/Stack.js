import React from 'react';
import Login from './../../component/signIn';
import Home from './../../helper/navigation/Drawer';
import Admin from './../../component/Admin';
import {createStackNavigator} from 'react-navigation';
const stack = createStackNavigator(
    {
        Login:{
            screen:Login
        },
        Home:{
            screen:Home
        },
        Admin:{
            screen:Admin
        }
    },
    {
        initialRouteName:'Login',
        headerMode:'none'
    }
);

export default stack;
