export const getCoursesApi = async () => {
    try {
        const response = await fetch('http://localhost:4000/courses/all')
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
        const response = await fetch('http://localhost:4000/authors/all')
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
        const response = await fetch(`http://localhost:4000/courses/${id}`, {
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