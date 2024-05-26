import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import useNewTodoController from './../view-controller/useNewTodoController'

const NewTodoScreen = () => {

  const { todoText, onChangeTodoText,onCreateTodoPress} = useNewTodoController()
 
  return (
    <View style={styles.background}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Todo</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={todoText}
          style={styles.input}
          placeholder="Enter text...."
          onChangeText={(text) => {
            console.log(`onChangeText....NewTodoScreen`)
            onChangeTodoText(text)
          }}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={()=>{
            onCreateTodoPress()
          }}
        >
          <Text style={styles.btnText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  headingView: {
    marginTop: 16,
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
    borderWidth: 0.75,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  btn: {
    marginTop: 56,
    borderWidth: 1,
    width: "90%",
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  btnText: { color: "#fff" },
});

export default NewTodoScreen;
