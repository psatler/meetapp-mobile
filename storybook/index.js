// import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import { name as appName } from '../app.json';

import './rn-addons';

// const darkTheme = {
//   backgroundColor: 'gray',
//   headerTextColor: 'white',
//   labelColor: 'white',
//   borderColor: 'white',
//   previewBorderColor: 'gray',
//   buttonTextColor: 'white',
//   buttonActiveTextColor: 'white',
// };

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  port: 7007,
  host: 'localhost',
  onDeviceUI: true,
  // theme: darkTheme,
  asyncStorage: AsyncStorage,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
// AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
