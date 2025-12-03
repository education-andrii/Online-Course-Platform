import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './components/Header/Header.tsx';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList.tsx';
import Courses from './components/Courses/Courses.tsx';
import CourseInfo from './components/CourseInfo/CourseInfo.tsx';
import Registration from './components/Registration/Registration.tsx';
import Login from './components/Login/Login.tsx';
import CreateCourse from './components/CreateCourse/CreateCourse.tsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.tsx';
import PublicRoute from './components/PublicRoute/PublicRoute.tsx';

import { mockedCoursesList } from './constants.ts';
import { mockedAuthorsList } from './constants.ts';

import { CoursesType } from "./components/Courses/Courses.tsx";
import { AuthorsType } from './components/Courses/Courses.tsx';

import './App.scss'

type CreatedCourses = CoursesType[]

type CreatedCoursesAuthors = AuthorsType[];

function App() {

  const [createdCourses, setCreatedCourses] = useState<CreatedCourses>(mockedCoursesList)

  const [createdCoursesAuthors, setCreatedCoursesAuthors] = useState<CreatedCoursesAuthors>(mockedAuthorsList)

  const handleCoursesData = (newCourse: CreatedCourses[number], newAuthors: CreatedCoursesAuthors) => {
    setCreatedCourses((prevCourses) => ([...prevCourses, newCourse]))
    setCreatedCoursesAuthors((prevAuthors) => ([...prevAuthors, ...newAuthors]))
  }

  const [isAuthorized, setIsAuthorized] = useState(!!localStorage.getItem('token'));

  const handleLogIn = (token: string, userName: string) => {
    localStorage.setItem('token', token)
    localStorage.setItem('user', userName)
    setIsAuthorized(true)
  }

  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthorized(false)
  }

  const [isCourseListEmpty, setIsCourseListEmpty] = useState(createdCourses.length === 0)
  useEffect(() => {
    setIsCourseListEmpty(createdCourses.length === 0)
  }, [createdCourses])


  return (
    <Router>
      <div className="App">
        <Header isAuthorized={isAuthorized} onLogOut={handleLogOut}></Header>
        <Routes>
          <Route path='/' element={<PrivateRoute><Navigate to='/courses' replace /></PrivateRoute>} />
          <Route path='/courses' element={<PrivateRoute>{
            isCourseListEmpty ? <EmptyCourseList></EmptyCourseList> : <Courses authors={createdCoursesAuthors} courses={createdCourses}></Courses>
          }</PrivateRoute>} />
          <Route path='/courses/:courseId' element={<PrivateRoute><CourseInfo allAuthors={createdCoursesAuthors} allCourses={createdCourses} /></PrivateRoute>} />
          <Route path='/registration' element={<PublicRoute><Registration /></PublicRoute>} />
          <Route path='courses/add' element={<PrivateRoute><CreateCourse onDataSubmit={handleCoursesData} /></PrivateRoute>} />
          <Route path='/login' element={<PublicRoute><Login onLogIn={handleLogIn} /></PublicRoute>} />
          <Route path='*' element={<PublicRoute><Navigate to='/login' replace /></PublicRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


