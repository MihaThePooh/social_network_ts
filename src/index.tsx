import React from 'react';
import './index.css';
import App from "./App";
import ReactDOM from 'react-dom';
import {store} from "./redux/redux_store";
import {Provider} from "react-redux";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App store={store}/>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

