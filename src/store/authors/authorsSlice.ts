import { createSlice } from "@reduxjs/toolkit";
import { AuthorsType } from "@/components/Courses/Courses";

const initialAuthorsState: AuthorsType[] = [];
const authorsSlice = createSlice({
    name: 'authors',
    initialState: initialAuthorsState,
    reducers: {
        setAuthors(_state, action) {
            return action.payload
        },
        addAuthor(state, action) {
            const exists = state.some(author => author.id === action.payload.id)

            if (!exists) state.push(action.payload)
        }
    }
})
export const authorsReducer = authorsSlice.reducer;
export const { setAuthors, addAuthor } = authorsSlice.actions