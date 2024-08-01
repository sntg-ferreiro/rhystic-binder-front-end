import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    data: {},
    counter: 0,
}

export const authSlice = createSlice(
    {
        name: "userAuth",
        initialState,
        reducers: {
            login(state) {
                state.isLoggedIn = true;
                state.counter = +1;
            },
            logout(state) {
                state.isLoggedIn = false
                state.counter = +1;
            }
        },
    }
);

export const userAuthActions = authSlice.actions;
export const selectLoggedIn = (state: { isLoggedIn: { value: any; }; }) => state.isLoggedIn
export const selectCounter = (state: { counter: { value: any; }; }) => state.counter