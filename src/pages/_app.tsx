import { useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { theme } from '@/styles/theme';
import GlobalStyle from '@/styles/global';
import { store, persistor } from '@/store';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
              </PersistGate>
            </Provider>
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
