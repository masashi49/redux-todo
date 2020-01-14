import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => {
  console.log(`----${state}----`)
  return { todos: state.todos } //state.todosのみ、todosという名前で渡るようにしている
}

const VisibletodoList = connect( //connectについては挙動をもう少し理解する mapStateToPropsえ返したstateを、使えるようにするカリー魔法？
  mapStateToProps
)(TodoList) // todoListにstateを使えるようにする

export default VisibletodoList
