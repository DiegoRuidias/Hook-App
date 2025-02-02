import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-UseReducer';
import { useTodos } from '../../src/hooks/useTodos';
jest.mock('../../src/hooks/useTodos');

describe('Pruebas en <TodoApp/>', () => {
    useTodos.mockReturnValue({
        todos:[
            {id:1,description:'Todo #1',done: false},
            {id:2,description:'Todo #2',done: true},
        ], 
        handleDeleteTodo:jest.fn(),
        todosCount:2,
        pendingTodosCount:1, 
        handleNewTodo:jest.fn(), 
        handleToggleTodo:jest.fn(),
    });
  test('Debe mostrar el componente correctamente', () => {
    render(<TodoApp />);
    screen.debug();
    expect(screen.getByText('Todo #1') ).toBeTruthy();
    expect(screen.getByText('Todo #2') ).toBeTruthy();
    expect(screen.getByRole('textbox') ).toBeTruthy();
  });
});
