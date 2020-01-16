import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, inu, id }) => (
  <li>
    {text}::{inu}::{id}
  </li>
)

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  inu: PropTypes.number.isRequired,
}.isRequired

export default Todo
