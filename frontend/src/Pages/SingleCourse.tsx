import { useNavigate, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { getCourseLecturesAdmin } from "../redux/action/courseAction";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Loader from "../Components/Loader";

import Footer from "../Components/Footer";


const SingleCourse = () => {

  const [lectureNumber,setLectureNumber]=useState<number>(0);
  const { loading, course,error } = useAppSelector((state) => state.course);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    dispatch(getCourseLecturesAdmin(params.id as string));
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      navigate("/courses");
      dispatch({ type: "clearError" });
    }


  }, [error,dispatch]);




  return loading ? <Loader /> :
  
     <>

      {/* maincontaner */}
      <div className="grid grid-cols-5fr-1fr max-[800px]:grid-cols-1fr">
       
       {/* left side */}
       <div>

       <video
              width={'100%'}
              controls
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              src={course?.lectures[lectureNumber].video.url}
            ></video>

      <h1 className="font-bold font-roboto text-2xl tracking-wider mt-5">
         #{lectureNumber+1} {course?.lectures[lectureNumber].title}
      </h1>

      <h1 className="font-bold font-roboto text-2xl tracking-wider mt-5">
        Description
      </h1>

      <p className="tracking-wide font-loto text-xl">
      {course?.lectures[lectureNumber].description}
      </p>



       </div>

          {/* right */}
       <div className="flex flex-col items-center border-r shadow-3xl">
          {course?.lectures.map((item,i)=>(
             <button
              className="w-full text-center py-2 mt-1 hover:-translate-y-1 hover:shadow-md transition-all ease-in-out duration-300 "
              onClick={()=>setLectureNumber(i)}
              key={item._id}
              >
               #{i+1} {item.title}
             </button>
          ))}
      </div>
    </div>

     
     <Footer/>
     
     </>
};

export default SingleCourse;
