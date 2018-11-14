import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import MyButton from './MyButton';
import Settings from './Settings';
export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log(this.props)
        return (
            <View style={Settings.styles.ListItem}>
                <Image source={require('./user.png')} /><Text>{this.props.a.item.key}:{this.props.a.item.login} {this.props.a.item.password}</Text><MyButton text="Edytuj" fn={() => { }} /><MyButton text="Usuń" fn={() => { }} />
            </View>
        );
    }
}
