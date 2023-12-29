import { configureStore } from '@reduxjs/toolkit'
import {userReducer} from "./reducer/userReducer";
import { courseReducer } from './reducer/courseReducer';
import { paymentReducer } from './reducer/paymentReducer';

export const store = configureStore({
  reducer: {
    user:userReducer,
    course:courseReducer,
    payment:paymentReducer,
  },
})


export const server="http://localhost:4000/api/v1"
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch