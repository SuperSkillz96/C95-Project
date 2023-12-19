import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { FlatList } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class WeeklyTaskScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      tasks: [],
      date: 0,
      day: 0,
      starStyle: [],
    };
  }

  time() {
    const date = new Date();
    console.log(date)
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}-${month}-${year}`;
    this.setState({date: currentDate, day: day})
    console.log(currentDate);
  }

  componentDidMount() {
    this.time()
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item, index}) => {
    var {tasks} = this.state
    return(
      <View style = {style.renderItem}>
        <View style = {style.renderItemButton}>
          <Text style = {[style.taskText,{backgroundColor: '#43dee0'}]}>  {item}</Text>

          <TouchableOpacity
            onPress = {() => {
              this.setState({starStyle: this.state.starStyle ? false : true})
            }}
          >
            <Ionicons style = {style.starIcon} name = {this.state.starStyle ? 'star' : 'star-outline'}/>
          </TouchableOpacity>

          <TouchableOpacity
            onPress = {() => {
              tasks.splice(index, 1)
              this.setState({tasks: tasks})
            }}
          >
            <Ionicons style = {style.tickIcon} name="checkbox-outline" />
          </TouchableOpacity>

        </View>
      </View>
    )
  };

  render() {

    const {tasks} = this.state

    return (
      <View style = {style.body}>

        <Text style = {style.title}>Monthly Tasks</Text>

        <View style = {style.taskInput}>

          <TextInput
            style = {style.textInput}
            placeholder="Enter a new task"
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
            value={this.state.text}
          />

        </View>

        <TouchableOpacity
          style = {style.enterButton}
          onPress={() => {
            this.setState({
              tasks: [...this.state.tasks, this.state.text]
            });
          }}>
          <Text style = {style.buttonText}>Add Task</Text>
        </TouchableOpacity>

          

        <FlatList keyExtractor = {this.keyExtractor} renderItem = {this.renderItem} data = {tasks}/>

        <Text>{this.state.day}</Text>
        <Text>{this.state.date}</Text>

      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    borderWidth: 3,
    backgroundColor: '#55bd55'
  },

  title: {
    alignSelf: 'center',
    fontSize: 30,
    backgroundColor: '#BB66CC',
    marginTop: 15,
  },


  taskInput: {
    margin: 15,
    backgroundColor: '#DD2255'
  },

  textInput: {
    height: 30,
    borderWidth: 3,
  },

  enterButton: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
    width: 100,
  },

  renderItem: {
    margin: 15,
    marginBottom: 0,
  },

  taskText: {
    borderRadius: 20,
    height: 30,
    width: 480,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },

  renderItemButton: {
    alignSelf: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#88BBFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

});
