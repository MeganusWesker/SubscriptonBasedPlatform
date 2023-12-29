import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState,useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import axios from "axios";
import { server } from "../redux/store";
import { buySubscrption } from "../redux/action/paymentAction";

const Subscribe = () => {
  const {subscriptionId,error} = useAppSelector((state) => state.payment);
  const {user} = useAppSelector((state) => state.user);
 

  const [key, setKey] = useState<string>("");
  const dispatch = useAppDispatch();


  const subscribeHandler = async (): Promise<void> => {
    const {
      data: { key },
    } = await axios.get(`${server}/payment/razorpaykey`, {
      withCredentials: true,
    });

    setKey(key);
    dispatch(buySubscrption());
  };

  useEffect(() => {
    if (error) {
      dispatch({ type: 'clearError' });
    }

    if (subscriptionId) {
      const openPopUp = () => {
        const options = {
          key,
          name: 'Qbtee Subscription',
          description: 'Get access to all premium content',
          image: 'https://res.cloudinary.com/dtpzknjst/image/upload/v1693812170/avatars/l6eqkbaoj1leuvz4jj59.jpg',
          subscription_id: subscriptionId,
          callback_url: `${server}/payment/paymentverification`,
          prefill: {
            name: user?.name,
            email: user?.email,
            contact: '',
          },
          notes: {
            address: 'Lucifer Yard Hell',
          },
          theme: {
            color: 'rgba(0, 133, 250, 0.1)',
          },
        };
       
        const razor = new window.Razorpay(options);
        razor.open();
      };
      openPopUp();
    }
  }, [
    dispatch,
    error,
    user?.name,
    user?.email,
    key,
    subscriptionId,
  ]);

  return (
    <>
      <Navbar />

      {/* subscribe container */}

      <div className="w-4/5 mx-auto min-h-[70vh]">
        <h1 className="font-bold font-roboto text-3xl tracking-wider mt-3 max-[600px]:text-2xl max-[600px]:tracking-wide">
          Subscribe And Get S<span className="text-mainColor">tarted</span>
        </h1>

        <h1 className="font-bold font-roboto text-3xl tracking-wide my-2 text-center max-[600px]:text-xl">
          Welecome
        </h1>

        {/* subscribe container Main */}
        <div className="w-[30%] mx-auto flex flex-col items-center shadow min-h-[40vh] max-[900px]:w-[70%]">
          {/* subscribe container form */}

          <div className="w-full bg-mainColor2 rounded-t-md">
            <p className="text-white font-roboto py-1 ps-3">
              Pro Pack - ₹299.00
            </p>
          </div>

          <p className="font-loto w-5/6 text-center my-2">
            Join Pro Pack And Get Access to All Content
          </p>

          <h1 className="font-bold font-roboto text-2xl tracking-wide mt-3">
            ₹299 Only
          </h1>

          <button
           className="w-[90%] mt-3 group hover:border bg-mainColor2 hover:bg-white text-white hover:text-mainColor2 hover:border-mainColor2 px-[8px] py-[8px] rounded font-roboto transition duration-300 ease-in-out"
           onClick={subscribeHandler}
           >
            Buy Now
          </button>

          {/* <div className="w-full bg-gray-500 rounded-sm mt-3">
            <p className="text-white font-roboto font-bold py-1 ps-3">
               100% refund at cancellation
            </p>
          </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Subscribe;
