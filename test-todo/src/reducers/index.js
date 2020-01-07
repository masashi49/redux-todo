/**
 * todoを更新するようのreducer
 * 現在のstateとactionを受け取り、新しいstateを返す
*/

const todo = (state, action) => {
  switch (action.type) { //switchを使ってactionの種類を識別する
    case 'ADD_TODO':
      alert(state)
      return {
        id: action.id, //新しいID
        text: action.text //
      }
    default:
      return state
  }
}

export default todo
