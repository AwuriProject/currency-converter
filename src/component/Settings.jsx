import React, { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { RxSwitch } from "react-icons/rx";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  useEffect(() => {
    document.querySelector(".main-container").style.backgroundColor = darkMode
      ? "#121212"
      : "#fff";
  }, [darkMode]);
  return (
    <div className="settings">
      <button className="btn" onClick={handleDarkMode}>
        <RxSwitch color={darkMode ? "#fff" : "#121212"} fontSize={24} />
      </button>
      <div className="icon__two">
        <IoMenuOutline color="#666666" fontSize={24} />
        <IoSettingsOutline color="#666666" fontSize={24} />
        <MdArrowOutward color="#666666" fontSize={24} />
      </div>
    </div>
  );
};

export default Settings;
