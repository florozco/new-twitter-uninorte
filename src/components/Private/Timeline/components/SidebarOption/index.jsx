import React from "react";
import "../../../../../styles/sidebarOption.scss";

const SidebarOption = ({ active, Icon, text }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon className="icon" />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
