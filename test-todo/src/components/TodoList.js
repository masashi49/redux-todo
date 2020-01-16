import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo) =>
      <Todo
        key={todo.id}
        {...todo}
      />

    )}
  </ul>
)
//propで受け取った値の型をチェックする
TodoList.propTypes = {
  //todos: PropTypes.arrayOf(PropTypes.shape({
  // id: PropTypes.number.isRequired,
  // text: PropTypes.string.isRequired,
  // inu: PropTypes.number.isRequired
  //}).isRequired).isRequired
}

export default TodoList
