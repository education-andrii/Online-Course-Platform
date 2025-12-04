import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Header from './components/Header/Header.tsx';
import Courses from './components/Courses/Courses.tsx';
import CourseInfo from './components/CourseInfo/CourseInfo.tsx';
import Registration from './components/Registration/Registration.tsx';
import Login from './components/Login/Login.tsx';
import CreateCourse from './components/CreateCourse/CreateCourse.tsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.tsx';
import PublicRoute from './components/PublicRoute/PublicRoute.tsx';

import './App.scss'


function App() {

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<PrivateRoute><Navigate to='/courses' replace /></PrivateRoute>} />
          <Route path='/courses' element={<PrivateRoute><Courses></Courses></PrivateRoute>} />
          <Route path='/courses/:courseId' element={<PrivateRoute><CourseInfo /></PrivateRoute>} />
          <Route path='/registration' element={<PublicRoute><Registration /></PublicRoute>} />
          <Route path='/courses/add' element={<PrivateRoute><CreateCourse /></PrivateRoute>} />
          <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
          <Route path='*' element={<PublicRoute><Navigate to='/login' replace /></PublicRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


