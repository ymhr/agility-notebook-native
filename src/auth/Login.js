import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {AuthSession} from 'expo';

export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Login'
    }

    _sendLoginRequest = async () => {
        const redirectUrl = AuthSession.getRedirectUrl();
        console.log(redirectUrl);
    }

    render(){
        return (
        <View style={styles.wrapper}>
            <Button title="Login with Facebook" onPress={this._sendLoginRequest}/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }
});