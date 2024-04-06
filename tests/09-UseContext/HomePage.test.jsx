import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-UseContext/HomePage';
import { UserContext } from '../../src/09-UseContext/context/USerContext';

describe('Pruebas en <HomePage/>', () => {
    const user={
        id:1,
        name:'Diego',
    };
  test('debe mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag= screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('debe mostrar el componente con el usuario', () => {
    
    render(
      <UserContext.Provider value={{ user: user }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag= screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
  });
});
