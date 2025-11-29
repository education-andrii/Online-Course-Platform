import { Navigate } from "react-router-dom";
interface Props {
    children: React.ReactNode;
}

const AuthorizedRoute: React.FC<Props> = ({ children }) => {
    const auth = localStorage.getItem('authToken');

    return auth ? children : <Navigate to="/login" />
}
export default AuthorizedRoute