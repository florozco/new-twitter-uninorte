import React from "react";

import "../../../styles/displayStyles.scss";
import "../../../styles/timeline.scss";
import Sidebar from "../Sidebar"
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

const Timeline = () => {
  return (
    <div className="timeline">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default Timeline;
