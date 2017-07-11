import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers';
// import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
// import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

// export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))

const GOT_CAMPUSES_FROM_SERVER = "GOT_MESSAGES_FROM_SERVER";
const GOT_STUDENTS_FROM_SERVER = "GOT_STUDENTS_FROM_SERVER";

export function GOT_CAMPUSES_FROM_SERVER (campuses) {
    return {
        type: GOT_MESSAGES_FROM_SERVER,
        campuses
    }
}

export function GOT_STUDENTS_FROM_SERVER (campuses) {
    return {
        type: GOT_STUDENTS_FROM_SERVER,
        students
    }
}

//initial state
const initialState = {
    campuses: [],
    students: []
}

// Reducer
function reducer (state = initialState, action) {
    switch (action.type) {
        case GOT_CAMPUSES_FROM_SERVER: 
            return Object.assign({}, state, { campuses: action.campuses });
        case GOT_STUDENTS_FROM_SERVER: 
            return Object.assign({}, state, { students: action.students });
        default: 
            return state;
    }
}

//STORE 

const store = createStore(reducer);
export default store;