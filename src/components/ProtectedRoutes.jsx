import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div>
      <h1>Protected Routes</h1>
      <Outlet />
      <button onClick={() => setIsAuthenticated(false)}>Logout</button>
    </div>
  );
}

export default ProtectedRoutes;
