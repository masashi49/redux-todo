import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => {
  return { todos: state.todos } //state全体の中から、todosのみ、todosという名前で渡るようにしている
}

//connectについては挙動をもう少し理解する mapStateToPropsえ返したstateを、使えるようにするカリー魔法？
const VisibletodoList = connect(
  mapStateToProps //第一引数にpropsを入れる
)(TodoList) // todoListにmapStateToPropsを通してstateを使えるようにする

export default VisibletodoList
