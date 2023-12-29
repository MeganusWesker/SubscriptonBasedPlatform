import Footer from "../../Components/Footer";
import { useState, useEffect,useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Loader from "../../Components/Loader";
import {
  addLecture,
  deleteLecture,
  getCourseLecturesAdmin,
} from "../../redux/action/courseAction";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { colorTogglerOnBlur, colorTogglerOnFocused } from "../../utils/toggleFunctions";

const ViewLecture = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [video, setVideo] = useState<File>();
  const [videoPreview, setVideoPreview] = useState<string>("");

  const titleInputRef = useRef<HTMLDivElement>(null);
  const descInputRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const params = useParams();

  const { loading, course,error,message } = useAppSelector((state) => state.course);

  const submitHanlder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("title", name);
    myForm.append("description", description);

    if (video) {
      myForm.append("file", video);
    }

    await dispatch(addLecture(myForm, params.id as string));
    setName("");
    setDescription("");
    setVideoPreview("");
    dispatch(getCourseLecturesAdmin(params.id as string));
  };

  const deleteCoureHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    lectureId: string
  ) => {
    e.preventDefault();
    await dispatch(deleteLecture(params.id as string, lectureId));
    dispatch(getCourseLecturesAdmin(params.id as string));
  };

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const fileReader = new FileReader();

    setVideo(file);

    fileReader.onloadend = () => {
      setVideoPreview(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  };

  useEffect(() => {
    dispatch(getCourseLecturesAdmin(params.id as string));
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({type:'clearError'})
    }

    if (message) {
      toast.success(message);
      dispatch({type:'clearMessage'})
    }

  }, [error, message,dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="grid grid-cols-grid2 max-[800px]:grid-cols-1fr">
        {/* SideBar */}
        <div className="flex flex-col p-2 items-center h-[80vh]  border-r shadow-3xl overflow-y-auto">
          <h1 className="font-bold font-roboto text-3xl tracking-wider text-center mt-5">
            Add Lect<span className="text-mainColor2">ures</span>
          </h1>

          <form onSubmit={submitHanlder} className="mt-4">
            <label className="font-semibold block mb-1">Title</label>
            <div
              className={`flex border border-solid border-color3 p-1 rounded`}
              ref={titleInputRef}
            >
              <svg
                className={`w-7 h-7 text-color3 dark:text-white`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <input
                type="text"
                name="Title"
                required
                onFocus={() => colorTogglerOnFocused(titleInputRef)}
                onBlur={() => colorTogglerOnBlur(titleInputRef)}
                placeholder="Title"
                className="outline-none text-base ml-3 font-thin w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <label className="font-semibold block mt-2">Description</label>
            <div className="flex border border-solid border-color3 p-1 rounded"
             ref={descInputRef}
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
                name="description"
                placeholder="description"
                required
                value={description}
                onFocus={() => colorTogglerOnFocused(descInputRef)}
                onBlur={() => colorTogglerOnBlur(descInputRef)}
                onChange={(e) => setDescription(e.target.value)}
                className="outline-none text-base ml-3 font-thin w-full"
              />
            </div>

            <label className="font-semibold block mt-2">Choose Poster</label>
            <input
              type="file"
              accept="video/*"
              name="avatar"
              className="w-full p-2 fileUploader"
              onChange={fileHandler}
            />

            {videoPreview && (
              <div className="w-full h-[20%] rounded  flex justify-center my-2">
                <video className="w-full h-full" controls>
                  <source src={videoPreview} />
                </video>
              </div>
            )}

            <button
              className="flex items-center justify-center w-[100%] group hover:border text-lg  bg-mainColor2 hover:bg-white tracking-wide text-white hover:text-mainColor2 hover:border-mainColor2 px-[12px] py-[6px] rounded font-roboto self-end transition duration-300 ease-in-out"
              disabled={loading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white dark:text-white group-hover:text-mainColor2 mr-1"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path>
              </svg>
              Add Lectures
            </button>
          </form>
        </div>
        {/* sidebar end */}

        <div className="w-[90%] mx-auto flex flex-col overflow-y-auto">
          <h1 className="font-bold font-roboto text-3xl tracking-wider text-center mt-5">
            {course?.title.substring(0, course?.title.length / 1.4)}
            <span className="text-mainColor2">
              {course?.title.substring(
                course?.title.length / 1.4,
                course.title.length
              )}
            </span>
          </h1>

          <p className="tracking-wide font-loto text-xl text-center">
            #{course?._id}
          </p>

          <h1 className="font-bold font-roboto text-2xl tracking-wider mt-5 ml-2">
            Course Lectures
          </h1>

          {/* lecureContainer */}

          <div className="w-[90%] mx-auto mt-5">
            {course?.lectures?.length !== undefined &&
            course?.lectures?.length > 0 ? (
              course.lectures.map((item, i) => (
                <LectureCard
                  key={item._id}
                  id={item._id}
                  index={i}
                  title={item.title}
                  desc={item.description}
                  deleteHandler={deleteCoureHandler}
                />
              ))
            ) : (
              <h1 className="font-bold font-roboto text-2xl tracking-wider mt-5 ml-2">
                No Lectures
              </h1>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const LectureCard = ({
  index,
  title,
  desc,
  id,
  deleteHandler,
}: {
  index: number;
  title: string;
  desc: string;
  id: string;
  deleteHandler: Function;
}) => (
  <div className="flex justify-between w-full px-5 py-5 rounded shadow-lecture hover:-translate-y-1 transition duration-300 ease-in-out my-2">
    <div>
      <p className=" font-loto text-base font-bold">{`#${
        index + 1
      } ${title}`}</p>
      <p className=" font-loto text-base">{desc} </p>
    </div>

    <button
      className="flex items-center justify-center w-10 h-10 border border-mainColor2 bg-white p-2 rounded group hover:bg-mainColor2 hover:border-0 hover:-translate-y-1 transition duration-300 ease-in-out"
      onClick={(e) => deleteHandler(e, id)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-mainColor2 w-6 h-6 group-hover:text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM9 4V6H15V4H9Z"></path>
      </svg>
    </button>
  </div>
);

export default ViewLecture;
