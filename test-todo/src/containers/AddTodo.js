import React from 'react';
import { connect } from 'react-redux';
import { addTodo, addNene } from '../actions'; // export const で addTodo 返してる
import '../add-todo.css';

/**
 *  { dispatch, nenes, todos }分割代入でdispatchを直接受け取る
 *   storeオブジェクトを受け取り、store.
 */

let AddTodo = (store) => {
  let input;
  let id = 0;

  console.log('00000')
  console.log(store.nenes)
  console.log('00000')
  console.log(store.todos)
  console.log('2222')
  return (
    <div>
      <div>
        Add todo
      <input className="add-todo-input" ref={node => { // refでinputのtarget情報を全部取得
          input = node
        }} />

        <button onClick={() => {
          store.dispatch(addTodo(++id, input.value)) //valueだけを使う
          input.value = ''
        }}>
          追加
      </button>
      </div>
      <div>
        Add nenes
      <input className="add-todo-input" ref={node => { // refでinputのtarget情報を全部取得
          input = node
        }} />

        <button onClick={() => {
          store.dispatch(addNene(++id, input.value)) //valueだけを使う
          input.value = ''
        }}>
          追加
      </button>
      </div>
    </div>
  )
}

/**
 *  connectに渡したstateをAddTodoで使える
*/
const todos = (state) => { //とりあえず全部入っているstate
  console.log('333333')
  console.log(state)
  console.log('333333')
  return {
    todos: state.todos, // 必要なものだけ使う
    nenes: state.nenes,
  }
}

AddTodo = connect(todos, null)(AddTodo)

export default AddTodo
