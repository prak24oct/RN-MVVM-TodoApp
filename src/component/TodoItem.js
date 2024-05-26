import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const TodoItem = (props) => {
  const { onPress, title } = props;
  return (
    <TouchableOpacity style={styles.todo} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    width: "100%",
    padding: 16,
    borderWidth: 1,
    borderColor: "#e7e7e7",
    borderRadius: 8,
    marginVertical: 4,
    backgroundColor:'#fff',
    elevation:1.5,
  },
  title: {
    fontSize: 16,
    fontStyle:'italic'
    
  },
});

export default TodoItem;
