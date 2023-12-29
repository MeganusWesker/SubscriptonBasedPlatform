
import { useEffect} from "react";
import Footer from "../../Components/Footer";
import Loader from "../../Components/Loader";
import SideBar from "../../Components/SideBar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deleteUser, getAllUsers, updateUser } from "../../redux/action/userAction";
import toast from "react-hot-toast";

const tableHeadingList: string[] = [
  "Id",
  "Name",
  "Email",
  "Role",
  "Subscrption",
  "Action"
];

interface documentCourse {
  id: string;
  name: string;
  subscription: string;
  email: string;
  role: string;
  deleteHandler:Function,
  updatHandler:Function,
}

const UserList = () => {


  const dispatch = useAppDispatch();
  const { loading,message,users,error } = useAppSelector((state) => state.user);



  const deleteUserHandler=async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>,id:string)=>{
     e.preventDefault();
    await dispatch(deleteUser(id));
    dispatch(getAllUsers());
  }

  const updateUserHandler=async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>,id:string)=>{
    e.preventDefault();
   await dispatch(updateUser(id));
   dispatch(getAllUsers());
 }

  useEffect(() => {
    if(message){
      toast.success(message);
      dispatch({type:'clearMessage'})
    }

    if(error){
      toast.error(error);
      dispatch({type:'clearError'})
    }
    dispatch(getAllUsers());
  }, [dispatch,message,error]);







  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="grid grid-cols-1fr-5fr max-[1100px]:grid-cols-1fr">
        <SideBar />

        {/* table */}

        <div className="overflow-x-auto">
        <div className="mt-14 w-[98%] grid-cols-table m-auto" id="userListTable">
          {/* table Heading */}
          <div className="rounded grid grid-cols-table items-center h-8 px-2 bg-mainColor2">
            {tableHeadingList.map((item, i) => (
              <p
                className={`text-white text-${i===tableHeadingList.length-1 && 'center'}`}
                key={i}
              >
                {item}
              </p>
            ))}
          </div>

          {users &&
            users.map((item) => (
              <CourseListComponent
                key={item._id}
                id={item._id}
                name={item.name}
                email={item.email}
                role={item.role}
                subscription={(item.subscription && item.subscription.status == "active") ? "Active" :'Not Subscribed'}
                deleteHandler={deleteUserHandler}
                updatHandler ={updateUserHandler}
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
  name,
  email,
  role,
  subscription,
  deleteHandler,
  updatHandler
}: documentCourse) => (
  <div
    key={id}
    className="rounded grid grid-cols-table items-center h-12 px-2 my-3"
  >
    <p className="font-loto">#{id}</p>
    <p className="font-loto">{name}</p>
    <p className="font-loto">{email}</p>
    <p className="font-loto">{role}</p>
    <p className={`font-loto ${subscription==='Active' ? 'text-green-600':'text-red-600'}`}>{subscription}</p>

    <div className="flex items-center justify-around">
  
        <button 
        className="text-sm bg-mainColor2 border text-white rounded px-2 py-1 group hover:border-maincolor2 hover:bg-white hover:text-mainColor2 hover:border-mainColor2 hover:-translate-y-1  transition duration-300 ease-in-out"
        onClick={(e)=>updatHandler(e,id)}
        >
          Update Role
        </button>
   

      <button
       className="flex items-center justify-center w-10 h-10 border border-mainColor2 bg-white p-2 rounded group hover:bg-mainColor2 hover:border-0 hover:-translate-y-1 transition duration-300 ease-in-out"
        onClick={(e)=>deleteHandler(e,id)}
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

export default UserList