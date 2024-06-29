import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Component /> : <Navigate to="/signup" />} // Use Navigate for redirection
    />
  );
};

export default PrivateRoute;
