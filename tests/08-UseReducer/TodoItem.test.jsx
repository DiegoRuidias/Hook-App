import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-UseReducer';

describe('Pruebas en el componente <TodoItem/>', () => {
  const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();
  beforeEach(() => jest.clearAllMocks);

  test('Debe mostrar el componente el todo pendiente', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toBe('align-self-center pointer ');
  });


  test('Debe mostrar el componente el todo completado', () => {
    todo.done=true;
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('span debe llemar el toggleTodo cuando se hace click', () => { 

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const spanElement =screen.getByLabelText('span');
    const deleteElement =screen.getByLabelText('delete');
    fireEvent.click(spanElement);
    fireEvent.click(deleteElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo)
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo)
   })
});
