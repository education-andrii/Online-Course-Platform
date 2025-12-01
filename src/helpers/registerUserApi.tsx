
const registerUserApi = async (newUser: { name: string, email: string, password: string }) => {

    try {
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const result = await response.json();

        if (!response.ok) {
            console.log(`Registration failed: ${result.errors || 'Unknown Server error'}`)
            throw new Error(`Registration failed: ${result.errors || 'Unknown Server error'}`);
        }
        return result
    } catch (error) {
        throw error;
    }
}

export default registerUserApi;