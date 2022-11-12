import reportWebVitals from './reportWebVitals';
import store from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>
    );
};
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
