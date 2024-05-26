import { useState } from "react"
import useToDoViewModel from "../view-models/useTodoViewModel";
import { useNavigation } from "@react-navigation/native";
import { screenMap } from "../navigation/AppContainer";

const useNewTodoController = () => {
    const [todoText, setTodoText] = useState('');

    const {createTodo} = useToDoViewModel();

    const navigation = useNavigation();

    const onChangeTodoText = (text) => {
        setTodoText(text);
    };

    const onCreateTodoPress = () => {
        console.log(`onCreateTodoPressed!!!`)
        createTodo(todoText)
        navigation.goBack()
    };

    return {
        todoText,
        onChangeTodoText,
        onCreateTodoPress
    }
}

export default useNewTodoController;