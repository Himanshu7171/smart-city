import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 


function Home() {
  return (
    <div className="homepage-container">
    {/* Navigation Bar */}
    <header className="navbar">
      <div className="logo">
        <h1>Smart City</h1>
      </div>
      <nav>
        <ul>
          {/* Link components for proper navigation using react-router */}
          <li><Link to="/student">Student</Link></li>
          <li><Link to="/hospital">Hospital</Link></li>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/tourism">Tourism</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
        </ul>
      </nav>
    </header>

    {/* Main Content */}
    <main>
      <section className="intro">
        <h2>Welcome to the Smart City Project</h2>
        <p>This platform provides services for students, hospitals, tourism, and historical information.</p>
      </section>
    </main>

    {/* Footer */}
    <footer>
      <p>Connect with us on:</p>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="path-to-instagram-logo.png" alt="Instagram" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="path-to-twitter-logo.png" alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="path-to-linkedin-logo.png" alt="LinkedIn" />
        </a>
      </div>
      <p>&copy; 2024 Smart City Project</p>
    </footer>
  </div>
);
}



export default Home;
