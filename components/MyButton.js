import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> {this.props.testProp1} </Text>
            </View>
        );
    }
}
MyButton.propTypes = {


}
export default MyButton