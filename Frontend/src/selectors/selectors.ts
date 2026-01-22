import { StoreInterface } from "@/store"
export const getCourses = (state: StoreInterface) => state.courses
export const getAuthors = (state: StoreInterface) => state.authors
export const getToken = (state: StoreInterface) => state.user.token
export const getUserName = (state: StoreInterface) => state.user.name
export const getUserEmail = (state: StoreInterface) => state.user.email
export const isUserAuth = (state: StoreInterface) => state.user.isAuth