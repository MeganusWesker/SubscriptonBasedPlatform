import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState, useEffect, useRef } from "react";
import { changeProfile, loadUser } from "../redux/action/userAction";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import SmallLoader from "../Components/SmallLoader";
import toast from "react-hot-toast";
import { colorTogglerOnBlur, colorTogglerOnFocused } from "../utils/toggleFunctions";

const ChangeProfile = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const emailInputRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, message, updateProfileLoading } = useAppSelector(
    (state) => state.user
  );

  const submitHanlder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(changeProfile(name, email));
    dispatch(loadUser());
  };



  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      navigate("/profile");
      dispatch({ type: "clearMessage" });
    }
  }, [error, message, dispatch]);

  return (
    <>
      <Navbar />

      <h1 className="font-bold font-roboto text-3xl tracking-wider text-center mt-5">
        Change Pro<span className="text-mainColor">file</span>
      </h1>
      <p className="tracking-wide font-loto text-xl text-center">
        Please Enter You're Credintals
      </p>

      <div className="min-h-[30Vw] w-[25%] m-auto mt-5 p-2 max-md:w-[70%]">
        <form onSubmit={submitHanlder}>
          <label className="font-semibold block mt-2">Name</label>
          <div
            className="flex border border-solid border-color3 p-1 rounded"
            ref={nameInputRef}
          >
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
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onFocus={() => colorTogglerOnFocused(nameInputRef)}
              onBlur={() => colorTogglerOnBlur(nameInputRef)}
              onChange={(e) => setName(e.target.value)}
              className="outline-none text-base ml-3 font-thin w-full"
            />
          </div>

          <label className="font-semibold block mt-2">New Email</label>
          <div
            className="flex border border-solid border-color3 p-1 rounded"
            ref={emailInputRef}
          >
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
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => colorTogglerOnFocused(emailInputRef)}
              onBlur={() => colorTogglerOnBlur(emailInputRef)}
              className="outline-none text-base ml-3 font-thin w-full"
            />
          </div>

          <button
            className="flex items-center mt-2 justify-center w-[100%] group hover:border text-lg  bg-mainColor2 hover:bg-white tracking-wide text-white hover:text-mainColor2 hover:border-mainColor2 px-[12px] py-[6px] rounded font-roboto self-end transition duration-300 ease-in-out"
            disabled={updateProfileLoading}
          >
            {updateProfileLoading ? (
              <SmallLoader />
            ) : (
              <svg
                className="w-6 h-6 text-white dark:text-white group-hover:text-mainColor2 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z"
                />
              </svg>
            )}
            Change Password
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ChangeProfile;
