import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoursesType } from "@/components/Courses/Courses";

const initialCoursesState: CoursesType[] = [];
const coursesSlice = createSlice({
    name: 'courses',
    initialState: initialCoursesState,
    reducers: {
        setCourses(_state, action) {
            return action.payload
        },
        addCourse(state, action) {
            state.push(action.payload)
        },
        deleteCourse(state, action: PayloadAction<string>) {
            const courseToRemoveId = action.payload
            return state.filter(course => course.id !== courseToRemoveId)
        }
    }
})
export const coursesReducer = coursesSlice.reducer;
export const coursesActions = coursesSlice.actions