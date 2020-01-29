export const addTodo = (nextTodoId, text) => {
  return {
    type: 'ADD_TODO',
    // typeの後には更新したいstoreの情報を入れる
    id: nextTodoId,
    text,
    inu: nextTodoId + 1000
  }
}

export const addNene = (nextTodoId, text) => {
  return {
    type: 'ADD_NENE',
    // typeの後には更新したいstoreの情報を入れる
    className: nextTodoId,
    feature: text
  }
}
