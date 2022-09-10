import './App.css';
import React, { useContext } from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Login from './login/login'
import { AuthContext } from './auth/AuthContext';
import Home from './home/home';

function App() {
  const {currentUser} = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<RequireAuth><Home/></RequireAuth>} />
        </Routes>
    </Router>
  );
}

export default App;
