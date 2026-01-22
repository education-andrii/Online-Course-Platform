const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const registerUserApi = async (newUser: { name: string, email: string, password: string }) => {

    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const result = await response.json();

        if (!response.ok) {
            alert(`Registration failed: ${result.errors.join(', ') || 'Unknown Server error'}`)
            throw new Error(`Registration failed: ${result.errors.join(', ') || 'Unknown Server error'}`);
            // return { successful: false }
        }
        return result
    } catch (error) {
        throw error;
    }
}

export default registerUserApi;