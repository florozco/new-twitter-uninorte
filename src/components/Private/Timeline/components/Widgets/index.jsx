import React from "react";
import "../../../../../styles/widgets.scss";
import { FaSearch } from "react-icons/fa";
import TrendTweet from "../TrendTweet";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <FaSearch className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__container">
        <h2>What's happening</h2>
        {/* TODO: Tweets en tendencia */}
        <TrendTweet />
        <TrendTweet />
        <TrendTweet />
      </div>
    </div>
  );
};

export default Widgets;
