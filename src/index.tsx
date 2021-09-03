import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {store} from "./redux/redux_store";
import {Provider} from "react-redux";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

