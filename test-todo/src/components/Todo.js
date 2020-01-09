import React, { PropTypes } from 'react'

export const Todo = ({ text }) => {
  <li>
    {text}
  </li>
}

Todo.PropTypes = {
  text: PropTypes.string.isRequired
}
