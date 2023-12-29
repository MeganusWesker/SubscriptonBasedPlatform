import { createReducer } from "@reduxjs/toolkit";
import {
  buySubscrptionFail,
  buySubscrptionRequest,
  buySubscrptionSuccess,
  cancelSubscrptionFail,
  cancelSubscrptionRequest,
  cancelSubscrptionSuccess,
  clearError,
  clearMessage,
} from "../constants/paymentConstanst";

interface IintialState {
  message?: string | null;
  error?: string | null;
  loading?: boolean;
  subscriptionId?: string;
}

const initialState: IintialState = {};

export const paymentReducer = createReducer(initialState, (builder) => {
  // buy function

  builder.addCase(buySubscrptionRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(buySubscrptionSuccess, (state, action) => {
    state.loading = false;
    state.subscriptionId = action.payload;
  });

  builder.addCase(buySubscrptionFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  // cancelSubcrption function

  builder.addCase(cancelSubscrptionRequest, (state) => {
    state.loading = true;
  });

  builder.addCase(cancelSubscrptionSuccess, (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });

  builder.addCase(cancelSubscrptionFail, (state, action) => {
    state.loading = false;
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
