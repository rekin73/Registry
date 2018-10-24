import React, { Component } from 'react';
import { View, Text, Button, KeyboardAvoidingView, FlatList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MyButton from './MyButton';
import Settings from './Settings';
export default class Main extends Component {
    static navigationOptions = {
        header: null,
        title: "Login",

    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <KeyboardAvoidingView enabled style={styles.bodyView}>
                <View style={styles.titleView}><Text style={styles.textStyle}>Register Node App</Text></View>
                <View style={styles.loginPanel}>
                    <Text>username</Text>
                    <TextInput placeholder="Login" />
                    <Text>password</Text>
                    <TextInput placeholder="Hasło" />
                    <MyButton testProp1="register" />
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = {
    bodyView: {
        flex: 1,
    },
    titleView: {
        flex: 1,
        backgroundColor: "green",
        alignItems: 'center',
        justifyContent: 'center'

    },
    loginPanel: {
        flex: 1,
        backgroundColor: "white",
    },
    textStyle: {
        flex: 1,
        color: "white",
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        justifyContent: 'center'
    }
}