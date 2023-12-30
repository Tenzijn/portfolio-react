import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const [count, setCount] = useState(3); // [0, function
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  }, [count]);

  return (
    <div>
      <h1>Error 404</h1>
      <h1>Page Not Found</h1>
      <br />
      <h1>Redirecting to Home page... {count}</h1>
    </div>
  );
};

export default PageNotFound;
