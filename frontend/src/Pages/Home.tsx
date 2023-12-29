import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import bannerPng from "../assets/banner.png";
import Footer from "../Components/Footer";
// import { ICategoryPropType } from "../types/types";
// import CategoryCard from "../Components/CategoryCard";

// const categoryListArray: Array<ICategoryPropType> = [
//   {
//     title: "Design & Development",
//     fill: "none",
//     iconColor: "Color2",
//     bgColor: "Color2",
//     path: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
//   },

//   {
//     title: "Marketing & Communication",
//     fill: "none",
//     iconColor: "white",
//     bgColor: "mainColor",
//     path: "M14.111 5.889a5.888 5.888 0 0 1 0 6.222M17.173 2.7A11.372 11.372 0 0 1 19 9a11.4 11.4 0 0 1-1.777 6.222M9.349 1.415 4 6H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2l5.349 4.585A1 1 0 0 0 11 15.826V2.174a1 1 0 0 0-1.651-.759Z",
//   },

//   {
//     title: "Digital Marketing",
//     fill: "none",
//     iconColor: "yellow",
//     bgColor: "yellow",
//     path: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
//   },

//   {
//     title: "Digital Marketing",
//     fill: "none",
//     iconColor: "yellow",
//     bgColor: "yellow",
//     path: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
//   },

//   {
//     title: "Digital Marketing",
//     fill: "none",
//     iconColor: "yellow",
//     bgColor: "yellow",
//     path: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
//   },

//   {
//     title: "Digital Marketing",
//     fill: "none",
//     iconColor: "white",
//     bgColor: "mainColor",
//     path: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
//   },
// ];

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* hero section  */}
      <div className="flex justify-between w-[90%] mx-auto pt-20 max-[700px]:flex-col">
        <div className="w-1/2 pt-20 banner-left relative z-10 max-[700px]:w-full max-[700px]:flex max-[700px]:flex-col">
          <div className="">
            <p className="font-robotoSlab text-6xl tracking-wider font-bold max-[1100px]:text-4xl max-[1100px]:tracking-wide">
              Getting <span className="text-mainColor">Quality</span>
            </p>
            <p className="font-robotoSlab text-6xl tracking-wider font-bold my-2 max-[1100px]:text-4xl max-[1100px]:tracking-wide">
              Education Is Now
            </p>
            <p className="font-robotoSlab text-6xl tracking-wider font-bold max-[1100px]:text-4xl max-[1100px]:tracking-wide">
              More <span className="text-mainColor">Easy</span>
            </p>
          </div>

          <p className="my-4 w-[85%] font-loto text-lg tracking-wide max-[700px]:w-full">
            Provides you with the latest Online Learning System and Material
            that Help knowledge growing
          </p>

          <Link
            to={"/subcription"}
            className="group hover:border bg-mainColor hover:bg-white tracking-wide text-white hover:text-mainColor hover:border-mainColor px-[12px] py-[6px] rounded text-sm font-roboto transition duration-300 ease-in-out max-[700px]:self-center"
          >
            Get Subcription
          </Link>
        </div>

        <div className="w-1/2 max-[700px]:w-full">
          <img
            src={bannerPng}
            className="w-4/5  object-cover m-auto max-[900px]:w-3/5"
            alt="banner.png"
          />
        </div>
      </div>

      {/* course by category

      <div className="pt-18 w-[90%] m-auto">
        <div className="flex justify-between">
          <div>
            <p className="font-robotoSlab text-4xl tracking-wider font-bold my-2">
              Explore courses b
              <span className="text-mainColor">y Category</span>
            </p>
            <p className="my-4 w-[85%] font-loto text-lg tracking-wide">
              Browse top class courses by browsing our category which will be
              more easy for you
            </p>
          </div>

          <Link
            to={"/subcription"}
            className="group hover:border bg-mainColor hover:bg-white tracking-wide text-white hover:text-mainColor hover:border-mainColor px-[12px] py-[6px] rounded text-sm font-roboto self-end transition duration-300 ease-in-out"
          >
            All Category
          </Link>
        </div>

        <div className="flex justify-between w-[100%] flex-wrap my-3">
          {categoryListArray.map((item: ICategoryPropType, i: number) => (
            <CategoryCard
              key={i}
              title={item.title}
              iconColor={item.iconColor}
              bgColor={item.bgColor}
              fill={item.fill}
              path={item.path}
            />
          ))}
        </div>
      </div> */}

      <Footer />
    </>
  );
};

export default Home;
