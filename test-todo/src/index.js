import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux' //Reduxの store を使用できるように
import { createStore } from 'redux'
import reducers from "./reducers"; // index.jsをreducersという名前で読み込んでいる
//import { addreducers } from './actions'
import App from './components/App';

let store = createStore(reducers) // storeにreducersのreducerを食わせる

/**
 * store.dispatchを通して、reducersにactionを渡す
 * action クリエイターであるaddreducersをよぶ、actionのタイプを読みとり、storeに食わせたreducersのswitchが反応する
 */
// store.dispatch(addreducers(1, 'hello'))
// console.log(store.getState())

// store.dispatch(addreducers(2, 'buy'))
// console.log(store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
