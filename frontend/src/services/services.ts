import { API_BASE_URL } from "@/constants";
export const getCoursesApi = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/courses/all`)
        const result = await response.json()
        if (!response.ok) {
            throw new Error(`Fething courses list failed: ${result.result || 'Unknown Server error'}`)
        }
        return result
    } catch (error) {
        alert(`API error ${error}`)
        throw error
    }
}
export const getAuthorsApi = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/authors/all`)
        const result = await response.json()
        if (!response.ok) {
            throw new Error(`Fething authors list failed: ${result.result || 'Unknown Server error'}`)
        }
        return result
    } catch (error) {
        alert(`API error ${error}`)
        throw error
    }
}
export const deleteCourseApi = async (id: string, token: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/courses/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': token
            },
        })
        const result = await response.json()
        if (!response.ok) {
            throw new Error(`Course deleting failed: ${result.result || 'Unknown Server error'}`)
        }
    } catch (error) {
        alert(`API error ${error}`)
        throw error
    }
}