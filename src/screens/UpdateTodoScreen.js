import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import useUpdateTodoController from "../view-controller/useUpdateTodoController";
import { useRoute } from "@react-navigation/native";
const UpdateTodoScreen = () => {
   const route = useRoute()

    console.log(`route.params...${route.params.id}`)
    console.log(`route.params...${route.params.title}`)



  const {todoText,onChangeText,onPressUpdateTodo, onPressDeleteTodo } = useUpdateTodoController(route.params);


  return (
    <View style={styles.background}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Todo</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={todoText}
          style={styles.input}
          onChangeText={onChangeText}
        />
        <TouchableOpacity style={styles.btn} onPress={onPressUpdateTodo}>
          <Text style={styles.btnText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={onPressDeleteTodo}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  headingView: {
    marginTop: 10,
    marginBottom: 50,
  },
  heading: {
    marginLeft: 10,
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  inputView: { marginTop: 26 },
  input: {
    color:"#000",
    borderWidth: 0.75,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  btn: {
    marginTop: 30,
    borderWidth: 1,
    width: "90%",
    backgroundColor: "blue",
    alignSelf: "flex-start",
    padding: 12,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  btnText: { color: "#fff" },
  todoList: { marginTop: 16 },
});

export default UpdateTodoScreen;
