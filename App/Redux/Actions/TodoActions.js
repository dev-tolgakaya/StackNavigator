import * as ActionTypes from './ActionTypes'

export const setTodo = newTodo => (
    {
        type: ActionTypes.SET_TODO,
        payload: newTodo
    }
);
export const addTodo = newTodo => (
    {
        type: ActionTypes.ADD_TODO,
        payload: newTodo
    }
);
export const deleteTodo = newTodo => (
    {
        type: ActionTypes.DELETE_TODO,
        payload: newTodo
    }
);
