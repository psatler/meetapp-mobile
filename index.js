/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
// import App from './storybook'; //  to see the storybook
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
