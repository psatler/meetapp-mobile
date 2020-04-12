<p align="center">
  <img alt="Repository Last Commit Date" src="https://img.shields.io/github/last-commit/psatler/meetapp-mobile?color=blue">

  <a href="https://www.linkedin.com/in/pablosatler/">
    <img alt="Made by Pablo Satler" src="https://img.shields.io/badge/made%20by-Pablo%20Satler-blue">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/psatler/meetapp-frontend?color=blue">

</p>

# Meetapp Mobile

> Mobile Frontend (in React Native) of the [meetapp backend app](https://github.com/psatler/meetapp-backend)

### Running the app via USB

**DISCLAIMER**: This was tested on an Android device only.

You got to have your phone with `Developer Options` enabled first.

To actually run the application on the phone:

```
npx react-native run-android
npx react-native start
```

You can check if the Android phone is connected by running:

```
adb devices
```

You can install Reactotron and use it to switch between the App screen and Storybook screens.

### Dependencies used

- [React Navigation v5](https://reactnavigation.org/)
- [Axios](https://github.com/axios/axios)
- [Date FNS](https://github.com/date-fns/date-fns)
- [Typesafe Actions](https://github.com/piotrwitek/typesafe-actions)
- [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)
- [Reactotron](https://github.com/infinitered/reactotron) for debugging
- [Redux Persist](https://github.com/rt2zz/redux-persist) for persisting the store info
- [Async Store](https://github.com/react-native-community/async-storage)
- [Storybook](https://storybook.js.org/)


### Acknowledments

Some acknowledments from this app such how to set up its configuration can be found at the [Acknowledments](https://github.com/psatler/meetapp-mobile/blob/master/Acknowledments.md) page.


### License

This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT) © Pablo Satler 2020

<!-- ### Table of Contents

- [How to Run](#how-to-run)

  - [Features](#features)

- [Screens of the app](#screens-of-the-app)

  - [Authentication](#authentication)
  - [Registration](#registration)
  - [Dashboard](#dashboard)
  - [Details](#details)
  - [New / Edit](#new--edit)
  - [Profile](#profile)

- [Some dependecies used](#some-dependecies-used)
- [Acknowledgements](#acknowledgements)
- [License](#license) -->
