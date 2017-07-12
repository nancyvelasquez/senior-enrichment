import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

const GET_CAMPUSES = "GET_CAMPUSES";
const GET_STUDENTS = "GET_STUDENTS";
const ENTER_NEW_CAMPUS = "ENTER_NEW_CAMPUS"
const ENTER_NEW_STUDENT = "ENTER_NEW_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT"

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

export function enterNewCampus (campus) {
    const action = {
        type: ENTER_NEW_CAMPUS,
        campus
    };
    return action;
}

export function enterNewStudent (student) {
    const action = {
        type: ENTER_NEW_STUDENT,
        student
    };
    return action;
}

export function deleteStudent (id) {
    const action = { type: DELETE_STUDENT, id };
    return action;
}

//initial state
const initialState = {
    campuses: [],
    students: [],
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

// Reducer
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

        default: 
            return state;
    }
}

//STORE 

const store = createStore(reducer,
    rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;


//////////////////////////



// export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))

// import { createStore, applyMiddleware } from 'redux';
// import axios from 'axios';
// import rootReducer from './reducers';
// import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
// import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

// const GET_CAMPUSES = "GET_CAMPUSES";
// const GET_STUDENTS = "GET_STUDENTS";
// // const DELETE_STUDENT = "DELETE_STUDENT"
// const DELETE_CAMPUS = "DELETE_CAMPUS";
// //Action Creators

// export function getCampuses (campuses) {
//     const action = {
//         type: GET_CAMPUSES,
//         campuses 
//     };
//     return action;
// }

// export function getStudents (students) {
//     const action = {
//         type: GET_STUDENTS,
//         students
//     };
//     return action;
// }

// // export function deleteCampus (campus) {
// //     const action = {
// //         type: DELETE_CAMPUS,
// //         campus
// //     };
// //     return action;
// // }

// // export function deleteStudent (student) {
// //     const action = {
// //         type: DELETE_STUDENT,
// //         student
// //     };
// //     return action;
// // }

// //initial state
// const initialState = {
//     campuses: [],
//     students: [],
//     // student: {},
//     // campus: {}
// }

// //Thunk

// export function fetchCampuses() {
//   return function thunk(dispatch) {
//      return axios.get('/api/campuses/')
//       .then(res => res.data)
//       .then(campuses => {
//         const action = getCampuses(campuses)
//         dispatch(action)
//       });
//   };
// }

// export function fetchStudents() {
//   return function thunk(dispatch) {
//      return axios.get('/api/students/')
//       .then(res => res.data)
//       .then(students => {
//         const action = getStudents(students)
//         dispatch(action)
//       });
//   };
// }

// // export function destroyStudent() {
// //   return function thunk(dispatch) {
// //     return axios.deleteaxios.delete(`/api/students/${id}`)
// //     .then(res => res.data)
// //     .then(student => {
// //         const action = deleteStudent(student)
// //         dispatch(action)
// //       });
// //   };

// // export function destroyCampus(campus) {
// //   return function thunk(dispatch) {
// //     return axios.delete(`/api/campuses/${id}`)
// //     .then(res => res.data)
// //     .then(campus => {
// //         const action = deleteCampus(campus)
// //         dispatch(action)
// //       });
// //   };
// //}



// // Reducer
// function reducer (state = initialState, action) { // NOTE TRY ...ARRAY IF ARRAY
//     switch (action.type) {
//         case GET_CAMPUSES: 
//             return Object.assign({}, state, { campuses: action.campuses });
//         case GET_STUDENTS: 
//             return Object.assign({}, state, { students: action.students });
//         // case DELETE_CAMPUS:
//         //     let state.campuses = state.campuses.filter(({id}) => id !== action.data);
//         //     return state.campuses
//         default: 
//             return state;
//     }
// }


// //STORE 

// const store = createStore(reducer,
//     rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

// export default store;
