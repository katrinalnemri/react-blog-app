import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../contexts/AuthContext';

const LoggedRoute = ({children}) => {
    const { isAuthenticated } = useAuthContext();
    
    if (isAuthenticated) {
        return <Navigate to="/my-posts" replace />
    }

    return children ? children : <Outlet />  
};

export default LoggedRoute;
