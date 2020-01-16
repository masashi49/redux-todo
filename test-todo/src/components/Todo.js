import React, { PropTypes } from 'react'

const Todo = ({ text, inu }) => (
  <li>
    {text}::{inu}
  </li>
)

Todo.propTypes = {
  //text: PropTypes.string.isRequired
}

export default Todo
