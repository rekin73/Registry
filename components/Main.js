import React, { Component } from 'react';
import { View, Text, Button, KeyboardAvoidingView, FlatList, TouchableOpacity } from 'react-native';
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
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            Login: "",
            Password: ""
        };
    }

    handleClick() {
        console.log(this.navigation)
        let url = `${Settings.address}:${Settings.port}/addUser`;

        // Default options are marked with *
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login: this.state.Login, password: this.state.Password })
        }).then(response => response.json()) // parses response to JSON
            .then(res => {
                switch (res.action) {
                    case 'ok':
                        console.log("next")
                        this.props.navigation.navigate("Screen", { data: res.data })
                        break;

                    default:
                        break;
                }
            })
    }
    render() {

        return (
            <KeyboardAvoidingView enabled style={styles.bodyView}>
                <View style={styles.titleView}><Text style={styles.textStyle}>Register Node App</Text></View>
                <View style={styles.loginPanel}>
                    <Text>username</Text>
                    <TextInput placeholder="Login" style={styles.textInput} onChangeText={tekst => this.setState({ Login: tekst })} />
                    <Text>password</Text>
                    <TextInput placeholder="Hasło" style={styles.textInput} onChangeText={tekst => this.setState({ Password: tekst })} />

                    <MyButton text="register" style={styles.myButton} fn={this.handleClick} />

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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "lime",
    },
    loginPanel: {
        flex: 1,
        backgroundColor: "white",
    },
    textStyle: {
        color: "white",
        fontSize: 40,

    },
    textInput: {
        color: "green",
        height: 60
    },
    myButton: {
        //justifySelf: 'center',
        alignSelf: 'center',
    }
}