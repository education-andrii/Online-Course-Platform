import { Header } from './components/Header/Header.tsx';
import { CourseCard } from './components/Courses/components/CourseCard/CourseCard'; //temporary

import { formatCreationDate } from './helpers/formatCreationDate.ts';

import './App.scss'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CourseCard duration={formatCreationDate(550)}></CourseCard>
    </div>
  );
}

export default App;


