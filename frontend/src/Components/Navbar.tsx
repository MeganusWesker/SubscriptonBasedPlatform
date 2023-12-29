import { Link} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Profile from "../assets/Profile.png";
import { Logout } from "../redux/action/userAction";
import {useState} from "react";

const Navbar = () => {

  const [navBarState, setNavBarState] = useState(false);


  const hameburgerToggler = (): void => {
      const hameBurger=document.querySelector('.hameBurger') as HTMLDivElement;
      const sideBar=document.querySelector('.sideBar') as HTMLDivElement;
      hameBurger.classList.toggle('active');
      if(!navBarState){
        sideBar.style.width='100%';
        sideBar.style.left='0%';
        setNavBarState(true);
      }else{
        sideBar.style.width='0%';
        sideBar.style.left='-50%';
        setNavBarState(false);
      }

  }



  const { isAuthenticated, user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();


  const logoutHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await dispatch(Logout());
  };

 

  return (
    <>
      <div
        className="fixed top-5 left-5 w-8 h-8 bg-mainColor2 rounded flex flex-col justify-center items-center z-40 transition-all duration-500 ease-in-out min-[580px]:hidden hameBurger"
   
        onClick={hameburgerToggler}
      >
        <span className="w-4/5 h-[3px] bg-white"></span>
        <span className="w-4/5 h-[3px] bg-white my-1"></span>
        <span className="w-4/5 h-[3px] bg-white"></span>
      </div>

      <div
        className="flex justify-between h-12  items-center w-[90%] sideBar mx-auto"

      >
        <h1 className="font-bold text-4xl font-robotoSlab max-[720px]:text-5xl">
          <Link to={"/"}>
            <span className="text-mainColor">Q</span>
            <span>-</span>
            <span>B</span>
            <span className="text-mainColor">ee</span>
          </Link>
        </h1>

        <ul className="flex max-[720px]:flex-col">
          <li className="mr-5 flex justify-center relative font-loto hover:text-mainColor navBarList w-20 transition-all duration-500 ease-in-out max-[720px]:text-3xl max-[720px]:my-2">
            <Link  to={"/"}>Home</Link>
          </li>
          <li className="mr-5 flex justify-center relative font-loto hover:text-mainColor navBarList w-20 max-[720px]:text-3xl max-[720px]:my-2">
            {" "}
            <Link to="/courses">Courses</Link>
          </li>
          <li className="mr-5 flex justify-center relative font-loto hover:text-mainColor navBarList w-20 max-[720px]:text-3xl max-[720px]:my-2">
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li className="font-loto relative flex justify-center hover:text-mainColor navBarList w-20 max-[720px]:text-3xl max-[720px]:my-2">
            {" "}
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className="flex items-center">
          {!isAuthenticated ? (
            <>
              <Link
                to={"/login"}
                className={`group mr-5 text-mainColor font-robotoSlab text-sm hover:rounded transition duration-300 ease-in-out py-1 px-2`}
              >
                Sign In
              </Link>
              <Link
                to={"/register"}
                className="group hover:border bg-mainColor hover:bg-white tracking-wide text-white hover:text-mainColor hover:border-mainColor px-[12px] py-[6px] rounded text-sm font-roboto self-end transition duration-300 ease-in-out"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="group cursor-pointer relative">
              {user !== undefined && (
                <img
                  src={user.avatar?.url ? user.avatar.url : Profile}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover mx-2"
                />
              )}

              <div className="hidden flex-col p-2 items-center absolute top-10 right-[-12px] group-hover:flex">
                <Link to={"/profile"}>Profile</Link>

                {user?.role === "admin" && (
                  <Link to={"/admin/dashboard"}>Dashboard</Link>
                )}

                <button onClick={logoutHandler}>logout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
