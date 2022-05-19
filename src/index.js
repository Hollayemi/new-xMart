import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import reportWebVitals from './reportWebVitals';
import 'react-loading-skeleton/dist/skeleton.css';
import { Provider } from 'react-redux';
import 'rsuite/dist/rsuite.min.css';
import './assets/css/index.css';
import './assets/css/tailwind.css';
import ErrorBoundary from './components/HOC/ErrorBoundary';
import KickOff from './routes';
import { store } from './state/store';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);
ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <KickOff />
                </PersistGate>
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
