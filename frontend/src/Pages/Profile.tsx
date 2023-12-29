import { useAppDispatch, useAppSelector } from "../redux/hooks";
import ProfilePng from "../assets/Profile.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { cancelSubcrption } from "../redux/action/paymentAction";
import { useEffect } from "react";
import PlaylistCard from "../Components/PlaylistCard";
import { removeCourseFromPlaylist } from "../redux/action/courseAction";
import { loadUser } from "../redux/action/userAction";
import toast from 'react-hot-toast';
import Loader from "../Components/Loader";

const Profile = () => {
  const { user,loginLoading ,isAuthenticated} = useAppSelector((state) => state.user);
  const {error:courseError,message:courseMessage} = useAppSelector((state) => state.course);
  const { loading, message, error } = useAppSelector((state) => state.payment);
  const dispatch = useAppDispatch();

  const cancelSubscrptionHandler = () => {
    dispatch(cancelSubcrption());
  };

  const navigate=useNavigate();



  const removeFromPlaylistHandler = async (id: string): Promise<void> => {
    await dispatch(removeCourseFromPlaylist(id));
    dispatch(loadUser());
  };

  useEffect(() => {
    if (courseMessage) {
        toast.success(courseMessage);
      dispatch({ type: "clearMessage" });
    }
    if (courseError) {
      toast.error(courseError);
      dispatch({ type: "clearError" });
    }
  }, [courseMessage, courseError, dispatch,toast]);

   useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      dispatch({ type: "clearMessage" });
    }
  }, [isAuthenticated]);

  return loginLoading ? <Loader/> : (
    user !== undefined && (
      <>
        <Navbar />

        <div className="w-[60%] m-auto m-h min-h-[30Vw]">
          <h1 className="font-bold font-roboto text-3xl tracking-wider mt-5 max-[705px]:text-center max-[705px]:text-4xl">
            Profi<span className="text-mainColor">le</span>
          </h1>

          <div className="flex mt-8 max-[705px]:flex-col max-[705px]:">
            <div className="w-[20%] h-[40%] mx-7 max-[705px]:w-[80%] max-[705px]:h-[80%] flex flex-col max-[705px]:items-center">
              <img
                src={user.avatar?.url ? user.avatar.url : ProfilePng}
                alt=""
                className="w-28 h-28 rounded-full object-cover mx-2 max-[750px]:w-4/5 max-[750px]:h-4/5  max-[705px]:w-[50%] max-[705px]:h-[50%]"
              />
              <Link
                to={"/changePhoto"}
                className={`group ml-4 text-mainColor font-robotoSlab text-sm hover:rounded transition duration-300 ease-in-out mt-2 max-[705px]:text-lg`}
              >
                Change Photo
              </Link>
            </div>

            <div>
              <div className="h-8  flex items-center">
                <p className="font-bold mr-3 font-roboto text-sm  max-[705px]:text-lg">
                  Name
                </p>
                <p className="max-[705px]:text-lg">{user.name}</p>
              </div>

              <div className="h-8 w-full  flex items-center mt-2 max-[380px]:flex-col max-[380px]:items-start max-[380px]:mb-6">
                <p className="font-bold mr-3 font-roboto text-sm max-[705px]:text-lg">
                  Email
                </p>{" "}
                <p className="">{user.email}</p>
              </div>

              <div className="h-8  flex items-center mt-2">
                <p className="font-bold mr-3 font-roboto text-sm max-[705px]:text-lg">
                  Joined At
                </p>{" "}
                <p className="max-[705px]:text-lg">
                  {" "}
                  {user.createdAt.split("T")[0]}
                </p>
              </div>

              {user.role !== "admin" && (
                <div className="h-8  flex items-center mt-2">
                  <p className="font-bold mr-3 font-roboto text-sm max-[705px]:text-lg">
                    Subscription
                  </p>
                  {user.subscription && user.subscription.status == "active" ? (
                    <button
                      // className="flex items-center justify-center w-[50%] group hover:border text-base  bg-mainColor2 hover:bg-white tracking-wide text-white hover:text-mainColor2 hover:border-mainColor2 px-[8px] py-[4px] rounded font-roboto self-end transition duration-300 ease-in-out"
                      className={`group mr-2 border font-robotoSlab text-sm hover:rounded transition duration-300 ease-in-out mt-2 py-1 px-4`}
                      onClick={cancelSubscrptionHandler}
                      disabled={loading}
                    >
                      Cancel Subscription
                    </button>
                  ) : (
                    <Link
                      to={"/subscribe"}
                      // className="flex items-center justify-center w-[50%] group hover:border text-base  bg-mainColor2 hover:bg-white tracking-wide text-white hover:text-mainColor2 hover:border-mainColor2 px-[8px] py-[4px] rounded font-roboto self-end transition duration-300 ease-in-out"
                      className={`group mr-2 border font-robotoSlab text-sm hover:rounded transition duration-300 ease-in-out mt-2 py-1 px-4`}
                    >
                      subscribe
                    </Link>
                  )}
                </div>
              )}

              <div className="mt-2 flex items-center max-[705px]:mb-4">
                <Link
                  to={"/updateProfile"}
                  // className="flex items-center justify-center w-[50%] group hover:border text-base  bg-mainColor2 hover:bg-white tracking-wide text-white hover:text-mainColor2 hover:border-mainColor2 px-[8px] py-[4px] rounded font-roboto self-end transition duration-300 ease-in-out"
                  className={`group mr-2 border font-robotoSlab text-sm hover:rounded transition duration-300 ease-in-out mt-2 py-1 px-4`}
                >
                  Update Profile
                </Link>

                <Link
                  to={"/changePassword"}
                  // className="flex items-center justify-center w-[50%] group hover:border text-base  bg-mainColor2 hover:bg-white tracking-wide text-white hover:text-mainColor2 hover:border-mainColor2 px-[8px] py-[4px] rounded font-roboto self-end transition duration-300 ease-in-out"
                  className={`group  border font-robotoSlab text-sm hover:rounded transition duration-300 ease-in-out mt-2 py-1 px-4`}
                >
                  Change Password
                </Link>
              </div>
            </div>
          </div>

          <h1 className="font-bold font-roboto text-xl tracking-wid mt-2 max-[705px]:text-center max-[705px]:text-3xl">
            Playlist
          </h1>

          {/* playlistComponent */}
          <div className="flex flex-wrap mt-4 max-[705px]:flex-col max-[705px]:items-center">
            {user.playlist.map((item) => (
              <PlaylistCard
                key={item.course}
                _id={item.course}
                poster={item.poster}
                removeFromPlaylist={removeFromPlaylistHandler}
              />
            ))}
          </div>
        </div>
        <Footer />
      </>
    )
  );
};

export default Profile;
