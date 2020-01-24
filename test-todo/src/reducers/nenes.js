// reducerでreturnするstateは、それぞれが独立しているので、他のreducerと同じkeyをreturnしても混ざらないが、ややこしいのでちゃんと分けよう

const nene = ( state, action ) => {
    return {
        id: action.id + 'nenes', // これは混ざりそうだけど混ざらない
        nenes: {
            id: action.id + 'nenes',
            text: action.text + 'nenes',
            inu: action.id + 1000 + 'nenes',
            className: action.id,
            textss: action.text,
            neko: action.id + 1000,
        }
    }
}

const nenes = ( state = [], action ) => {
    switch ( action.type ) {
        case 'ADD_TODO':
            console.log( 'this is todo nenes' );
            console.log( state );
            const states = [ ...state, nene( undefined, action ) ] // log出しやすいように変数に代入
            return states  // returnすることでstoreを更新する
        default:
            console.log( action )
            return state
    }
}

export default nenes
