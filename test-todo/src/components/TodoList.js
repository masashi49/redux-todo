import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types'; //reactの中からではなく、prop-typesという　別のもので呼び出す必要がある

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
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    inu: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default TodoList
