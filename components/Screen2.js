import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import Users from './Users';
import ListItem from './ListItem';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.state = {
        };
    }
    handleEdit(params) {
        this.props.navigation.navigate("EditUser", { data: params })
    }
    render() {
        let data = this.props.navigation.state.params.data;
        return (
            <View>

                <Button
                    title="go to screen1"
                    onPress={() => this.props.navigation.navigate("Main")}
                />
                <Users data={data} _handleEdit={this.handleEdit} />
            </View>
        );
    }
}
