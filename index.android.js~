/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
    Component
} from 'react';
import {
NativeModules,
    AppRegistry,
    StyleSheet,Navigator,
    Text,
    Image,
    ToastAndroid,ToolbarAndroid,
    TouchableHighlight,
    ListView,TextInput,DrawerLayoutAndroid,
    View
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import UiHandler from './uihandler'




var NextPage = require('./nextPage.android.js');
var FirstPage = require('./firstPage.android.js');
var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';

class AwesomeProject extends React.Component {



 renderBook(book) {
        return (

            <TouchableHighlight >
                <View>
                    <View style={styles.container}>
                        <Image
                            source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                            style = {{width: 400, height: 100}}  />
                        <View style={{flex : 1}}>
                            <Text style={styles.title}>{book.volumeInfo.title}</Text>
                            <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                        </View>
                    </View>
                    <View style={{height : 5 , backgroundColor : '#00ff00'}} />
                </View>
            </TouchableHighlight>
        );
    }
componentDidMount() {
        this.fetchData();
    }
 constructor() {
            super();

            this.state = {
dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
                liked: true
            };
}

 handleclick() {

            UiHandler.hello();
            this.setState({
                liked: !
                    this.state
                    .liked
            });
            console.log("zvcv");
            ToastAndroid.show(
                'This is a toast with long duration',
                ToastAndroid.LONG
            );
        }

 fetchData() {

        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.items),
                    isLoading: false
                });
            })
            .done();
    }

         render() {
                const text = this.state
                    .liked ? 'liked' :
                    'haven\'t liked';
                return (
<ParallaxScrollView
      backgroundColor="blue"
      contentBackgroundColor="pink"
      parallaxHeaderHeight={300}
      renderForeground={() =>
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() =>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <Text style = {styles.welcome} >rowData</Text>}
        />}>
            <ToolbarAndroid actions={toolbarActions} style={styles.toolbar}
          title="My Activity" />
            <Text style = {styles.welcome}> Welcome to React Native {text} </Text>
            <TextInput style = {styles.instructions}>dev menu</TextInput>
            <TouchableHighlight onPress={this.handleclick.bind(this)}>
                <Image
        source = {{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
			 style = {{width: 400, height: 100}} />
            </TouchableHighlight>
        </DrawerLayoutAndroid>
}>
        <ListView
          dataSource={this.state.dataSource}
                renderRow={this.renderBook.bind(this)}
        />
    </ParallaxScrollView>
    );
    }
}
var toolbarActions = [
  {title: 'Create', icon: {uri: 'https://facebook.github.io/react/img/logo_og.png'}, show: 'always'},
  {title: 'Filter'},
  {title: 'Filter'},
  {title: 'Filter'},
  {title: 'Filter'},
  {title: 'Filter'},
  {title: 'Settings', icon: {uri: 'http://slacy.me/images/favicon.png'}, show: 'always'},
];



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#FF0000',
    },toolbar: {
    backgroundColor: '#fafafa',
    height: 56,
  },
    welcome: {
        fontSize: 20,
        textAlign: 'auto',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
