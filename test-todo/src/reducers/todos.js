const todo = ( state, action ) => {
    return {
        id: action.id,
        text: action.text,
        inu: action.inu
    }
}

/**
 * todoを更新するようのreducer
 * 現在のstateとactionを受け取り、新しいstateを返す
*/

const todos = ( state = [], action ) => {
    switch ( action.type ) { //switchを使ってactionの種類を識別する
        case 'ADD_TODO':
            console.log( state )
            return [ // returnすることでstoreを更新する
                ...state,
                todo( undefined, action )
            ]
        default:
            console.log( action ) // storeもactionもdispatchで渡ってきているけどcaseが当てはまらないのでstoreを更新しない
            return state
    }
}

export default todos
