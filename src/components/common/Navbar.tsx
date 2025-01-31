import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const openSideBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="">
      <div className="flex bg-white dark:bg-gray-800 py-2 px-6">
        <IoMenu
          className="dark:text-gray-300 mt-2 mr-2 text-gray-500"
          onClick={openSideBar}
        />
        <input
          className="dark:bg-gray-800 border bg-white border-gray-400 rounded-full px-4 py-1 dark:border-gra y-300 dark:text-gray-300 w-full outline-none text-gray-600"
          type="text"
          placeholder="Search"
        />
      </div>
      {sidebar && (
        <div className="fixed inset-0 top-12 z-50">
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default Navbar;
