import { memo, Suspense, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import logo from "../shared/assets/logo.svg"

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1
    }
  }
})

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <Suspense fallback={
            <div className='bg-black dark:bg-white'>
              <div className='container flex justify-center h-screen items-center'>
                <div>
                  <img src={logo} />
                </div>
              </div>
            </div>
          }>
            {children}
          </Suspense>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default memo(AppProvider);