'use strict';
const USER_KEY = '@meteorChat:userKey'
import React from 'react-native';
import NavigationBar from 'react-native-navbar';
import ddp from '../config/ddp';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

let {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  View,
  Navigator,
} = React;

class Message extends React.Component{
  render(){
    console.log('MSG', this.props.msg);
    return (
      <View style={{flex: 1,}} >
        <View style={styles.container}>
          <Image
            style={styles.icon}
            source={require('./meteor-icon.png')}
          />
          <View style={styles.messageBox}>
            <View style={styles.row}>
              <Text style={styles.author}>{this.props.msg.author}</Text>
              <Text style={styles.sent}>{moment(this.props.createdAt).fromNow()}</Text>
            </View>
            <View style={styles.messageView}>
              <Text style={styles.messageText}>{this.props.msg.message}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
let styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10
  },
  separator: {
    flex: 1,
    height: 2,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    marginLeft: 10,
  },
  icon: {
    height: 40,
    width: 40,
    marginTop: 10,
    marginLeft: 13
  },
  messageBox: {
    flex: 1,
    alignItems: 'stretch',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  messageView: {
    flex: 1,
    paddingRight: 15,
  },
  messageText: {
    fontSize: 14,
    fontWeight: '300'
  },
  author:{
    fontSize: 12,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 3
  },
  messageView: {
    backgroundColor: 'white',
    flex: 1,
    paddingRight: 15
  },
  messageText: {
    fontSize: 14,
    fontWeight: '300',
  },
  icon: {
    height: 40,
    width: 40,
    marginTop: 10,
    marginLeft: 15
 },
  sent:{
    fontSize: 12,
    fontWeight: '300',
    color: '#9B9B9B',
    marginLeft: 10,
    color: '#9B9B9B',
    fontWeight: '300',
    marginLeft: 10
  }
})
module.exports = Message;
