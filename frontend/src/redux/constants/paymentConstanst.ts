import { createAction} from "@reduxjs/toolkit"

// buySubscrptionConstants 
export const buySubscrptionRequest = createAction<void>('buySubscrptionRequest');
export const buySubscrptionFail = createAction<string>('buySubscrptionFail');
export const buySubscrptionSuccess = createAction<string>('buySubscrptionSuccess');

// cancelSubscrptionConstants 
export const cancelSubscrptionRequest = createAction<void>('cancelSubscrptionRequest');
export const cancelSubscrptionFail = createAction<string>('cancelSubscrptionFail');
export const cancelSubscrptionSuccess = createAction<string>('cancelSubscrptionSuccess');



// clearMessage && clearError constants
export const clearMessage = createAction<void>('clearMessage');
export const clearError = createAction<void>('clearError');