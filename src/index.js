import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import StoreContext, {Provider} from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </Provider>
        </BrowserRouter>
    );
};
rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
});

reportWebVitals();
