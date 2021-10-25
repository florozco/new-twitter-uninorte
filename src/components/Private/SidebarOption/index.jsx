import React from "react";
import "../../../styles/sidebarOption.scss";

const SidebarOption = ({ active, Icon, text, onClick }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`} onClick={onClick}>
      <Icon className="icon" />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
