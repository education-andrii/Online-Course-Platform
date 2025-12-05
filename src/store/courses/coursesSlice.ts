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
        },
        updateCourse(state, action: PayloadAction<CoursesType>) {
            const updatedCourse = action.payload
            const index = state.findIndex(course => course.id === updatedCourse.id)
            if (index !== -1) {
                state[index] = updatedCourse
            }
        }
    }
})
export const coursesReducer = coursesSlice.reducer;
export const { setCourses, addCourse, deleteCourse, updateCourse } = coursesSlice.actions