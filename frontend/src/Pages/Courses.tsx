import { useEffect, useState, useRef } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { categoryType } from "../utils/intrfaces";
import {
  addCourseToPlaylist,
  getAllCourses,
} from "../redux/action/courseAction";
import CourseCard from "../Components/CourseCard";
import toast from "react-hot-toast";
import { loadUser } from "../redux/action/userAction";
import {
  colorTogglerOnBlur,
  colorTogglerOnFocused,
} from "../utils/toggleFunctions";

const Courses = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const searchInputRef = useRef<HTMLDivElement>(null);

  const { courses, message, error } = useAppSelector((state) => state.course);
  const dispatch = useAppDispatch();

  const addToPlaylistHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ): Promise<void> => {
    e.preventDefault();
    await dispatch(addCourseToPlaylist(id));
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      dispatch(getAllCourses(keyword, category));
    }, 3000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [dispatch, keyword, category]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(loadUser());
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [message, error, dispatch, toast]);

  return (
    <>
      <Navbar />
      {/* courses container */}

      <div className="w-4/5 mx-auto my-6 min-h-[60vh]">
        <h1 className="font-bold font-roboto text-3xl tracking-wider mt-5">
          All Cou<span className="text-mainColor">rses</span>
        </h1>

        {/* courses mainContainer */}

        <div className="">
          <div className="w-4/5 mx-auto">
            <label className=" font-medium block mt-4 text-2xl">
              Search You're Course
            </label>
            <div
              className="flex border border-solid border-color3 p-1 rounded w-[90%] mx-auto mt-1"
              ref={searchInputRef}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-color3"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>

              <input
                type="text"
                name="name"
                placeholder="Search..."
                value={keyword}
                onFocus={() => colorTogglerOnFocused(searchInputRef)}
                onBlur={() => colorTogglerOnBlur(searchInputRef)}
                onChange={(e) => setKeyword(e.target.value)}
                className="outline-none text-base ml-3 font-thin w-full"
              />
            </div>
          </div>

          {/* category Container */}

          <div className="flex  max-[800px]:flex-col-reverse max-[800px]:items-center">
            <div className="">
              <label className="font-medium block mt-4 text-2xl">
                {" "}
                Category
              </label>
              <div className="flex flex-col w-full h-max-1/5">
                {categoryType.map((item, i) => (
                  <p
                    key={i}
                    className={`cursor-pointer my-[2px] group hover:text-mainColor hover:-translate-y-1 transition-all duration-300 ease-in-out ${
                      item === category ? "text-mainColor font-bold" : ""
                    }`}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            {/* course Card Container */}

            <div
              className={`w-5/6 mx-auto flex flex-wrap mt-7 ${
                courses.length >= 3
                  ? "justify-between"
                  : courses.length === 2
                  ? "justify-around"
                  : "justify-center"
              } max-[800px]:flex-col-reverse max-[800px]:items-center`}
            >
              {courses.map((item) => (
                <CourseCard
                  key={item._id}
                  _id={item._id}
                  title={item.title}
                  description={item.description}
                  createdBy={item.createdBy}
                  numOfVideos={item.numOfVideos}
                  poster={item.poster}
                  views={item.views}
                  category={item.category}
                  addToPlaylist={addToPlaylistHandler}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
