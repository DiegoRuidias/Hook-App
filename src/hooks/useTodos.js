import { useEffect, useReducer } from "react";
import { todoReducer } from '../08-UseReducer'

const initialState = [
];
const init=()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
  }
export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState,init);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  const handleNewTodo =(todo)=>{
    const action={
      type:'[TODO] Add Todo',
      payload:todo,
    }
    dispatch(action);
  }

  const handleDeleteTodo=(todo)=>{
    dispatch({
      type:'[TODO] Delete Todo',
      payload:todo,
    })
  }

  const handleToggleTodo=(todo)=>{
    dispatch({
      type:'[TODO] Toggle Todo',
      payload:todo,
    })
  }

  const pendingTodosCount=(todo)=>{
    return todo.filter(t=>!t.done).length;
  }

  const todosCount=(todo)=>{
    return todo.length;
  }
  return {
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    pendingTodosCount,
    todosCount,
    todos,
  }
}
