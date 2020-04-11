# Acknowledments
> Some notes learned from this app


### Creating the application with React Native and Typescript enabled
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

### Add React Navigation v5

```
yarn add @react-navigation/native

```

### Add reactotron and its plugins
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


### Add root import
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

### Add editorconfig and eslint rules

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

### Adding Storybook for React Native with Typescript

```
npx -p @storybook/cli sb init --type react_native

```
- Press yes to the question of installing Storybook server while installing.
- Add the app name to the `index.js` in the _storybook_ folder as this is a _vanilla RN project_.
- `yarn storybook` to run the storybook server. For now, you got to uncomment the import in the `index.js` in the root folder to see the stories.


### Create the app icon, change its name, etc

Paste the app icon design at [https://appicon.co/#app-icon](https://appicon.co/#app-icon) website and dowloaded the generated app icons.

##### Android

- Changing the name: Go to `android/app/src/main/res/values/strings.xml` and change the name.
- Setting app the icons:
  - Go to [Ape Tools](https://apetools.webprofusion.com/#/) website. Select a png image 1024x1024 and choose android and ios. Then download the zip.
  - Delete the mimap folders and paste the _drawable_ ones to the `android/app/src/main/res`.
  - Then, at the `android/app/src/main/AndroidManifest.xml` change the android:icon
  ```
      ...
      android:icon="@drawable/icon"
      android:roundIcon="@drawable/icon"
    ...
  ```


  -

- For _android_: Go to the `android/app/src/main/res` directory and
