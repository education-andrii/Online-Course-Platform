import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header/Header.tsx';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList.tsx';
import Courses from './components/Courses/Courses.tsx';
import CourseInfo from './components/CourseInfo/CourseInfo.tsx';
import Registration from './components/Registration/Registration.tsx';
import Login from './components/Login/Login.tsx';
import CreateCourse from './components/CreateCourse/CreateCourse.tsx';

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

  let isEmpty: boolean = createdCourses.length === 0;

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Navigate to='/courses' replace />} />
          <Route path='/courses' element={isEmpty ? <EmptyCourseList></EmptyCourseList> : <Courses authors={createdCoursesAuthors} courses={createdCourses}
          ></Courses>} />
          <Route path='/courses/:courseId' element={<CourseInfo allAuthors={createdCoursesAuthors} allCourses={createdCourses} />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/add' element={<CreateCourse onDataSubmit={handleCoursesData} />} />
          <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


