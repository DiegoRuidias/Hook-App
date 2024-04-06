import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../src/09-UseContext/LoginPage';
import { UserContext } from '../../src/09-UseContext/context/USerContext';

describe('Pruebas en <LoginPage/>', () => {
  test('Debe mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('Debe llamar el setuser cuando se hace click en el boton', () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const userElement = screen.getByLabelText('user');
    fireEvent.click(userElement);
    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: 'Juan',
      email: 'gaaaa',
    });
  });
});
