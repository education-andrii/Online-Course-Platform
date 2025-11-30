// import { Navigate } from "react-router-dom";
// interface Props {
//     children: React.ReactNode;
// }

// const PrivateRoute: React.FC<Props> = ({ children }) => {
//     const auth = localStorage.getItem('authToken');

//     return auth ? children : <Navigate to="/login" />
// }
// export default PrivateRoute

import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute: FC<{ children: React.ReactNode }> = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;