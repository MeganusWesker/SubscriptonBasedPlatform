import { useEffect } from "react";
import Footer from "../../Components/Footer";
import Loader from "../../Components/Loader";
import SideBar from "../../Components/SideBar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  deleteCourse,
  getAllCoursesAdmin,
} from "../../redux/action/courseAction";
import { Link } from "react-router-dom";

const tableHeadingList: string[] = [
  "Id",
  "Poster",
  "Title",
  "Category",
  "Creator",
  "Views",
  "Lectures",
  "Actions",
];

interface documentCourse {
  id: string;
  poster: string;

  title: string;
  Creator: string;
  Views: number;
  Lectures: number;
  Category: string;
  deleteHandler: Function;
}

const CourseList = () => {
  const dispatch = useAppDispatch();
  const { loading, courses, message } = useAppSelector((state) => state.course);

  console.log(courses);

  const deleteCourseHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    await dispatch(deleteCourse(id));
    dispatch(getAllCoursesAdmin());
  };

  useEffect(() => {
    if (message) {
      console.log(message);
    }
    dispatch(getAllCoursesAdmin());
  }, [dispatch, message]);



  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="grid grid-cols-1fr-5fr max-[1200px]:grid-cols-1fr">
        <SideBar />

        {/* table */}

        <div className="overflow-x-auto">
          <div className="mt-14 w-[98%] grid-cols-table-Content m-auto" id="courseListTable">
            {/* table Heading */}
            <div className="rounded grid grid-cols-table-Content items-center h-8 px-2 bg-mainColor2">
              {tableHeadingList.map((item, i) => (
                <p
                  className={`text-white text-${
                    (i === 1 && "center ") ||
                    (i === tableHeadingList.length - 1 && "center")
                  }`}
                  key={i}
                >
                  {item}
                </p>
              ))}
            </div>

            {courses &&
              courses.map((item) => (
                <CourseListComponent
                  key={item._id}
                  id={item._id}
                  poster={item.poster.url}
                  title={item.title}
                  Category={item.category}
                  Creator={item.createdBy}
                  Views={item.views}
                  Lectures={item.numOfVideos}
                  deleteHandler={deleteCourseHandler}
                />
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const CourseListComponent = ({
  id,
  poster,
  title,
  Creator,
  Category,
  Views,
  Lectures,
  deleteHandler,
}: documentCourse) => (
  <div
    key={id}
    className="rounded grid grid-cols-table-Content items-center h-12 px-2 my-3"
  >
    <p className="font-loto">#{id}</p>
    <img
      className="w-12 h-12 rouded object-cover justify-self-center"
      src={poster}
      alt=""
    />
    <p className="font-loto">{title}</p>
    <p className="font-loto">{Category}</p>
    <p className="font-loto">{Creator}</p>
    <p className="text-center">{Views}</p>
    <p className="text-center">{Lectures}</p>

    <div className="flex items-center justify-around">
      <Link to={`/admin/viewLectures/${id}`}>
        <button className="text-sm bg-mainColor2 border text-white rounded px-2 py-1 group hover:border-maincolor2 hover:bg-white hover:text-mainColor2 hover:border-mainColor2 hover:-translate-y-1  transition duration-300 ease-in-out">
          View Lectures
        </button>
      </Link>

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
  </div>
);

export default CourseList;
