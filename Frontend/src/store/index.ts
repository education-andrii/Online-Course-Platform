import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/userSlice";
import { coursesReducer } from "./courses/coursesSlice";
import { authorsReducer } from "./authors/authorsSlice";
import { CoursesType } from "@/components/Courses/Courses";
import { AuthorsType } from "@/components/Courses/Courses";

export interface StoreInterface {
    user: {
        isAuth: boolean,
        name: string,
        email: string,
        token: string,
    },
    courses: CoursesType[],
    authors: AuthorsType[]
}

const store = configureStore({
    reducer: {
        user: userReducer,
        courses: coursesReducer,
        authors: authorsReducer
    }
})
export default store;