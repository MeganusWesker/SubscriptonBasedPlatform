import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
// import { toggleColor } from "../utils/toggleFunctions";
// import { useDispatch, useSelector } from 'react-redux'
import { changePhoto } from "../redux/action/userAction";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import Profile from "../assets/Profile.png";
import SmallLoader from "../Components/SmallLoader";
import toast from "react-hot-toast";

const ChangePhoto = () => {
  const [avatar, setAvatar] = useState<File>();
  const [avatarPreview, setAvatarPreview] = useState<string>(Profile);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { error, message, updateProfileLoading, user } = useAppSelector(
    (state) => state.user
  );

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    const fileReader = new FileReader();
    setAvatar(file);

    fileReader.onloadend = () => {
      setAvatarPreview(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  };

  const submitHanlder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const myForm = new FormData();

    if (avatar) myForm.append("file", avatar); // it wil throw an error if it was of type object why bcoz file is a blob type

    await dispatch(changePhoto(myForm));
  };

  useEffect(() => {
    if (user && user.avatar?.url) {
      setAvatarPreview(user.avatar.url);
    }

    if (error) {
      console.log(error);
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      console.log(message);
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/profile");
    }
  }, [error, message, dispatch]);

  return (
    <>
      <Navbar />

      <h1 className="font-bold font-roboto text-3xl tracking-wider text-center mt-5">
        Update<span className="text-mainColor">Photo</span>
      </h1>
      <p className="tracking-wide font-loto text-xl text-center">
        Please Enter You're Credintals
      </p>

      <div className="min-h-[30Vw] w-[25%] m-auto mt-5 p-2 max-md:w-[70%]">
        <div className="flex justify-center w-full h-24">
          <img
            src={avatarPreview}
            alt=""
            className="w-24 h-full rounded-full object-cover mx-2"
          />
        </div>

        <form onSubmit={submitHanlder}>
          <label className="font-semibold block mt-2">Choose Avatar</label>
          <input
            type="file"
            accept="image/*"
            name="avatar"
            className="w-full p-2 fileUploader"
            required
            onChange={fileHandler}
          />

          <button
            className="flex items-center justify-center w-[100%] group hover:border text-lg  bg-mainColor2 hover:bg-white tracking-wide text-white hover:text-mainColor2 hover:border-mainColor2 px-[12px] py-[6px] rounded font-roboto self-end transition duration-300 ease-in-out"
            disabled={updateProfileLoading}
          >
            {updateProfileLoading ? (
              <SmallLoader />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white dark:text-white group-hover:text-mainColor2 mr-2"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
            )}
            ChangePhoto
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ChangePhoto;
