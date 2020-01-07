import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux' //Reduxの store を使用できるように
import { createStore } from 'redux'
import todo from "./reducers";
import App from './components/App';
import * as serviceWorker from './serviceWorker';

let store = createStore(todo) //storeを追加

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
