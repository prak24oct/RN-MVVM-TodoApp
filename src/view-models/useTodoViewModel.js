import { useDispatch, useSelector } from "react-redux";
import { TodoAction } from "../store/todoSlice";

const useToDoViewModel = () => {
  const { isFetchingTodo, todos } = useSelector((state) =>   state.todo);

  const dispatch = useDispatch();

  const {createTodo, updateTodo, deleteTodo} = TodoAction;
  return {
    isFetchingTodo,
    todos,
    createTodo: (title) => dispatch(createTodo({title})),
    updateTodo: (id, title) => dispatch(updateTodo({id, title})),
    deleteTodo: (id) => dispatch(deleteTodo({id}))
  };
};

export default useToDoViewModel;
