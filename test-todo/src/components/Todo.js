import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, inu, id, aa }) => (
  <li>
    {text}::{inu}::{id}::{aa}
  </li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired
}

export default Todo
