import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";

const Sidebar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-white dark:bg-gray-600 w-52 h-80 ml-4 rounded-md p-4 mt-2">
        <h1 className="text-gray-600 dark:text-gray-300">Saved Messages</h1>
        <h1 className="text-gray-600 dark:text-gray-300">My Stories</h1>
        <h1 className="text-gray-600 dark:text-gray-300">Contact</h1>
      <button
        className="border border-gray-700 dark:border-gray-300 p-2 rounded-full"
        onClick={handleTheme}
      >
       <MdOutlineLightMode className="text-gray-600 dark:text-gray-300" />
      </button>
    </div>
  );
};

export default Sidebar;
