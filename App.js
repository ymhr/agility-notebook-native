import React from 'react';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import {View, Text, StyleSheet} from 'react-native';
import {SecureStore} from 'expo';
import {Button} from 'react-native-elements'
import Shows from './src/Shows.js';
import Login from './src/auth/Login';
// import Runs from './src/Runs.js'

class AuthLoading extends React.Component {
  static navigationOptions = {
    title: 'Agility Notebook'
  }
  
  constructor(props) {
    super(props);
    this.checkAuth();
  }

  checkAuth = async () => {
    console.log('checking auth');
    const token = await SecureStore.getItemAsync('jwt');
    console.log('checked', token)

    this.props.navigation.navigate(token ? 'App' : 'Auth');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const Main = StackNavigator({
  Shows: {screen: Shows},
  // Runs: {screen: Runs}
},
{
  initialRouteName: 'Shows',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#ff0000'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '100'
    }
  }
});

const Auth = StackNavigator({
  Login: {screen: Login}
});

const App = SwitchNavigator({
  AuthLoading,
  App: Main,
  Auth: Auth
});

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
});

export default App;