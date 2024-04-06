export const TodoItem = ({ todo = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between"
    >
      <span
        className={`align-self-center pointer ${
          todo.done ? 'text-decoration-line-through' : ''
        }`}
        onClick={() => onToggleTodo(todo)}
        aria-label="span"
      >
        {todo.description}
      </span>

      <button aria-label="delete" className="btn btn-danger" onClick={() => onDeleteTodo(todo)}>
        Borrar
      </button>
    </li>
  );
};
