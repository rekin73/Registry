import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={({ item }) => <ListItem a={item} />}
            />
        );
    }
}
Users.propTypes = {
    data: PropTypes.array.isRequired,

}
export default Users;