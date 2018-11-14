import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log(this.props)
        return (
            <View>
                <Text>{this.props.a}</Text>
            </View>
        );
    }
}
