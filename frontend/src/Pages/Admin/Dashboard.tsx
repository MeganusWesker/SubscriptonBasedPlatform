import { useEffect } from "react";
import Footer from "../../Components/Footer";
import SideBar from "../../Components/SideBar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Loader from "../../Components/Loader";
import { getDashboardStats } from "../../redux/action/userAction";
import { LineChart,DoughnutChart } from "./Chart";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const {
    adminLoading,
    stats,
    userProfit,
    viewsProfit,
    subscriptionsProfit,
    userPercentage,
    viewsPercentage,
    subscriptionsPercentage,
    userCount,
    subscriptionsCount,
    viewsCount,
  } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getDashboardStats());
  }, []);

  return adminLoading ? (
    <Loader />
  ) : (
    <>
      <div className="grid grid-cols-1fr-5fr max-[1000px]:grid-cols-1fr">
        <SideBar />

        <div>
          <h1 className="font-bold font-roboto text-3xl tracking-wider mt-5 ml-6">
            DashBo<span className=" text-mainColor">ard</span>
          </h1>

          <div className="flex items-center justify-between mt-2 w-5/6 m-auto max-[900px]:flex-col">
            <BoxComponent
              title={"Views"}
              count={viewsCount as number}
              percentage={viewsPercentage as number}
              profit={viewsProfit as boolean}
            />

            <BoxComponent
              title={"Users"}
              count={userCount as number}
              percentage={userPercentage as number}
              profit={userProfit as boolean}
            />

            <BoxComponent
              title={"Subscription"}
              count={subscriptionsCount as number}
              percentage={subscriptionsPercentage as number}
              profit={subscriptionsProfit as boolean}
            />
          </div>

          <div className="shadow-[-1px_0px_6px_-1px_#0f4cf5] p-3 w-5/6 mx-auto my-5">
            <h1 className="font-semibold font-roboto text-xl tracking-wide ml-8">
              View Graph
            </h1>

             <LineChart views={stats.map((item)=>item.views)}/>

          </div>

          <div className="flex p-4 w-5/6 mx-auto">
            <div className="w-3/5">

            </div>


            <div className="w-2/5">
            <DoughnutChart users={[subscriptionsCount as number ,userCount as number - Number(subscriptionsCount)]}/>
            </div>

          
          </div>



        </div>
      </div>

      <Footer />
    </>
  );
};

const BoxComponent = ({
  title,
  count,
  percentage,
  profit,
}: {
  title: string;
  count: number;
  percentage: number;
  profit: boolean;
}) => (
  <div className="shadow-[-1px_0px_6px_-1px_#0f4cf5] p-7 w-[25%] max-[900px]:my-2 max-[900px]:w-4/5">
    <p className="text-roboto text-xl w-10">{title}</p>

    <div className="flex justify-between items-center my-1 w-4/5">
      <p className="font-bold text-lg">{count}</p>

      <p>{percentage}%</p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`w-6 h-6 ${profit ? "text-green-600" : "text-red-600"}`}
        fill="currentColor"
      >
        <path
          d={
            profit
              ? "M12.9999 7.82843V20H10.9999V7.82843L5.63589 13.1924L4.22168 11.7782L11.9999 4L19.778 11.7782L18.3638 13.1924L12.9999 7.82843Z"
              : "M12.9999 16.1716L18.3638 10.8076L19.778 12.2218L11.9999 20L4.22168 12.2218L5.63589 10.8076L10.9999 16.1716V4H12.9999V16.1716Z"
          }
        ></path>
      </svg>
    </div>

    <p className="text-color3 font-semibold">Since Last Month</p>
  </div>
);

export default Dashboard;
