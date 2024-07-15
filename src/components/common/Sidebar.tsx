import { useEffect, useState } from "react";
import { BsClockHistory } from "react-icons/bs";
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import ListOption from "../sidebar/ListOption";

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
    <div className="bg-white dark:bg-gray-600 w-52 h-80 ml-4 rounded-md p-4 mt-2 shadow-2xl">
      <ListOption logo={<MdOutlineBookmarkBorder />} name={"Saved Messages"} handleClick={handleTheme} />
      <ListOption logo={<BsClockHistory />} name={"My Stories"} handleClick={handleTheme} />
      <ListOption logo={<MdOutlinePerson />} name={"Contacts"} handleClick={handleTheme} />
      <ListOption logo={<MdOutlineSettings />} name={"settings"} handleClick={handleTheme} />
      <ListOption logo={<LuMoonStar />} name={"Dark Mode"} handleClick={handleTheme} />
      <ListOption logo={<MdOutlineBookmarkBorder />} name={"Animations"} handleClick={handleTheme} />
      <ListOption logo={<MdOutlineSettings />} name={"Telegram Features"} handleClick={handleTheme} />
      <ListOption logo={<MdOutlineSettings />} name={"Report Bug"} handleClick={handleTheme} />
      <ListOption logo={<MdOutlineSettings />} name={"Switch to A version"} handleClick={handleTheme} />
      <ListOption logo={<MdOutlineSettings />} name={"Install App"} handleClick={handleTheme} />
    </div>
  );
};

export default Sidebar;
