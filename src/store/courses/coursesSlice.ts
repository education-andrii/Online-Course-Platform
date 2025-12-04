import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoursesType } from "@/components/Courses/Courses";

const initialCoursesState: CoursesType[] = [];
const coursesSlice = createSlice({
    name: 'courses',
    initialState: initialCoursesState,
    reducers: {
        setCourses(state, action) {
            return action.payload
        },
        addCourses(state, action) {
            state.push(action.payload)
        },
        removeCourse(state, action: PayloadAction<string>) {
            const courseToRemoveId = action.payload
            return state.filter(course => course.id !== courseToRemoveId)
        }
    }
})
export const coursesReducer = coursesSlice.reducer;
export const coursesActions = coursesSlice.actions