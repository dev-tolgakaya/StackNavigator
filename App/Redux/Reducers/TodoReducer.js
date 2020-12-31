import {combineReducers} from 'redux';

const INITIAL_STATE = {
    todos: [
        {
            shortName: 'AB',
            topicTitle: 'Hayatımın en berbat günü',
            topicText: 'Sanırım dünyada gerçekten sıkıntılı insanla..'
        }

    ]
};

const TodoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
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
