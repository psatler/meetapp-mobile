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
react-native start
```

You can check if the Android phone is connected by running:

```
adb devices
```

### Acknowledments

To create the basis of this project with Typescript the following command was used:
```
npx --ignore-existing react-native init meetapp_mobile --template react-native-template-typescript
```
When not being able to start a brand new typescript project, run with the `--ignore-existing` flag. This is further explained [here](https://github.com/react-native-community/react-native-template-typescript/issues/80).
Though, to definitely fix this, uninstall the old react native CLi and install the new one `@react-native-community/cli`:
```
npm uninstall -g react-native-cli
npm install -g @react-native-community/cli
```
After that, you would be able to start a brand new project without using the flag.

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
