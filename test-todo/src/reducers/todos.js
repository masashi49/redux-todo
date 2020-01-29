const todo = (state, action) => {
    return {
        id: action.id,
        text: action.text,
        inu: action.id + 1000,
    }
}

/**
 * todoを更新するようのreducer
 * 現在のstateとactionを受け取り、新しいstateを返す
*/

const todos = (state = [], action) => {
    switch (action.type) { //switchを使ってactionの種類を識別する
        case 'ADD_TODO':
            console.log('this is todo reducer');
            // 現在のstateに、変更後のstateを追加。
            console.log(state);
            const states = [...state, todo(undefined, action)] // log出しやすいように変数に代入
            return states  // returnすることでstoreを更新する

        default:
            console.log(action + '::') // storeもactionもdispatchで渡ってきているけどcaseが当てはまらないのでstoreを更新しない
            return state
    }
}

export default todos
