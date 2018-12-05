import React, { Component } from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';
import Users from './Users';
import ListItem from './ListItem';

export default class componentName extends Component {
    static navigationOptions = {

        title: "EditUser",

    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let data = this.props.navigation.state.params.data
        return (
            <View>
                <Image source={require('./user.png')} />
                <Text>{data.login}</Text>
                <Text>{data.password}</Text>

            </View>
        );
    }
}
