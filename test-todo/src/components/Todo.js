import React from 'react';
import PropTypes from 'prop-types';

/** 分割代入でobjのkeyを直接指定してvalueを受け取って吐き出す
 * var { text, inu, id } = todo ←これと同じ
*/
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
