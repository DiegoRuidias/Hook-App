import { TodoList, TodoAdd } from './index';
import { useTodos } from '../hooks/useTodos';

export const TodoApp = () => {

  const { handleDeleteTodo,todosCount,pendingTodosCount, handleNewTodo, todos, handleToggleTodo } =
    useTodos();

  return (
    <>
      <h1>
        TodoApp: ({todosCount}) <small>Pendientes: ({pendingTodosCount})</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
