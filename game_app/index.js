import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { StyleRoot } from 'radium';
import configureStore from './components/redux/store/configureStore';
import { Provider } from 'react-redux';


const store = configureStore(); //can pass initial state (overrides default params in reducer)

ReactDOM.render(
    <Provider store={store}>
        <StyleRoot style={rootStyle}>
            <App />
        </StyleRoot>
    </Provider>,
    document.getElementById('app')
);

let rootStyle = {
    background: "#f7f7f7",
    height: '100%',
    color: "#424242",
    padding: 0,
    margin: 0,
    fontFamily: "Roboto, Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: 1,
    position: "relative",
    cursor: "auto"
};
