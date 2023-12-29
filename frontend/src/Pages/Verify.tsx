import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { verifyUser } from "../redux/action/userAction";
import { useNavigate } from "react-router-dom";
import SmallLoader from "../Components/SmallLoader";

const Verify = () => {
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, message, verifyLoading,isAuthenticated } = useAppSelector(
    (state) => state.user
  );

  const submitHanlder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(verifyUser(email, otp));
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }

    if (message) {
      console.log(message);
      navigate("/");
    }

    if(isAuthenticated){
      navigate("/Profile");
    }
  }, [error, message,isAuthenticated]);

  return (
    <>
      <Navbar />

      <h1 className="font-bold font-roboto text-3xl tracking-wider text-center mt-5">
        Verify<span className="text-mainColor">And Start</span>
      </h1>
      <p className="tracking-wide font-loto text-xl text-center">
        Please Enter You're Credintals
      </p>

      <div className="min-h-[30Vw] w-[25%] m-auto mt-5 p-2 max-md:w-[70%]">
        <form onSubmit={submitHanlder}>
          <div className="flex border border-solid border-color3 p-1 rounded my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6  text-color3"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>

            <input
              type="email"
              name="email"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none text-base ml-3 font-thin w-full"
            />
          </div>

          <div className="flex border border-solid border-color3 p-1 rounded my-2">
            <svg
              className="w-6 h-6 text-color3 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
            </svg>
            <input
              type="number"
              name="otp"
              placeholder="otp"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="outline-none text-base ml-3 font-thin w-full"
            />
          </div>

          <button
            className="flex items-center justify-center w-[100%] group hover:border text-lg  bg-mainColor2 hover:bg-white tracking-wide text-white hover:text-mainColor2 hover:border-mainColor2 px-[12px] py-[6px] rounded font-roboto self-end transition duration-300 ease-in-out"
            disabled={verifyLoading}
          >
            {verifyLoading ? (
              <SmallLoader />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor"
               className="w-6 h-6 text-white dark:text-white group-hover:text-mainColor2 mr-2"
               >
                <path d="M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z"></path>
              </svg>
            )}
            Verify
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Verify;
