import { Link } from "react-router-dom";


interface CourseCardType {
    _id: string;
    poster:string;
    removeFromPlaylist:Function,
}

const PlaylistCard = ({_id, poster,removeFromPlaylist}:CourseCardType) => {
  return (
    <div className="w-36 h-36 max-[705px]:my-2  min-[705px]:mx-2 rounded hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-in-out">
       <img src={poster} className="object-cover h-24 " />

    <div className="flex items-center justify-around mt-1">
      <Link to={`/course/${_id}`}>
        <button className="text-sm bg-mainColor2 border text-white rounded px-2 py-1 group hover:border-maincolor2 hover:bg-white hover:text-mainColor2 hover:border-mainColor2   transition duration-300 ease-in-out">
          Watch Now
        </button>
      </Link>

      <button
       className="flex items-center justify-center w-8 h-8 border border-mainColor2 bg-white p-2 rounded group hover:bg-mainColor2 hover:border-0  transition duration-300 ease-in-out"
        onClick={()=>removeFromPlaylist(_id)}
       >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="text-mainColor2 w-full h-full group-hover:text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM9 4V6H15V4H9Z"></path>
        </svg>
      </button>
    </div>
    </div>
  )
}

export default PlaylistCard