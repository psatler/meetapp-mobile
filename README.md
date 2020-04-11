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
- [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)
- [Reactotron](https://github.com/infinitered/reactotron) for debugging
- [Storybook](https://storybook.js.org/)


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

###### Add React Navigation v5

```
yarn add @react-navigation/native

```

###### Add reactotron and its plugins
You can find the docs [here](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md).
```
yarn add -D reactotron-react-native

```
then, we set up our configuration at `./src/config/ReactotronConfig.ts`

and also import the config file at entry file of the project at `src/index.tsx`.

**TIP**: you might need to run `adb reverse tcp:9090 tcp:9090` in order to be able to get the device connected to reactotron.

This project uses Mobx State Tree as its state management tool. So, next, we will install the dependencies needed to hook up all of them with Reactotron.

```
yarn add mobx mobx-react mobx-state-tree
```
Then, as shown [here](https://github.com/infinitered/reactotron/blob/master/docs/plugin-mst.md), we install the plugin for mobx state tree
```
yarn add -D reactotron-mst
```

**SUPPORT FOR STORYBOOK SWITCHER**
Next, we set up the support for [Storybook](https://storybook.js.org/) by following the guide at [https://github.com/infinitered/reactotron/blob/master/docs/plugin-storybook.md](https://github.com/infinitered/reactotron/blob/master/docs/plugin-storybook.md).

In my case, I just exported default the _StorybookUIRoot_ from the `storybook/index.js`. Then, I imported it at the app index, found at `src/index.tsx`. So, in this file, I added the _reactotron switcher_ as a HoC, so, it became:
```
export default console.tron.storybookSwitcher(Storybook)(App);
```
**PS**: Keep in mind that I had Reactotron on console.tron from the `src/config/ReactotronConfig.ts` file.


###### Add root import
Install babel root import:
```
yarn add -D babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import
```
then, in the `babel.config.js` we add the _babel-root-import_ plugin:
```
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // 'babel-plugin-styled-components',
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
};
```
And finally, in the `tsconfig.json` file:
```
  "compilerOptions": {
    ...
    "baseUrl": "./src", // all paths are relative to the baseUrl
    "paths": {
      "~/*": ["*"] // resolve any `~/foo/bar` to `<baseUrl>/foo/bar`
    }
  },
  ...
```

###### Add editorconfig and eslint rules

The project was left with the default ESLint and prettier configs from the typescript template, with some minor tweaks.
The plugin for hooks was added: `yarn add -D eslint-plugin-react-hooks`. Also, adjust some settings in the `.eslintrc.js` file.


Also, a `.editorconfig` file was generated with the following entries:

```c
root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

###### Adding Storybook for React Native with Typescript

```
npx -p @storybook/cli sb init --type react_native

```
- Press yes to the question of installing Storybook server while installing.
- Add the app name to the `index.js` in the _storybook_ folder as this is a _vanilla RN project_.
- `yarn storybook` to run the storybook server. For now, you got to uncomment the import in the `index.js` in the root folder to see the stories.

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
