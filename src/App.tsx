import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header/Header.tsx';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList.tsx';
import Courses from './components/Courses/Courses.tsx';
import CourseInfo from './components/CourseInfo/CourseInfo.tsx';
import Registration from './components/Registration/Registration.tsx';
import Login from './components/Login/Login.tsx';
import CreateCourse from './components/Courses/components/CreateCourse/CreateCourse.tsx';

import { mockedCoursesList } from './constants.ts';
import { mockedAuthorsList } from './constants.ts';

import { CoursesType } from "./components/Courses/Courses.tsx";
import { AuthorsType } from './components/Courses/Courses.tsx';

import './App.scss'

type CreatedCourses = CoursesType[]

type CreatedCoursesAuthors = AuthorsType[];

function App() {

  const [createdCourses, setCreatedCourses] = useState<CreatedCourses>(mockedCoursesList)

  const [createdCoursesAuthors, setCreatedCoursesAuthors] = useState<CreatedCoursesAuthors>([])

  const handleCoursesData = (newCourse: CreatedCourses[number]) => {
    setCreatedCourses((prevCourses) => ([...prevCourses, newCourse]))
  }

  let isEmpty: boolean = createdCourses.length === 0;
  // if (mockedCoursesList.length === 0) {
  //   isEmpty = true;
  // }

  // alert(createdCourses[0])
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={isEmpty ? <EmptyCourseList></EmptyCourseList> : <Courses authors={mockedAuthorsList} courses={createdCourses}></Courses>} />
          <Route path='/course-info' element={<CourseInfo id={'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba'}
            title={'JavaScript'}
            description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
            creationDate={'08.03.2021'}
            duration={'02:40 hours'}
            authors={'Nicolas Kim, Valentina Larina'} />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create-course' element={<CreateCourse onDataSubmit={handleCoursesData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


