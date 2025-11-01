import { Button } from "../../common/Button/Button";

import { BUTTON_ADD_NEW_COURSE_TEXT } from "../../constants";

import './EmptyCourseList.scss'

export const EmptyCourseList: React.FC = () => {
    return (
        <div className="emptyCourseList">
            <h3 className="emptyListTitle">Your List Is Empty</h3>
            <p className="emptyListText">Please use "Add New Course" button to add your first course</p>
            <Button buttonText={BUTTON_ADD_NEW_COURSE_TEXT} width='233px' height='50px' />
        </div>
    )
}