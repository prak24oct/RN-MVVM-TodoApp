import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";
import TodoItem from "../component/TodoItem";
import useHomeTodoController from "../view-controller/useHomeTodoController";

const HomeTodoScreen = () => {
  const { todos, isFetchingTodo, onPressTodoItem, onPressCreate } =
    useHomeTodoController();

  const renderTodoList = ({ item }) => {
    return (
      <TodoItem
        title={item.title}
        onPress={() => {
          console.log(`item....title:->${item.title}.....id:->${item.id}`);
          onPressTodoItem(item.title, item.id);
        }}
      />
    );
  };

  return (
    <View style={styles.background}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Todo</Text>
        <TouchableOpacity style={styles.btn} onPress={() =>{ 
          console.log(`onPressCreatePressed.............HomeTodoScreen`)
          onPressCreate()
          }}>
          <Text style={styles.btnText}>Create</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.todoList}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={todos}
          renderItem={renderTodoList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  headingView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  heading: {
    marginLeft: 10,
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  btn: {
    marginRight: 10,
    borderWidth: 1,
    backgroundColor: "blue",
    alignSelf: "flex-start",
    padding: 12,
    borderRadius: 5,
  },
  btnText: { color: "#fff" },
  todoList: { marginTop: 16 },
});

export default HomeTodoScreen;
