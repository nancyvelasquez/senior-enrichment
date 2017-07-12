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

// import { createStore, applyMiddleware } from 'redux';
// import axios from 'axios';
// import rootReducer from './reducers';
// import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
// import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

// const GET_CAMPUSES = "GET_CAMPUSES";
// const GET_STUDENTS = "GET_STUDENTS";
// // const DELETE_STUDENT = "DELETE_STUDENT"
// // const DELETE_CAMPUS = "DELETE_CAMPUS";
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
// //     return axios.delete(`/api/students/${id}`)
// //     .then(res => res.data)
// //     .then(campus => {
// //         const action = deleteCampus(campus)
// //         dispatch(action)
// //       });
// //   };

// // Reducer
// function reducer (state = initialState, action) { // NOTE TRY ...ARRAY IF ARRAY
//     switch (action.type) {
//         case GET_CAMPUSES: 
//             return Object.assign({}, state, { campuses: action.campuses });
//         case GET_STUDENTS: 
//             return Object.assign({}, state, { students: action.students });
//         // case DELETE_CAMPUS:
//         //     return state.campuses.filter(({id}) => id !== action.data);
//         default: 
//             return state;
//     }
// }

// // case 'DELETE_COMMENT':
// //   return state.filter(({ id }) => id !== action.data);


// //STORE 

// const store = createStore(reducer,
//     rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

// export default store;
