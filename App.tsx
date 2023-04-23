/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticationScreen } from './src/screens/AuthenticationScreen';
import { InputOTPScreen } from './src/screens/InputOTPScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { MetamaskScreen } from './src/screens/MetamaskScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Authentication">
        {/* <Stack.Screen name="Authentication" component={AuthenticationScreen} />
        <Stack.Screen name="InputOTP" component={InputOTPScreen} />
        <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Metamask" component={MetamaskScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
