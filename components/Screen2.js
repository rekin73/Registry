import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import Users from './Users';
import ListItem from './ListItem';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let data = this.props.navigation.state.params.data;
        return (
            <View>

                <Button
                    title="go to screen1"
                    onPress={() => this.props.navigation.navigate("Main")}
                />
                <Users data={data} />
            </View>
        );
    }
}
