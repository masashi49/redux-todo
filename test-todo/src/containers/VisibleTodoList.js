import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

//ListにmapStateToPropsを通してstateを使えるようにする
const todos = (state) => { //このstateにはstoreで扱っている全部のstateが入っている
  console.log('--- '); console.log(state); console.log('--- ')
  return {
    todos: state.todos,  //state全体の中から、todosのみ、todosという名前で渡るようにしている
    nenes: state.nenes //ここで渡さないとちゃんとconnectできない
  }
}

//こんな感じで2つめおmapStateToProps作ってconnectに渡すことはできない。
//mapStateToPropsは1つの変数にまとめてconnectの第一引数
// const nenes = (state) => {
//   console.log('--- '); console.log(state); console.log('--- ')
//   return {
//     nenes: state.nenes
//   }
// }

//connectについては挙動をもう少し理解する mapStateToPropsえ返したstateを、使えるようにするカリー魔法？
const VisibletodoList = connect(
  todos //ListにmapStateToPropsを通してstateを使えるようにする,  //第一引数にpropsを入れる
  //nene,  //第二引数にmapStateToPropsいれても意味ない
)(TodoList) // todoListにmapStateToPropsを通してstateを使えるようにする

export default VisibletodoList
