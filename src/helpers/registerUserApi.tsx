// import { useState, useEffect } from "react";

// async function useFetchRegistration(newUser: object, url: string) {
//     const [data, setData] = useState({});
//     setData(newUser);

//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             body: JSON.stringify(newUser),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         });
//         if (!response.ok) {
//             throw new Error(`HTTP error ${response.status}`)
//         }

//         const result = await response.json();
//         setData(result)
//         return data;

//     } catch (error) {
//         alert(`An error occurred ${error}`)
//         throw error
//     }
// }

// function useRegistration() {
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
            alert(`Registration failed: ${result.errors.join(', ') || 'Unknown Server error'}`)
            return null;
        }
        return result
    } catch (error) {
        alert(`An error occurred ${error}`)
        throw error;
    }
}

//     return { registerUser }
// }
// export default useRegistration;
export default registerUserApi;