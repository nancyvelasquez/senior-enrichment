import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

const GET_CAMPUSES = "GET_CAMPUSES";
const GET_STUDENTS = "GET_STUDENTS";

//Action Creators

export function getCampuses (campuses) {
    const action = {
        type: GET_CAMPUSES,
        campuses 
    };
    return action;
}

export function getStudents (students) {
    const action = {
        type: GET_STUDENTS,
        students
    };
    return action;
}

//initial state
const initialState = {
    campuses: [],
    students: [],
    // student: {},
    // campus: {}
}

//Thunk

export function fetchCampuses() {
  return function thunk(dispatch) {
     return axios.get('/api/campuses/')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses)
        dispatch(action)
      });
  };
}

export function fetchStudents() {
  return function thunk(dispatch) {
     return axios.get('/api/students/')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students)
        dispatch(action)
      });
  };
}

// Reducer
function reducer (state = initialState, action) { // NOTE TRY ...ARRAY IF ARRAY
    switch (action.type) {
        case GET_CAMPUSES: 
            return Object.assign({}, state, { campuses: action.campuses });
        case GET_STUDENTS: 
            return Object.assign({}, state, { students: action.students });
        default: 
            return state;
    }
}

//STORE 

const store = createStore(reducer,
    rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;

// export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))
