import { createReducer } from "@reduxjs/toolkit";
import {
  addCourseToPlaylistFail,
  addCourseToPlaylistRequest,
  addCourseToPlaylistSuccess,
  addLectureFail,
  addLectureRequest,
  addLectureSuccess,
  clearError,
  clearMessage,
  createCourseFail,
  createCourseRequest,
  createCourseSuccess,
  deleteCourseFail,
  deleteCourseRequest,
  deleteCourseSuccess,
  deleteLectureFail,
  deleteLectureRequest,
  deleteLectureSuccess,
  getAllCoursesAdminFail,
  getAllCoursesAdminRequest,
  getAllCoursesAdminSuccess,
  getAllCoursesFail,
  getAllCoursesRequest,
  getAllCoursesSuccess,
  getCourseLecturesAdminFail,
  getCourseLecturesAdminRequest,
  getCourseLecturesAdminSuccess,
  removeCourseFromPlaylistFail,
  removeCourseFromPlaylistRequest,
  removeCourseFromPlaylistSuccess,
} from "../constants/courseConstanst";
import { ICourseDocument } from "../../utils/intrfaces";

interface IintialState {
  message?: string | null;
  error?: string | null;
  loading?: boolean;
  courses: ICourseDocument[];
  course?: ICourseDocument;
}

const initialState: IintialState = {
  courses: [],
};

export const courseReducer = createReducer(initialState, (builder) => {
  // createCourse function

  builder.addCase(createCourseRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(createCourseSuccess, (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });

  builder.addCase(createCourseFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  //getAllCourseAdmin Case

  builder.addCase(getAllCoursesAdminRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(getAllCoursesAdminSuccess, (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
    state.courses = action.payload.courses;
  });

  builder.addCase(getAllCoursesAdminFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  //getAllCourse Case

  builder.addCase(getAllCoursesRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(getAllCoursesSuccess, (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
    state.courses = action.payload.courses;
  });

  builder.addCase(getAllCoursesFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  //deleteCourseAdmin Case

  builder.addCase(deleteCourseRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(deleteCourseSuccess, (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });

  builder.addCase(deleteCourseFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  //getCourseLecturesAdmin Case

  builder.addCase(getCourseLecturesAdminRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(getCourseLecturesAdminSuccess, (state, action) => {
    state.loading = false;
    state.course = action.payload;
  });

  builder.addCase(getCourseLecturesAdminFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  //addCourseToPlaylistAdmin Case

  builder.addCase(addCourseToPlaylistRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(addCourseToPlaylistSuccess, (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });

  builder.addCase(addCourseToPlaylistFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  //removeCourseFromPlaylistAdmin Case

  builder.addCase(removeCourseFromPlaylistRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(removeCourseFromPlaylistSuccess, (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });

  builder.addCase(removeCourseFromPlaylistFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  //addLecturesCase

  builder.addCase(addLectureRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(addLectureSuccess, (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });

  builder.addCase(addLectureFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  //deleteLecturesCase

  builder.addCase(deleteLectureRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(deleteLectureSuccess, (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });

  builder.addCase(deleteLectureFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  //   // clear message && clear error

  builder.addCase(clearMessage, (state) => {
    state.message = null;
  });

  builder.addCase(clearError, (state) => {
    state.error = null;
  });
});
