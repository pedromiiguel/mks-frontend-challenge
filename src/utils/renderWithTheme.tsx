import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';

import { theme } from '@/styles/theme';
import { Provider } from 'react-redux';
import { store } from '@/store';

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  return render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
};
