import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import { store } from '@/store';

export const customRender = (children: React.ReactNode) => {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    ),
    store
  };
};
