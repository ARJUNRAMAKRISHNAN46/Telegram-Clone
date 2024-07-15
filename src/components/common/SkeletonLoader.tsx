import { Skeleton } from "@mui/material";

const SkeletonLoader = () => {
  return (
    <div className="w-full px-4">
      <div className="flex">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton
          variant="rectangular"
          className="ml-4"
          width={300}
          height={60}
        />
      </div>
      <div className="flex mt-4">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton
          variant="rectangular"
          className="ml-4"
          width={300}
          height={60}
        />
      </div>
      <div className="flex mt-4">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton
          variant="rectangular"
          className="ml-4"
          width={300}
          height={60}
        />
      </div>
    </div>
  );
};

export default SkeletonLoader;
