import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

/* -----------------    ACTIONS     ------------------ */

const GET_CAMPUSES = "GET_CAMPUSES";
const GET_STUDENTS = "GET_STUDENTS";
const ENTER_NEW_CAMPUS = "ENTER_NEW_CAMPUS"
const ENTER_NEW_STUDENT = "ENTER_NEW_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT"
export const DELETE_CAMPUS = "DELETE_CAMPUS";
const UPDATE_CAMPUS = "UPDATE_CAMPUS";
const UPDATE_STUDENT = "UPDATE_STUDENT";

/* ------------   ACTION CREATORS     ------------------ */

export function getCampuses (campuses) {
    const action = { type: GET_CAMPUSES, campuses };
    return action;
}

export function getStudents (students) {
    const action = { type: GET_STUDENTS, students };
    return action;
}

export function enterNewCampus (campus) {
    const action = { type: ENTER_NEW_CAMPUS, campus };
    return action;
}

export function enterNewStudent (student) {
    const action = { type: ENTER_NEW_STUDENT, student };
    return action;
}

export function deleteStudent (id) {
    const action = { type: DELETE_STUDENT, id };
    return action;
}

export function deleteCampus (id) {
    const action = { type: DELETE_CAMPUS, id };
    return action;
}

export function updateCampus (campus) {
    const action = { type: UPDATE_CAMPUS, campus };
    return action;
}

export function updateStudent (student) {
    const action = { type: UPDATE_STUDENT, student };
    return action;
}

/* ------------       INITIAL STATE     ------------------ */

const initialState = {
    campuses: [],
    students: [],
}

/* ------------   THUNK CREATORS     ------------------ */

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

export const fetchCampus = (id) => dispatch => {
  axios.get(`/api/campuses/${id}`)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error('Fetching campus unsuccessful', err));
};

export const fetchStudent = (id) => dispatch => {
  axios.get(`/api/students/${id}`)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error('Fetching student unsuccessful', err));
};

export const postCampus = (campus) => dispatch => {
    axios.post('/api/campuses', campus)
    .then(res => dispatch(enterNewCampus(campus)))
    .catch(err => console.error('Failed to add campus', err.message))
}

export const postStudent = (student) => dispatch => {
    axios.post('/api/students', student)
    .then(res => dispatch(enterNewStudent(student)))
    .catch(err => console.error('Failed to add student', err.message))
}

export const removeStudent = id => dispatch => {
  axios.delete(`/api/students/${id}`)
       .catch(err => console.error(`Removing student: ${id} unsuccesful`, err));
};

export const removeCampus = id => dispatch => {
  axios.delete(`/api/campuses/${id}`)
       .catch(err => console.error(`Removing campus: ${id} unsuccesful`, err));
};

export const updateCampusThunk = (id, campus) => dispatch => {
  axios.put(`/api/campuses/${id}`, campus)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error(`Updating campus: ${campus} unsuccessful`, err));
};

export const updateStudentThunk = (id, student) => dispatch => {
  axios.put(`/api/students/${id}`, student)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error(`Updating student: ${student} unsuccessful`, err));
};

/* ------------   REDUCERS     ------------------ */

function reducer (state = initialState, action) { // NOTE TRY ...ARRAY IF ARRAY
    switch (action.type) {
        case GET_CAMPUSES: 
            return Object.assign({}, state, { campuses: action.campuses });
        case GET_STUDENTS: 
            return Object.assign({}, state, { students: action.students });
        case ENTER_NEW_CAMPUS:
            return Object.assign({}, state, { campusus: action.campus });
        case ENTER_NEW_STUDENT: 
            return Object.assign({}, state, { students: action.student });
        case DELETE_STUDENT:
            return students.filter(student => student.id !== action.id);
        case DELETE_CAMPUS:
            return campuses.filter(campus => campus.id !== action.id);
        case UPDATE_CAMPUS:
            return campuses.map(campus => (
                action.campus.id === campus.id ? action.campus : campus
        ));
        case UPDATE_STUDENT:
            return students.map(student => (
                action.student.id === student.id ? action.student : student
        ));
        default: 
            return state;
    }
}

/* ------------   STORE     ------------------ */

const store = createStore(reducer,
    rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;