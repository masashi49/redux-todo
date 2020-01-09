import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux' //Reduxの store を使用できるように
import { createStore } from 'redux'
import todo from "./reducers"; // index.jsをtodoという名前で読み込んでいる
import { addTodo } from './actions'
import App from './components/App';

let store = createStore(todo) // storeにtodoのreducerを食わせる


/**
 * store.dispatchを通して、reducersにactionを渡す
 * action クリエイターであるaddTodoをよぶ、actionのタイプを読みとり、storeに食わせたreducersのswitchが反応する
 */
store.dispatch(addTodo(1, 'hello'))
console.log(store.getState())

store.dispatch(addTodo(2, 'buy'))
console.log(store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
