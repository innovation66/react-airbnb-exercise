import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from "react-redux"
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Suspense fallback="loading">
      <Provider store = {store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense>
  //</React.StrictMode>
);

