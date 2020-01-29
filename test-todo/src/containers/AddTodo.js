import React from 'react';
import { connect } from 'react-redux';
import { addTodo, addNene } from '../actions'; // export const で addTodo 返してる
import '../add-todo.css';

let AddTodo = ({ dispatch }) => { // 分割代入でdispatchを直接受け取る
  let input;
  let id = 0;

  return (
    <div>
      <div>
        Add todo
      <input className="add-todo-input" ref={node => { // refでinputのtarget情報を全部取得
          input = node
        }} />

        <button onClick={() => {
          dispatch(addTodo(++id, input.value)) //valueだけを使う
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
          dispatch(addNene(++id, input.value)) //valueだけを使う
          input.value = ''
        }}>
          追加
      </button>
      </div>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
