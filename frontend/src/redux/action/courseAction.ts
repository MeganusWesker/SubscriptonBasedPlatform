import axios from "axios";
import { server, AppDispatch } from "../store";

export const createCourse =
  (formData: FormData) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "createCourseRequest",
      });

      const { data } = await axios.post(
        `${server}/course/createcourse`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "createCourseSuccess",
        payload: data.message,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "createCourseFail",
        payload: error.response.data.message,
      });
    }
  };

export const getAllCoursesAdmin = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: "getAllCoursesAdminRequest",
    });

    const { data } = await axios.get(`${server}/course/courses`, {
      withCredentials: true,
    });


 

    dispatch({
      type: "getAllCoursesAdminSuccess",
      payload: {
        courses: data.courses,
      },
    });
  } catch (error: any) {
    console.log(error);
    dispatch({
      type: "getAllCoursesAdminFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllCourses = (keyword:string,category:string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: "getAllCoursesRequest",
    });

    const { data } = await axios.get(`${server}/course/courses?keyword=${keyword}&category=${category}`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllCoursesSuccess",
      payload: {
        courses: data.courses,
      },
    });
  } catch (error: any) {
    console.log(error);
    dispatch({
      type: "getAllCoursesFail",
      payload: error.response.data.message,
    });
  }
};

export const addCourseToPlaylist = (id:string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: "addCourseToPlaylistRequest",
    });

    const { data } = await axios.post(`${server}/addToPlaylist`,{id}, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({
      type: "addCourseToPlaylistSuccess",
      payload: data.message,
    });
  } catch (error: any) {
    console.log(error);
    dispatch({
      type: "addCourseToPlaylistFail",
      payload: error.response.data.message,
    });
  }
};

export const removeCourseFromPlaylist = (id:string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: "removeCourseFromPlaylistRequest",
    });

    const { data } = await axios.delete(`${server}/removefromplaylist?id=${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "removeCourseFromPlaylistSuccess",
      payload: data.message,
    });
  } catch (error: any) {
    console.log(error);
    dispatch({
      type: "removeCourseFromPlaylistFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteCourse = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: "deleteCourseRequest",
    });

    const { data } = await axios.delete(`${server}/course/course/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "deleteCourseSuccess",
      payload: data.message,
    });
  } catch (error: any) {
    console.log(error);
    dispatch({
      type: "deleteCourseFail",
      payload: error.response.data.message,
    });
  }
};

export const getCourseLecturesAdmin =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "getCourseLecturesAdminRequest",
      });

      const { data } = await axios.get(
        `${server}/course/getcourselectures/${id}`,
        {
          withCredentials: true,
        }
      );

      dispatch({
        type: "getCourseLecturesAdminSuccess",
        payload: data.course,
      });
    } catch (error: any) {
      dispatch({
        type: "getCourseLecturesAdminFail",
        payload: error.response.data.message,
      });
    }
  };

export const addLecture =
  (form: FormData, id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "addLectureRequest",
      });

      const { data } = await axios.post(`${server}/course/course/${id}`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      dispatch({
        type: "addLectureSuccess",
        payload: data.message,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "addLectureFail",
        payload: error.response.data.message,
      });
    }
  };

export const deleteLecture =
  (courseId: string, lectureId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "deleteLectureRequest",
      });

      const { data } = await axios.delete(
        `${server}/course/deletelecture?courseId=${courseId}&lectureId=${lectureId}`,
        {
          withCredentials: true,
        }
      );

      dispatch({
        type: "deleteLectureSuccess",
        payload: data.message,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "deleteLectureFail",
        payload: error.response.data.message,
      });
    }
  };
