/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

type ParamList = {
  ScreenOne: undefined;
  ScreenTwo: undefined;
};

type ScreenProps = NativeStackScreenProps<ParamList, 'ScreenOne'>;

const Stack = createNativeStackNavigator<ParamList>();

function ScreenOne() {
  const {navigate} = useNavigation<ScreenProps['navigation']>();

  return (
    <View>
      <Text>Screen One</Text>
      <Button title="Go to Screen Two" onPress={() => navigate('ScreenTwo')} />
    </View>
  );
}

function ScreenTwo() {
  return (
    <View>
      <Text>Screen Two</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
