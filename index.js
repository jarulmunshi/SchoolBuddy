/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Drawer from './src/helper/navigation/Drawer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Drawer);
