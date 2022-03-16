import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NotificationsProvider } from 'reapop';
import store from './common/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<p>App is loading...</p>}>
      <Provider store={store}>
        <NotificationsProvider>
          <App />
        </NotificationsProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
