import { createSlice } from "@reduxjs/toolkit";
import { AuthorsType } from "@/components/Courses/Courses";

const initialAuthorsState: AuthorsType[] = [];
const authorsSlice = createSlice({
    name: 'authors',
    initialState: initialAuthorsState,
    reducers: {
        setAuthors(state, action) {
            return action.payload
        },
        addAuthors(state, action) {
            state.push(...action.payload)
        }
    }
})
export const authorsReducer = authorsSlice.reducer;
export const authorsActions = authorsSlice.actions