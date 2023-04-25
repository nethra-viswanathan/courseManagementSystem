import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import HomeStudent from './components/HomeStudent/HomeStudent';
import InstructorStudent from './components/InstructorStudent/InstructorStudent';
import Assignments from './components/Assignments/Assignments';
import SingleAssignment from './components/SingleAssignment/SingleAssignment';
import SignInInstructor from './components/SignInInstructor/SignInInstructor';
import SignUpIns from './components/SignUpIns/SignUpIns.jsx'
import InstructorDashboard from './components/InstructorDashboard/InstructorDashboard';
import AddCourse from './components/AddCourse/AddCourse';
import InstructorAssignments from './components/InstructorAssignments/InstructorAssignments';
import AddAssignments from './components/AddAssignment/AddAssignment';
import ViewStudentsInCourse from './components/ViewStudentsInCourse/ViewStudentsInCourse';
import InstructorSingleAssignment from './components/InstructorSingleAssignment/InstructorSingleAssignment';
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/SignIn" />} />
          <Route path="/SignIn" element={< SignIn />} />
          <Route path="/SignUp" element={< SignUp />} />
          <Route path="/InstructorSignin" element={< SignInInstructor />} />
          <Route path="/InstructorSignUp" element={< SignUpIns />} />
          <Route path="/StudentDashboard" element={< HomeStudent />} />
          <Route path="/InstructorDashboard" element={< InstructorDashboard />} />
          <Route path="/InstructorBasedCourses" element={< InstructorStudent />} />
          <Route path="/AssignmentList" element={< Assignments />} />
          <Route path="/Assignment" element={< SingleAssignment />} />
          <Route path="/AddCourse" element={< AddCourse />} />
          <Route path="/ViewAssignments/:id" element={< InstructorAssignments />} />
          <Route path="/AddAssignments" element={< AddAssignments />} />
          <Route path="/ViewStudentsInAssignment" element={< ViewStudentsInCourse />} />
          <Route path="/ViewSubmission" element={< InstructorSingleAssignment />} />
        </Routes>
      </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
