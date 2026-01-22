const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const loginUserApi = async (loginData: { email: string, password: string }) => {

    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const result = await response.json();

        if (!response.ok) {
            alert(`Login failed: ${result.result || 'Unknown Server error'}`)
            return result;
        }
        return result
    } catch (error) {
        alert(`An error occurred ${error}`)
        throw error;
    }
}
export default loginUserApi;