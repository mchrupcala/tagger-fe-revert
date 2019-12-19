

// // Run npm test -- --coverage (note extra -- in the middle) to include a coverage report like this:
// // ADD TO PACKAGE.JSON
// // RUN COVERAGE TEST

// // {
// //     "presets": ["@babel/preset-env"]
// //   }

// import { combineReducers } from "redux";
// import { signedOutReducer } from "./gapi.reducers";
// import { signInStatusResult } from "./gapi.reducers";
// import expect from 'expect';

// describe('reducers', () => {

//     function stateBefore(){
//         return {
//             state: {
                
//             }
//         }
//     }

//     const action = {
//         state: {},
//         type: 'SIGNED_OUT'
//     }
//     const actual = signedOutReducer(stateBefore(action))

//     const expected = {
//         state: {},
//         type: 'SIGNED_OUT'
//     };

//     expect(actual).toEqual(expected);
// })
// // describe('signedOutReducer', () => {
// //     it('should return initial state', () => {
// //         const action ={type: 'SIGNED_OUT'}
// //         const intitialState = {}

// //         expect()
// //     })
// //     it('should handle SIGNED_OUT', () => {
// //         expect()
// //     })
// // })

// // describe('actions', () => {
    
// //     it('should create an action to SIGN OUT', () => {
// //       const state = 'signed out'
// //       const expectedAction = {
// //         state: state.SIGNED_OUT,
// //         state
// //       }
// //       expect(state.reducer().toEqual(expectedAction))
// //     })

// //     it('should change state to AUTH_IN_PROGRESS', () => {
// //         const state = 'auth_in_progress'
// //         const expectedAction = {
// //             state: state.AUTH_IN_PROGRESS,
// //             ...state
// //         }
// //         expect(state.signInStatusResult().toEqual(expectedAction))
// //     })
// //   })