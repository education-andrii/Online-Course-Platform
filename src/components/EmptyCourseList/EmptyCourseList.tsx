import { Link } from "react-router-dom";

import Button from "../../common/Button/Button";

import { BUTTON_ADD_NEW_COURSE_TEXT } from "../../constants";

import './EmptyCourseList.scss'

const EmptyCourseList: React.FC = () => {
    return (
        <div className="emptyCourseList">
            <h1 className="emptyListTitle">Course List is Empty</h1>
            <p className="emptyListText">Please use "Add New Course" button to add your first course</p>
            <Link to="courses/add"><Button className='emptyCourseListButton' buttonText={BUTTON_ADD_NEW_COURSE_TEXT} width='233px' height='50px' /></Link>
        </div>
    )
}
export default EmptyCourseList;