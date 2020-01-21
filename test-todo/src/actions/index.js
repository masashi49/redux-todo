export const addTodo = (nextTodoId, text) => {
  return {
    type: 'ADD_TODO',
    // typeの後には更新したいstoreの情報を入れる
    id: nextTodoId,
    text,
    inu: nextTodoId + 1000
  }
}
