import { Header } from './components/Header/Header.tsx';
import { CourseCard } from './components/Courses/components/CourseCard/CourseCard'; //temporary
import { EmptyCourseList } from './components/EmptyCourseList/EmptyCourseList.tsx'; //temporary
import { Courses } from './components/Courses/Courses.tsx';
import { CourseInfo } from './components/CourseInfo/CourseInfo.tsx'; //temporary

import { getCourseDuration } from './helpers/getCourseDuration.ts';
import { formatCreationDate } from './helpers/formatCreationDate.ts';

import { mockedCoursesList } from './constants.ts';
import { mockedAuthorsList } from './constants.ts';

import './App.scss'


function App() {

  // const getAutorsArray = (authorId: string[]): string[] => {
  //   const authorsArray = mockedAuthorsList.filter((author) => authorId.includes(author.id));
  //   return authorsArray.map((author) => author.name);
  // }


  let isEmpty = false;
  if (mockedCoursesList.length === 0) {
    isEmpty = true;
  }

  return (
    <div className="App">
      <Header></Header>
      {/* {isEmpty ? <EmptyCourseList></EmptyCourseList> : <Courses authors={mockedAuthorsList} courses={mockedCoursesList}></Courses>} */}
      {<CourseInfo id={'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba'}
        title={'JavaScript'}
        description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
        creationDate={'08.03.2021'}
        duration={'02:40 hours'}
        authors={'Nicolas Kim, Valentina Larina'} />}
    </div>
  );
}

export default App;


