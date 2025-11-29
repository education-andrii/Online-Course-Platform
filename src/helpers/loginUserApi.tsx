// import { useEffect, useState } from "react";

// function useLoginUserApi(loginData: { email: string, password: string }) {
//     const [token, setToken] = useState([]);

//     const getToken = async () => {
//         const response = await fetch('http://localhost:4000/login', {
//             method: 'POST',
//             body: JSON.stringify(loginData),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })
//         const result = await response.json()

//         setToken(result)
//     }
//     useEffect(() => {
//         getToken()
//     }, [loginData])

//     return token
// }
// export default useLoginUserApi;
const loginUserApi = async (loginData: { email: string, password: string }) => {

    try {
        const response = await fetch('http://localhost:4000/login', {
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