import { Link, useSearchParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const PaymentSuccess = () => {
  const reference = useSearchParams()[0].get("reference");

  return (
    <>
      <Navbar />

      {/* subscribe container */}

      <div className="w-4/5 mx-auto min-h-[70vh]">
        <h1 className="font-bold font-roboto text-3xl tracking-wider mt-3 max-[600px]:text-2xl max-[600px]:tracking-wide">
          Thanks For Purchas
          <span className="text-mainColor">ing Subscrption</span>
        </h1>

        <h1 className="font-bold font-roboto text-3xl tracking-wide my-2 text-center max-[600px]:text-xl">
          You Have Pro Pack
        </h1>

        {/* subscribe container Main */}
        <div className="w-[30%] mx-auto flex flex-col items-center shadow min-h-[40vh] max-[900px]:w-[70%]">
          {/* subscribe container form */}

          <div className="w-full bg-mainColor2 rounded-t-md">
            <p className="text-white font-roboto py-1 ps-3">Payment Success</p>
          </div>

          <p className="font-loto w-5/6 text-center my-2">
            Congratulation you're a pro member. You have access to premium
            content.
          </p>

          <svg
            className="w-10 h-10 text-gray-800 dark:text-white my-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
            />
            <path
              fill="#fff"
              d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
            />
          </svg>

          <Link className="font-roboto" to={"/profile"}>
            Go to Profile
          </Link>

          <p className="font-loto my-2 font-bold text-center">
            {`Reference #id ${reference}`}
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default PaymentSuccess;
