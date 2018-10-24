import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log(this.props.navigation.state.params.a)
        console.log(this.props.navigation.state.params.b)
        return (
            <Button
                title="go to screen1"
                onPress={() => this.props.navigation.navigate("s1")}
            />
        );
    }
}
