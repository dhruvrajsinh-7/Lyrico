import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer = () => {
  return (
    <div className="justify-center flex flex-wrap gap-3 py-2 m-auto ">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};
const ShimmerCard = () => {
  return (
    <div className="flex flex-col gap-1 m-auto md:m-0 ">
      <Skeleton width={"250px"} height={"255px"} />
      <Skeleton width={"250px"} height={"25px"} />
      <Skeleton width={"250px"} height={"25px"} />
      <Skeleton width={"250px"} height={"25px"} />
    </div>
  );
};

export default Shimmer;
