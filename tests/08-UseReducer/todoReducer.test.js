import { todoReducer } from '../../src/08-UseReducer/todoReducer';

describe('Pruebas en todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false,
    },
  ];
  test('debe regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('debe de agregar un todo', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Nuevo todo #2',
        done: false,
      },
    };

    const newState=todoReducer(initialState,action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload)
  });

  test('Debe Eliminar un todo', () => { 
    const action = {
        type: '[TODO] Delete Todo',
        payload:{
            id:1
        }
      };
      const newState=todoReducer(initialState,action);
      expect(newState.length).toBe(0)
      

   })

   test('Debe realizar el toggle', () => { 
    const action = {
        type: '[TODO] Toggle Todo',
        payload:{
            id:1
        }
      };
      const newState=todoReducer(initialState,action);
      expect(newState[0].done).toBe(true)

    })
});
