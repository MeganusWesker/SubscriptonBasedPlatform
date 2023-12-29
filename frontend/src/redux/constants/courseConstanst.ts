import { createAction} from "@reduxjs/toolkit"
import { ICourseDocument } from "../../utils/intrfaces";

interface ICombinedCourses{
    courses:ICourseDocument[],
    message?:string,
}

// createCourseConstants 
export const createCourseRequest = createAction<void>('createCourseRequest');
export const createCourseFail = createAction<string>('createCourseFail');
export const createCourseSuccess = createAction<string>('createCourseSuccess');

// addCourseToPlaylistConstants 
export const addCourseToPlaylistRequest = createAction<void>('addCourseToPlaylistRequest');
export const addCourseToPlaylistFail = createAction<string>('addCourseToPlaylistFail');
export const addCourseToPlaylistSuccess = createAction<string>('addCourseToPlaylistSuccess');

// removeCourseFromPlaylistConstants 
export const removeCourseFromPlaylistRequest = createAction<void>('removeCourseFromPlaylistRequest');
export const removeCourseFromPlaylistFail = createAction<string>('removeCourseFromPlaylistFail');
export const removeCourseFromPlaylistSuccess = createAction<string>('removeCourseFromPlaylistSuccess');

// deleteCourseConstants 
export const deleteCourseRequest = createAction<void>('deleteCourseRequest');
export const deleteCourseFail = createAction<string>('deleteCourseFail');
export const deleteCourseSuccess = createAction<string>('deleteCourseSuccess');

// addLectureConstants 
export const addLectureRequest = createAction<void>('addLectureRequest');
export const addLectureFail = createAction<string>('addLectureFail');
export const addLectureSuccess = createAction<string>('addLectureSuccess');

// deleteLectureConstants 
export const deleteLectureRequest = createAction<void>('deleteLectureRequest');
export const deleteLectureFail = createAction<string>('deleteLectureFail');
export const deleteLectureSuccess = createAction<string>('deleteLectureSuccess');

// getAllCourses
export const getAllCoursesRequest = createAction<void>('getAllCoursesRequest');
export const getAllCoursesFail = createAction<string>('getAllCoursesFail');
export const getAllCoursesSuccess = createAction<ICombinedCourses>('getAllCoursesSuccess');


// getAllCoursesAdmin
export const getAllCoursesAdminRequest = createAction<void>('getAllCoursesAdminRequest');
export const getAllCoursesAdminFail = createAction<string>('getAllCoursesAdminFail');
export const getAllCoursesAdminSuccess = createAction<ICombinedCourses>('getAllCoursesAdminSuccess');

// getCourseLecturesAdmin
export const getCourseLecturesAdminRequest = createAction<void>('getCourseLecturesAdminRequest');
export const getCourseLecturesAdminFail = createAction<string>('getCourseLecturesAdminFail');
export const getCourseLecturesAdminSuccess = createAction<ICourseDocument>('getCourseLecturesAdminSuccess');

// clearMessage && clearError constants
export const clearMessage = createAction<void>('clearMessage');
export const clearError = createAction<void>('clearError');