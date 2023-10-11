import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Students from './Students';
import Courses from './Courses';

function App() {
  // const [route, setRoute] = useState('students');

  return (
    <Router>
      <h1>Student Information Management System</h1>
      <div className="App">
        <nav>
          <ul>
            <li>
              <a href="/students">Students</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/courses" element={<Courses />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;