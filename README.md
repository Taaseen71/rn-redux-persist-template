# rn-redux-persist-template
## Step 1: Start your Application:

Install application using the command:
```bash
npx react-native init testApp --template https://github.com/Taaseen71/rn-redux-persist-template.git
```

## Step IMPORTANT: IMPORT FUNCTIONAL IN FLIPPER

open xcode > Pods (Application. not folder) > Flipper > FlipperTransportTypes.jh

```
#include <functional>
```
clean build folder by typing shift+command+K, 

run again

## Step 2: Change the name of the React Native File using the command:

(cd into folder first)

(install react-native-rename if not installed:)
   ```bash
   npm install -g react-native-rename
   ```


```bash
react-native-rename "YourFileName"
```

## Step 3: Install cocoapods: 

```bash
npx pod-install ios/
```

## Step 4: Start File:

```bash
react-native start --reset-cache
```
## Misc: 
To launch XCode
```bash
xed -b ios
```

