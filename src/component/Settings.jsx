import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

const Settings = () => {
  return (
    <div className="settings">
      <IoMenuOutline color="#666666" fontSize={40} />
      <IoSettingsOutline color="#666666" fontSize={35} />
      <MdArrowOutward color="#666666" fontSize={40} />
    </div>
  );
};

export default Settings;
