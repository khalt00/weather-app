import {
	useLocation,
	Navigate,
} from "react-router-dom";

import { useUserState } from 'stores/userState';

interface Props { 
  children: JSX.Element
}

function RequireAuth({ children }: Props) {
    let location = useLocation();
    const { token } = useUserState();
    if (!token && location.pathname !== '/login') {
      // redirect to /login, but save the current location to redirect after user login successfully
      return <Navigate to="/login" state={{ from: location }} replace />;
    } else if (token && location.pathname === '/login') {
      // if already loged in, redirect to dashboard
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  
    return children;
}

export default RequireAuth