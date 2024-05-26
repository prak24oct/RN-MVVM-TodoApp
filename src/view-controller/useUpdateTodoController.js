import { useState } from "react";
import useToDoViewModel from "../view-models/useTodoViewModel";
import { useNavigation } from "@react-navigation/native";
import { screenMap } from "../navigation/AppContainer";

const useUpdateTodoController = (todoItem) => {
  const [todoText, setTodoText] = useState(todoItem.title);
  const { updateTodo, deleteTodo } = useToDoViewModel();
  const navigation = useNavigation();

  console.log(`todoItem...${todoItem.id}`)
  console.log(`todoItem...${todoItem.title}`)

  const onChangeText = (text) => {
    setTodoText(text);
  };

  const onPressUpdateTodo = () => {
    updateTodo(todoItem.id,todoText)
    navigation.navigate(screenMap.HomeTodo);
  };

  const onPressDeleteTodo = () => {
    deleteTodo(todoItem.id);
    navigation.navigate(screenMap.HomeTodo);
  };

  return { todoText, onChangeText, onPressUpdateTodo, onPressDeleteTodo}
};

export default useUpdateTodoController;
