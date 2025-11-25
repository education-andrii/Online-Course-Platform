import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

  const [clickedCourse, setClickedCourse] = useState<CoursesType>({
    id: '',
    title: '',
    description: '',
    creationDate: '',
    duration: 0,
    authors: []
  })

  const handleCoursesData = (newCourse: CreatedCourses[number], newAuthors: CreatedCoursesAuthors) => {
    setCreatedCourses((prevCourses) => ([...prevCourses, newCourse]))
    setCreatedCoursesAuthors((prevAuthors) => ([...prevAuthors, ...newAuthors]))
  }

  const handleCourseInfoData = (course: CoursesType) => {
    setClickedCourse(course)
  }

  let isEmpty: boolean = createdCourses.length === 0;

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={isEmpty ? <EmptyCourseList></EmptyCourseList> : <Courses authors={createdCoursesAuthors} courses={createdCourses}
            onDataSubmit={handleCourseInfoData}></Courses>} />
          <Route path='/course-info' element={<CourseInfo course={clickedCourse} />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create-course' element={<CreateCourse onDataSubmit={handleCoursesData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


