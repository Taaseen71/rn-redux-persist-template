import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: '',
        data: {}
    },
    reducers: {
        logInUser: (state, action) => {
            state.userName = action.payload.userName
            state.data = action.payload.data
        },
        resetUser: (state) => {
            state.userName = ''
        },
        signUpUser: (state, action ) => {
            state.userName = action.payload
            state.data = action.payload.data
        }
    }
})

export const {logInUser, resetUser} = userSlice.actions;  //Export Reducer Functions

export default userSlice.reducer 