import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
}

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.payload.result})
            }
        case actionTypes.DELETE_RESULT:
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
