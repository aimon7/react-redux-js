import { ADD, DECREMENT, INCREMENT, SUBTRACT } from './actionTypes';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = (n) => {
    return {
        type: ADD,
        payload: {value: n}
    }
}

export const subtract = (n) => {
    return {
        type: SUBTRACT,
        payload: {value: n}
    }
}
