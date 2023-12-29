import { Link } from "react-router-dom";
import { ICategoryPropType } from "../types/types";

const CategoryCard = ({
  title,
  fill,
  iconColor,
  bgColor,
  path,
}: ICategoryPropType) => {

  return (
    <Link to={"/"} className="flex p-2 w-[28%] border rounded my-2">
      <div className={`bg-${bgColor} p-4 rounded`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-8 h-8 text-${iconColor}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={path}
          />
        </svg>
      </div>

      <p className="font-bold font-roboto">{title}</p>
    </Link>
  );
};

export default CategoryCard;
