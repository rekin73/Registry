import React, { Component } from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';
import Users from './Users';
import ListItem from './ListItem';

export default class componentName extends Component {
    static navigationOptions = {

        title: "EditUser",
        headerStyle: {
            backgroundColor: "lime",
            color: "white"
        }
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let data = this.props.navigation.state.params.data
        return (
            <View style={styles.style1}>
                <Image source={require('./user.png')} style={styles.image} />
                <Text>{data.login}</Text>
                <Text>{data.password}</Text>

            </View>
        );
    }
}
const styles = {
    style1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        height: 200,
        width: 200
    }
}