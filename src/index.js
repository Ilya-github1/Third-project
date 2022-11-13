import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/style.scss'
import { Provider } from 'react-redux';
import store,{persister} from './Redux/Store/Store';
import './components/Theme/theme.css'
import { PersistGate } from 'redux-persist/es/integration/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
    <App />
    </PersistGate>
  </Provider>
);

