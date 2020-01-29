const nene = (state, action) => {
    return {
        className: action.className,
        feature: action.feature,
    }
}

const nenes = (state = [], action) => {
    switch (action.type) { //switchを使ってactionの種類を識別する
        case 'ADD_NENE':
            console.log(...state);
            const states = [...state, nene(undefined, action)] // log出しやすいように変数に代入
            return states  // returnすることでstoreを更新する

        default:
            return state
    }
}

export default nenes
