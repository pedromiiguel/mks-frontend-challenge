// Unit Test
import { renderHook } from '@testing-library/react';
import { useLockBodyScroll } from '.';

describe('useLockBodyScroll', () => {
  it('should lock body scroll when active is true', () => {
    renderHook(() => useLockBodyScroll(true));

    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should unlock body scroll when active is false', () => {
    renderHook(() => useLockBodyScroll(false));

    expect(document.body.style.overflow).toBe('unset');
  });
});
