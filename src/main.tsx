import React from 'react';
import ReactDOM from 'react-dom/client';
import '@atlaskit/css-reset';
import { setGlobalTheme } from '@atlaskit/tokens/set-global-theme';
import './styles.css';
import App from './App';
void setGlobalTheme({ colorMode: 'light', light: 'light', dark: 'dark', spacing: 'spacing' });
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
