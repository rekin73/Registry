import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import Users from './Users';
import ListItem from './ListItem';

export default class componentName extends Component {
    static navigationOptions = {

        title: "Admin Page",
        headerStyle: {
            backgroundColor: "lime",

        }

    }
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
            <View style={styles.view}>

                <Button
                    title="Back to login page"
                    onPress={() => this.props.navigation.navigate("Main")}

                />
                <Users data={data} _handleEdit={this.handleEdit} />
            </View>
        );
    }
}
const styles = {
    view: {
        flex: 1
    }

}