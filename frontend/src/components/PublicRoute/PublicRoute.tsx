import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute: FC<{ children: React.ReactNode }> = ({ children }) => {
    const token = localStorage.getItem('token');
    return !token ? <>{children}</> : <Navigate to="/courses" replace />;
};

export default PublicRoute;