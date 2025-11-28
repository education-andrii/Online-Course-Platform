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
// export default useFetchRegistration;