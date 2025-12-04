import { createSlice } from "@reduxjs/toolkit";


interface initialUserState {
    isAuth: boolean,
    name: string,
    email: string,
    token: string
}

const initialUserState: initialUserState = {
    isAuth: !!localStorage.getItem('token'),
    name: localStorage.getItem('user') || '',
    email: '',
    token: localStorage.getItem('token') || ''
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        login(state, action) {
            state.isAuth = true;
            state.token = action.payload.token
            state.name = action.payload.name
            state.email = action.payload.email
            localStorage.setItem('token', state.token)
            localStorage.setItem('user', state.name)
        },
        logout(state) {
            state.isAuth = false;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            state.token = ''
            state.name = ''
            state.email = ''
        },
    }
})
export const userReducer = userSlice.reducer
export const userActions = userSlice.actions