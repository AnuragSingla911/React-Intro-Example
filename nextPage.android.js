'use strict';
import React, {
    Component
} from 'react';
import {

    AppRegistry,
    StyleSheet,
    Text,
    Image,
    ToastAndroid,ToolbarAndroid,
    TouchableHighlight,
    ListView,TextInput,DrawerLayoutAndroid,
    View
} from 'react-native';

var NextPage = React.createClass({

    render: function() {
        return (
          <View style={styles.container}>
                <Text style={styles.text}>My value: {this.props.myElement}</Text>
                <Text>any text</Text>
            </View>
        );
    }
})

module.exports = NextPage;
