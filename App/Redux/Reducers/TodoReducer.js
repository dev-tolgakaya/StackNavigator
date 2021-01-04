import {combineReducers} from 'redux';

const INITIAL_STATE = {
    todos: []
};

const TodoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_TODO' :{
            const setTodos = action.payload
            const newState = {todos:setTodos}
            return  newState
        }

        case 'ADD_TODO': {
            const {todos} = state;
            const addedTodos = [
                ...todos, action.payload
            ]
            const newState = {todos: addedTodos};
            return newState;
        }
        case 'DELETE_TODO' : {
            const{todos} = state;
            const newState = {todos : []}
            return  newState
        }

        default:
            return state

    }
};


export default TodoReducer;
