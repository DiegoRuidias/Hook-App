import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter', () => {
  test('Debe retornar los valores por defectos', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;
    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('should Debe Generar el counter con el valor de 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test('should Debe incrementar el contador', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;

    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(101);
  });

  test('should Debe decrementar el contador', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement } = result.current;

    act(() => {
      decrement();
    });

    expect(result.current.counter).toBe(99);
  });

  test('should Debe resetear el contador', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, reset, decrement } = result.current;

    act(() => {
      decrement();
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});
