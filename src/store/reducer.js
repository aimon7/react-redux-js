const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.payload.value
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.payload.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
            // const index= 2;
            // const newArray = [...state.results];
            // newArray.splice(index, 1)
            const newArray = state.results.filter(result => result.id !== action.payload.resultElementId);
            return {
                ...state,
                results: newArray
            }
        default:
            return state

    }
}

export default reducer;
