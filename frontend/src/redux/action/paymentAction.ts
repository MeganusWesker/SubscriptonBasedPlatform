import axios from "axios";
import { AppDispatch, server } from "../store";



export const buySubscrption = () => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "buySubscrptionRequest",
      });
  
      const { data } = await axios.get(`${server}/payment/subscribe`, {
        withCredentials: true,
      });
  
      dispatch({
        type: "buySubscrptionSuccess",
        payload:data.subscriptionId, 
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "buySubscrptionFail",
        payload: error.response.data.message,
      });
    }
};

export const cancelSubcrption = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: "cancelSubscrptionRequest",
    });

    const { data } = await axios.delete(`${server}/payment/cancelSubscription`, {
      withCredentials: true,
    });

    dispatch({
      type: "cancelSubscrptionSuccess",
      payload:data.message, 
    });
  } catch (error: any) {
    console.log(error);
    dispatch({
      type: "cancelSubscrptionFail",
      payload: error.response.data.message,
    });
  }
};