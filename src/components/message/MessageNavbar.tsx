import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const MessageNavbar = ({ name }: any) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center  bg-white dark:bg-gray-800">
      <div className="flex py-2">
        <div className="md:hidden flex justify-center items-center">
          <FaArrowLeft
            className="text-2xl font-thin m-2 text-gray-600 dark:text-gray-300"
            onClick={handleBack}
          />
        </div>
        <div>
          <img
            className="w-12 rounded-full"
            src="../../../src/assets/demoProfileForTelegram.jpeg"
            alt=""
          />
        </div>
        <div className="ml-3">
          <h1 className="font-semibold text-gray-800 dark:text-gray-200">
           {name || "No Name" }
          </h1>
          <p className="text-sm text-gray-800 dark:text-gray-200">
            last seen yesterday
          </p>
        </div>
      </div>
      <div>
        <div className="flex">
          <MdOutlineCall className="text-2xl mr-2 text-gray-600 dark:text-gray-200" />
          <IoSearchSharp className="text-2xl mr-2 text-gray-600 dark:text-gray-200" />
          <HiOutlineDotsVertical className="text-2xl text-gray-600 dark:text-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default MessageNavbar;
