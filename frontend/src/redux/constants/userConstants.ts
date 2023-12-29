import { createAction} from "@reduxjs/toolkit"
import { IStatsDocument, UserDocument } from "../../utils/intrfaces";

interface ICombinedUser{
    user:UserDocument;
    message?:string;
}


interface IAdminDashBoardStats{
      stats:IStatsDocument[];
      userProfit:boolean;
      viewsProfit:boolean;
      subscriptionsProfit:boolean;
      userPercentage:number;
      viewsPercentage:number;
      subscriptionsPercentage:number;
      userCount:number;
      subscriptionsCount:number;
      viewsCount:number;
}



// registerConstants 
export const registerUserRequest = createAction<void>('registerUserRequest');
export const registerUserFail = createAction<string>('registerUserFail');
export const registerUserSuccess = createAction<string>('registerUserSuccess');

// verifyConstants

export const verifyUserRequest = createAction<void>('verifyUserRequest');
export const verifyUserFail = createAction<string>('verifyUserFail');
export const verifyUserSuccess = createAction<ICombinedUser>('verifyUserSuccess');

// loginConstants 
export const loginUserRequest = createAction<void,'loginUserRequest'>('loginUserRequest');
export const loginUserFail = createAction<string,"loginUserFail">('loginUserFail');
export const loginUserSuccess = createAction<ICombinedUser,"loginUserSuccess">('loginUserSuccess');

//laodUserConstants
export const loadUserRequest = createAction<void>('loadUserRequest');
export const loadUserFail = createAction<string>('loadUserFail');
export const loadUserSuccess = createAction<ICombinedUser>('loadUserSuccess');


//changePasswordConstants
export const changePasswordRequest = createAction<void>('changePasswordRequest');
export const changePasswordFail = createAction<string>('changePasswordFail');
export const changePasswordSuccess = createAction<string>('changePasswordSuccess');

//changeProfileConstants
export const changeProfileRequest = createAction<void>('changeProfileRequest');
export const changeProfileFail = createAction<string>('changeProfileFail');
export const changeProfileSuccess = createAction<string>('changeProfileSuccess');

//changePhotoConstants
export const changePhotoRequest = createAction<void>('changePhotoRequest');
export const changePhotoFail = createAction<string>('changePhotoFail');
export const changePhotoSuccess = createAction<string>('changePhotoSuccess');

//logoutUserConstants
export const logoutUserRequest = createAction<void>('logoutUserRequest');
export const logoutUserFail = createAction<string>('logoutUserFail');
export const logoutUserSuccess = createAction<string>('logoutUserSuccess');

//updateUserConstants
export const updateUserRequest = createAction<void>('updateUserRequest');
export const updateUserFail = createAction<string>('updateUserFail');
export const updateUserSuccess = createAction<string>('updateUserSuccess');

//deleteUserConstants
export const deleteUserRequest = createAction<void>('deleteUserRequest');
export const deleteUserFail = createAction<string>('deleteUserFail');
export const deleteUserSuccess = createAction<string>('deleteUserSuccess');


//admin routes

// getAllUsersConstants 
export const getAllUsersRequest = createAction<void>('getAllUsersRequest');
export const getAllUsersFail = createAction<string>('getAllUsersFail');
export const getAllUsersSuccess = createAction<UserDocument[]>('getAllUsersSuccess');

export const getAdminStatsRequest = createAction<void>('getAdminStatsRequest');
export const getAdminStatsFail = createAction<string>('getAdminStatsFail');
export const getAdminStatsSuccess = createAction<IAdminDashBoardStats>('getAdminStatsSuccess');

// clearMessage && clearError constants
export const clearMessage = createAction<void>('clearMessage');
export const clearError = createAction<void>('clearError');
