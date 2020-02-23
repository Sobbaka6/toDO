import React, { useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header.js';
import TodoItem from './components/todoItem.js';
import AddTodo from './components/addTodo.js';

export default function App() {
  const [todo, setTodo] = useState([
    {text: 'сlick to remove', key: '1'}
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    setTodo((prevTodo) => {
      return [
        {text: text, key: Math.random().toString() },
        ...prevTodo
      ];
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
