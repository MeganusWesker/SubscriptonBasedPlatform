import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-color2 p-10">
      <div className="flex justify-between w-[90%] m-auto max-[500px]:flex-col max-[500px]:items-center">
        <div>
          <h1 className="font-bold text-3xl font-robotoSlab max-[500px]:text-center">
            <Link to={"/"}>
              <span className="text-mainColor">Q</span>
              <span>-</span>
              <span>B</span>
              <span className="text-mainColor">ee</span>
            </Link>
          </h1>

          <div className="max-[500px]:flex max-[500px]:justify-end">

            <p className="my-4 w-[60%] font-roboto text-lg tracking-wide max-[500px]:w-[90%] max-[500px]:text-base">
              Browse top class courses by browsing our category which will be more
              easy for you
            </p>
          </div>
          <div className="flex max-[500px]:justify-around max-[500px]:w-[70%] m-auto">
            <a
              href="www.facebook.com"
              className="group flex items-center p-3 bg-white rounded-full transition duration-300 ease-in-out hover:bg-mainColor mr-2"
            >
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white group-hover:text-white transition duration-300 ease-in-out"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* className="w-5 h-5 text-gray-800 dark:text-white group-hover:text-white transition duration-300 ease-in-out" */}
            <a
              href="www.facebook.com"
              className="group flex items-center p-3 bg-white rounded-full transition duration-300 ease-in-out hover:bg-mainColor mr-2"
            >
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white group-hover:text-white transition duration-300 ease-in-out"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                />
              </svg>
            </a>

            <a
              href="www.facebook.com"
              className="group flex items-center p-3 bg-white rounded-full transition duration-300 ease-in-out hover:bg-mainColor mr-2"
            >
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white group-hover:text-white transition duration-300 ease-in-out"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
            </a>

            <a
              href="www.facebook.com"
              className="group flex items-center p-3 bg-white rounded-full transition duration-300 ease-in-out hover:bg-mainColor"
            >
              <svg
               className="w-5 h-5 text-gray-800 dark:text-white group-hover:text-white transition duration-300 ease-in-out"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 15 15"
              >
                <path
                  fillRule="evenodd"
                  d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  clipRule="evenodd"
                />
                <path d="M3 5.012H0V15h3V5.012Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="max-[500px]:mt-4 flex flex-col items-center">
          <h3 className="font-bold text-2xl font-robotoSlab tracking-wide">Links</h3>
          <ul className="flex flex-col items-center">
            <li className="mr-5 font-roboto hover:text-mainColor max-[500px]:mr-0">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="mr-5 font-roboto hover:text-mainColor max-[500px]:mr-0">
              {" "}
              <Link to="/search">Courses</Link>
            </li>
            <li className="mr-5 font-roboto hover:text-mainColor max-[500px]:mr-0">
              {" "}
              <Link to="/contact">Contact</Link>
            </li>
            <li className="font-roboto hover:text-mainColor">
              {" "}
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-2xl font-robotoSlab tracking-wide">Category</h3>
          <ul className="flex flex-col items-center">
            <li className="mr-5 font-roboto hover:text-mainColor max-[500px]:mr-0">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="mr-5 font-roboto hover:text-mainColor max-[500px]:mr-0">
              {" "}
              <Link to="/search">Courses</Link>
            </li>
            <li className="mr-5 font-roboto hover:text-mainColor max-[500px]:mr-0">
              {" "}
              <Link to="/contact">Contact</Link>
            </li>
            <li className="font-roboto hover:text-mainColor">
              {" "}
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-[2px] bg-blue-100 my-2"></div>

      <div className="flex w-[90%] m-auto justify-between">
        <p className="font-roboto tracking-wide">CopyRight &copy; Q-Bee 2023 All rights reserved </p>

        <Link
          to={"/"}
          className="group bg-mainColor flex justify-center items-center rounded p-2 transition duration-300 ease-in-out hover:bg-white max-[300px]:h-10"
        >
          <svg
            className="w-4 h-4 text-white dark:text-white group-hover:text-mainColor transition duration-300 ease-in-out"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13V1m0 0L1 5m4-4 4 4"
            />
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
