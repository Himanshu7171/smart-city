import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/register';
import Login from './components/Login';
import Home from './components/Home';
import Student from './components/student';
import Hospital from './components/hospital';
import Tourism from './components/tourism';
import History from './components/history';
import Feedback from './components/feedback';

import './components/Auth.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Smart City Authentication</h1>
        <Routes>
          {/* Define the routes for login and registration */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Define the route for the Home component */}
          <Route path="/home" element={<Home />} />

          {/* Define the routes for Student, Hospital, Tourism, History, and Feedback sections */}
          <Route path="/student" element={<Student />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/history" element={<History />} />
          <Route path="/feedback" element={<Feedback />} />

        

          {/* Redirect to login page if no path matches */}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
