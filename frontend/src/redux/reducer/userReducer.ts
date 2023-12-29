import { createReducer } from "@reduxjs/toolkit";
import {
  changePasswordFail,
  changePasswordRequest,
  changePasswordSuccess,
  changePhotoFail,
  changePhotoRequest,
  changePhotoSuccess,
  changeProfileFail,
  changeProfileRequest,
  changeProfileSuccess,
  clearError,
  clearMessage,
  deleteUserFail,
  deleteUserRequest,
  deleteUserSuccess,
  getAdminStatsFail,
  getAdminStatsRequest,
  getAdminStatsSuccess,
  getAllUsersFail,
  getAllUsersRequest,
  getAllUsersSuccess,
  loadUserFail,
  loadUserRequest,
  loadUserSuccess,
  loginUserFail,
  loginUserRequest,
  loginUserSuccess,
  logoutUserFail,
  logoutUserRequest,
  logoutUserSuccess,
  registerUserFail,
  registerUserRequest,
  registerUserSuccess,
  updateUserFail,
  updateUserRequest,
  updateUserSuccess,
  verifyUserFail,
  verifyUserRequest,
  verifyUserSuccess,
} from "../constants/userConstants";
import { IStatsDocument, UserDocument } from "../../utils/intrfaces";

interface IintialState {
  isAuthenticated: boolean;
  user?: UserDocument;
  message?: string | null;
  error?: string | null;
  registerLoading?: boolean;
  verifyLoading?: boolean;
  loginLoading?: boolean;
  loading?: boolean;
  changePasswordLoading?: boolean;
  updateProfileLoading?: boolean;
  users: UserDocument[];
  adminLoading?: boolean;

  stats:IStatsDocument[];
  userProfit?:boolean;
  viewsProfit?:boolean;
  subscriptionsProfit?:boolean;
  userPercentage?:number;
  viewsPercentage?:number;
  subscriptionsPercentage?:number;
  userCount?:number;
  subscriptionsCount?:number;
  viewsCount?:number;
}

const initialState: IintialState = {
  isAuthenticated: false,
  users: [],
  stats:[],
};

export const userReducer = createReducer(initialState, (builder) => {
  // register function
  builder.addCase(registerUserRequest, (state) => {
    state.registerLoading = true;
    state.isAuthenticated = false;
  });

  builder.addCase(registerUserSuccess, (state, action) => {
    state.registerLoading = false;
    state.isAuthenticated = false;
    state.message = action.payload;
  });

  builder.addCase(registerUserFail, (state, action) => {
    state.registerLoading = false;
    state.error = action.payload;
  });

  //verifyCase
  builder.addCase(verifyUserRequest, (state) => {
    state.verifyLoading = true;
    state.isAuthenticated = false;
  });

  builder.addCase(verifyUserSuccess, (state, action) => {
    state.registerLoading = false;
    state.isAuthenticated = true;
    console.log(action.payload);
    state.message = action.payload.message;
    state.user = action.payload.user;
  });

  builder.addCase(verifyUserFail, (state, action) => {
    state.registerLoading = false;
    state.error = action.payload;
  });

  //loginUserCase
  builder.addCase(loginUserRequest, (state) => {
    state.loginLoading = true;
    state.isAuthenticated = false;
  });

  builder.addCase(loginUserSuccess, (state, action) => {
    state.loginLoading = false;
    state.isAuthenticated = true;
    console.log(action.payload);
    state.message = action.payload.message;
    state.user = action.payload.user;
  });

  builder.addCase(loginUserFail, (state, action) => {
    state.loginLoading = false;
    state.error = action.payload;
  });

  //loadUserCase
  builder.addCase(loadUserRequest, (state) => {
    state.loading = true;
    state.isAuthenticated = false;
  });

  builder.addCase(loadUserSuccess, (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
  });

  builder.addCase(loadUserFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  //changePasswordCase
  builder.addCase(changePasswordRequest, (state) => {
    state.changePasswordLoading = true;
  });

  builder.addCase(changePasswordSuccess, (state, action) => {
    state.changePasswordLoading = false;
    state.message = action.payload;
  });

  builder.addCase(changePasswordFail, (state, action) => {
    state.changePasswordLoading = false;
    state.error = action.payload;
  });

  //changeProfileCase
  builder.addCase(changeProfileRequest, (state) => {
    state.updateProfileLoading = true;
  });

  builder.addCase(changeProfileSuccess, (state, action) => {
    state.updateProfileLoading = false;
    state.message = action.payload;
  });

  builder.addCase(changeProfileFail, (state, action) => {
    state.updateProfileLoading = false;
    state.error = action.payload;
  });

  //changePhotoCase
  builder.addCase(changePhotoRequest, (state) => {
    state.updateProfileLoading = true;
  });

  builder.addCase(changePhotoSuccess, (state, action) => {
    state.updateProfileLoading = false;
    state.message = action.payload;
  });

  builder.addCase(changePhotoFail, (state, action) => {
    state.updateProfileLoading = false;
    state.error = action.payload;
  });

  //logoutUserCase
  builder.addCase(logoutUserRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(logoutUserSuccess, (state, action) => {
    state.loading = false;
    state.message = action.payload;
    state.isAuthenticated = false;
  });

  builder.addCase(logoutUserFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  //getAllUsersCase
  builder.addCase(getAllUsersRequest, (state) => {
    state.adminLoading = true;
  });

  builder.addCase(getAllUsersSuccess, (state, action) => {
    state.adminLoading = false;
    state.users = action.payload;
  });

  builder.addCase(getAllUsersFail, (state, action) => {
    state.adminLoading = false;
    state.error = action.payload;
  });

  //udpaeUserCase
  builder.addCase(updateUserRequest, (state) => {
    state.adminLoading = true;
  });

  builder.addCase(updateUserSuccess, (state, action) => {
    state.adminLoading = false;
    state.message = action.payload;
  });

  builder.addCase(updateUserFail, (state, action) => {
    state.adminLoading = false;
    state.error = action.payload;
  });

  //deleteUserCase
  builder.addCase(deleteUserRequest, (state) => {
    state.adminLoading = true;
  });

  builder.addCase(deleteUserSuccess, (state, action) => {
    state.adminLoading = false;
    state.message = action.payload;
  });

  builder.addCase(deleteUserFail, (state, action) => {
    state.adminLoading = false;
    state.error = action.payload;
  });

  //getDashboardStatsCase
  builder.addCase(getAdminStatsRequest, (state) => {
    state.adminLoading = true;
  });

  builder.addCase(getAdminStatsSuccess, (state, action) => {
    state.adminLoading = false;
    state.userProfit = action.payload.userProfit;
    state.viewsProfit = action.payload.viewsProfit;
    state.subscriptionsProfit = action.payload.subscriptionsProfit;
    state.userPercentage = action.payload.userPercentage;
    state.viewsPercentage = action.payload.viewsPercentage;
    state.subscriptionsPercentage = action.payload.subscriptionsPercentage;
    state.userCount = action.payload.userCount;
    state.subscriptionsCount = action.payload.subscriptionsCount;
    state.viewsCount = action.payload.viewsCount;
    state.stats = action.payload.stats;
  });

  builder.addCase(getAdminStatsFail, (state, action) => {
    state.adminLoading = false;
    state.error = action.payload;
  });

  // clear message && clear error

  builder.addCase(clearMessage, (state) => {
    state.message = null;
  });

  builder.addCase(clearError, (state) => {
    state.error = null;
  });
});
