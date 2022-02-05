
const counterInitialState = {
    value: 0,
    step:1
}

export const counterReducer = (state = counterInitialState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                    value: state.value + action.payload
                }
        case 'decrement':   
           return {
                ...state,
                    value: state.counter.value - action.payload   
            }
        default:
            return state;
    }
}