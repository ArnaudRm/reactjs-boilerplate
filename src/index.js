import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import store from './store/store';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <PersistGate persistor={persistStore(store)}>
        <Provider store={store}>
            <Router />
        </Provider>
    </PersistGate>
    , document.getElementById('root')
);
registerServiceWorker();
