import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { useCart } from '.';

describe('useCart', () => {
  it('returns the correct values', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
    });

    expect(result.current.total).toBe('R$\xa00');
    expect(result.current.length).toBe(0);
    expect(result.current.items).toEqual([]);
    expect(typeof result.current.handleRemoveFromCart).toBe('function');
    expect(typeof result.current.handleAddToCart).toBe('function');
  });
});
