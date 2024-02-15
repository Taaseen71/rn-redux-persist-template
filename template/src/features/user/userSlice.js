import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: '',
        data: {}
    },
    reducers: {
        logInUser: (state, action) => {
            state.userName = action.payload
        },
        resetUser: (state) => {
            state.userName = ''
        }
    }
})

export const {logInUser, resetUser} = userSlice.actions;  //Export Reducer Functions

export default userSlice.reducer 