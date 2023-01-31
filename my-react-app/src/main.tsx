import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux/es/exports';
import App from './Components/App';
import './index.css';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
