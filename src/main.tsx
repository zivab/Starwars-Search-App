import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '../src/theme/ThemeProvider.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import './index.css';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
