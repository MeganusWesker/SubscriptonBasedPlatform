import axios from "axios";
import { server, AppDispatch } from "../store";
import {
  verifyUserFail,
  verifyUserRequest,
  verifyUserSuccess,
} from "../constants/userConstants";

export const register =
  (formData: FormData) => async (dispatch: AppDispatch) => {
    try {
      for (const [key, value] of formData) {
        console.log(key, value);
      }

      dispatch({
        type: "registerUserRequest",
      });

      const { data } = await axios.post(`${server}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      console.log(data);

      dispatch({
        type: "registerUserSuccess",
        payload: data.message,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "registerUserFail",
        payload: error.response.data.message,
      });
    }
  };

export const verifyUser =
  (email: string, otp: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: verifyUserRequest,
      });

      const { data } = await axios.post(
        `${server}/verify`,
        { email, otp },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(data);

      dispatch({
        type: verifyUserSuccess,
        payload: {
          user: data.user,
          message: data.message,
        },
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: verifyUserFail,
        payload: error.response.data.message,
      });
    }
  };

export const loginUser =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "loginUserRequest",
      });

      const { data } = await axios.post(
        `${server}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(data);

      dispatch({
        type: "loginUserSuccess",
        payload: {
          user: data.user,
          message: data.message,
        },
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "loginUserFail",
        payload: error.response.data.message,
      });
    }
  };

export const loadUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });

    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });

    dispatch({
      type: "loadUserSuccess",
      payload: {
        user: data.user,
      },
    });
  } catch (error: any) {
    console.log(error);
    dispatch({
      type: "loadUserFail",
      payload: error.response.data.message,
    });
  }
};

export const changePassword =
  (oldPassword: string, newPassword: string, confirmPassword: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "changePasswordRequest",
      });

      const { data } = await axios.put(
        `${server}/changePassword`,
        { oldPassword, newPassword, confirmPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "changePasswordSuccess",
        payload: data.message,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "changePasswordFail",
        payload: error.response.data.message,
      });
    }
  };

  export const changeProfile =
  (name: string, email: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "changeProfileRequest",
      });

      const { data } = await axios.put(
        `${server}/updateprofile`,
        {  name, email },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "changeProfileSuccess",
        payload: data.message,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "changeProfileFail",
        payload: error.response.data.message,
      });
    }
  };


  export const changePhoto =
  (formData: FormData) => async (dispatch: AppDispatch) => {
    try {


      dispatch({
        type: "changePhotoRequest",
      });

      const { data } = await axios.put(`${server}/updatePhoto`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      dispatch({
        type: "changePhotoSuccess",
        payload: data.message,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "changePhotoFail",
        payload: error.response.data.message,
      });
    }
  };

  export const Logout = () => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "logoutUserRequest",
      });
  
      const { data } = await axios.get(`${server}/logout`, {
        withCredentials: true,
      });
  
      dispatch({
        type: "logoutUserSuccess",
        payload:data.message,
      });
      
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "logoutUserFail",
        payload: error.response.data.message,
      });
    }
  };

  export const getAllUsers = () => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "getAllUsersRequest",
      });
  
      const { data } = await axios.get(`${server}/admin/users`, {
        withCredentials: true,
      });
  
      dispatch({
        type: "getAllUsersSuccess",
        payload: data.users,
      });

    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "getAllUsersFail",
        payload: error.response.data.message,
      });
    }
  };

  export const updateUser = (id:string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "updateUserRequest",
      });
  
      const { data } = await axios.get(`${server}/admin/updateUser/${id}`, {
        withCredentials: true,
      });
  
      dispatch({
        type: "updateUserSuccess",
        payload: data.message,
      });

    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "updateUserFail",
        payload: error.response.data.message,
      });
    }
  };

  export const deleteUser = (id:string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "deleteUserRequest",
      });
  
      const { data } = await axios.delete(`${server}/admin/user?id=${id}`, {
        withCredentials: true,
      });
  
      dispatch({
        type: "deleteUserSuccess",
        payload: data.message,
      });

    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "deleteUserFail",
        payload: error.response.data.message,
      });
    }
  };

  export const getDashboardStats = () => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "getAdminStatsRequest",
      });
  
      const { data } = await axios.get(`${server}/admin/getstats`, {
        withCredentials: true,
      });


      const payloadData={
        stats:data.stats,
        userProfit:data.userProfit,
        viewsProfit:data.viewsProfit,
        subscriptionsProfit:data.subscriptionsProfit,
        userPercentage:data.userPercentage,
        viewsPercentage:data.viewsPercentage,
        subscriptionsPercentage:data.subscriptionsPercentage,
        userCount:data.userCount,
        subscriptionsCount:data.subscriptionsCount,
        viewsCount:data.viewsCount
      }
  
      dispatch({
        type: "getAdminStatsSuccess",
        payload: payloadData,
      });

    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "getAdminStatsFail",
        payload: error.response.data.message,
      });
    }
  };



// export const verifyUser1=()=>{
//   return async(dispatch:AppDispatch)=>{
// same
//   }
// }
