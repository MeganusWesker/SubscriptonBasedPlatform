import { Link } from "react-router-dom";

interface CourseCardType {
  _id: string;
  title: string;
  description: string;
  poster: {
    public_id: string;
    url: string;
  };
  views: number;
  numOfVideos: number;
  category: string;
  createdBy: string;
  addToPlaylist: Function;
}

const CourseCard = ({
  _id,
  title,
  description,
  poster,
  createdBy,
  views,
  numOfVideos,
  category,
  addToPlaylist,
}: CourseCardType) => {
  return (
    <div className="w-[24%] p-8 hover:-translate-y-1 hover:border hover:border-color3  transition duration-300  ease-in-out max-[800px]:w-full max-[800px]:mt-5">
      <img
        src={poster.url}
        className=" object-fill w-full h-[30%]"
        alt="poster.png"
      />

      <div className="mt-4 flex flex-col h-[60%] justify-between w-[95%] mx-auto">
        <p className="font-bold">{title}</p>
        <p>{description}</p>

        <div className="flex items-center">
          <p className="font-bold text-sm mr-1">CREATOR</p>
          <p>{createdBy}</p>
        </div>

        <div className="flex items-center ">
          <p className="font-bold text-sm mr-1">CATEGORY</p>
          <p>{category}</p>
        </div>

        <p className="font-bold ">LECTURES-{numOfVideos}</p>
        <p className="font-bold ">VIEWS-{views}</p>

        <div className="flex items-center">
    
            <Link
              className="flex items-center justify-center w-[50%] group hover:border bg-mainColor2 hover:bg-white text-white hover:text-mainColor2 hover:border-mainColor2 px-[8px] py-[8px] rounded font-roboto self-end transition duration-300 ease-in-out"
              to={`/course/${_id}`}
            >
              Watch
            </Link>


          <button
            onClick={(e) => addToPlaylist(e, _id)}
            className={`group mr-5 text-mainColor font-robotoSlab text-sm hover:rounded transition duration-300 ease-in-out py-1 px-2`}
          >
            Add to Playlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
