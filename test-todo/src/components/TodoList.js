import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types'; //reactの中からではなく、prop-typesという　別のもので呼び出す必要がある

const TodoList = ({ todos }) => ( //mapStateToPropsの内容をtodosとして受け取る { todos: state.todos }
  <ul>
    {todos.map((todo) =>
      <Todo
        key={todo.id}
        {...todo} //分割代入で子コンポーネントへ渡す
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
