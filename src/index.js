import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import rootReducer from "./store/RootReducer";
import PageConfig from "./common/PageConfig";
import {Menu} from "antd";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./view/HomePage";

ReactDOM.render(
    <Provider store={rootReducer}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
