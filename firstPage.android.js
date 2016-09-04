/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
    Component,PropTypes
} from 'react';
import {

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


    var NextPage = require('./nextPage.android.js');


export default class FirstPage extends React.Component {

static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }

        constructor() {
            super();

 const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.state = {
dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ]),
                liked: true
            };
}


 registerNow() {
this.props.navigator.push({
                title: 'nextPage',
                component: NextPage,
                navigationBarHidden: true,
                passProps: {myElement: 'text'}
            });
}

        handleclick() {



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
      renderNavigationView={() => <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style = {styles.welcome} >{rowData}</Text>}
        />}>



 <ToolbarAndroid actions={toolbarActions} style={styles.toolbar}
          title="My Activity" />
                       

 <Text style = {styles.welcome}> Welcome to React Native {text} </Text>
    
    <TextInput style = {styles.instructions}>dev menu</TextInput>
                        <TouchableHighlight onPress={this.registerNow.bind(this)}>
    <Image
        source = {{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
			 style = {{width: 400, height: 100}} /> 
</TouchableHighlight>
</DrawerLayoutAndroid>
}>
   <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style = {styles.welcome} >{rowData}</Text>}
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

