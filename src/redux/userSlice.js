import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState: {
       userInfo: {
        userId:"", age:0, quote:"", bio:"", company:"", position:"",highestQualification:"",personalities: []
       },
       pending: false,
       error: false
    },
    reducers: {
        updateStart:(state) => {
            state.pending = true;
            // debugger;
        },

        updateSuccess: (state,action) => {
            state.pending = false;
            state.userInfo = action.payload;
        },

        updateError: (state) => {
            state.error = true;
            state.pending = false;
        },

        getUserStart: (state) => {
            state.pending = true
        },

        getUserSuccess: (state, action) => {
            state.userInfo = action.payload;
            state.pending = false;
        },

        getUserError: (state) => {
            state.pending = false;
            state.error = true;
        }
    }
})

export const { updateStart, updateSuccess, updateError, getUserStart, getUserSuccess, getUserError } = userSlice.actions;
export default userSlice.reducer;