/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React from 'react';
import {Text, View, Button} from 'react-native';
import { StackActions, NavigationActions, NavigationScreenProp } from "react-navigation"; 

interface HomeScreenProps {
  navigation: NavigationScreenProp<any,any>
};

export default class HomeScreen extends React.Component<HomeScreenProps, null> {

  static navigationOptions = {
    title: 'Home',
  };
  
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
        />
      </View>
    );
  }
} 
