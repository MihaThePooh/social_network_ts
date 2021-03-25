import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {StoreType} from "./redux/state";
import App from "./App";
import ReactDOM from 'react-dom';

export const renderTree = (store: StoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById("root")
    )
};

renderTree(store);
store.subscribe(renderTree);



reportWebVitals();
