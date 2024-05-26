import { useNavigation } from "@react-navigation/native";
import TodoItem from "../component/TodoItem";
import useToDoViewModel from "../view-models/useTodoViewModel";
import { screenMap } from "../navigation/AppContainer";

const useHomeTodoController = () => {
  const { todos, isFetchingTodo } = useToDoViewModel();

  const navigation = useNavigation();

  const onPressTodoItem = (title, id) => {
    console.log(
      `useHomeTodoController..todoItem.title :->...${title}...todoItem.id:->r${id}`
    );
    navigation.navigate(screenMap.UpdateTodo, { title, id });
  };

  const onPressCreate = () => {
    navigation.navigate(screenMap.NewTodo);
  };

  return {
    isFetchingTodo,
    todos,
    onPressTodoItem,
    onPressCreate,
  };
};

export default useHomeTodoController;
