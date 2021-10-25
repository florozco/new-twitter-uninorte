import React from "react";
import "../../../../../styles/trendTweet.scss";

const TrendTweet = ({ index, hashtag, tweetQTY }) => {
  return (
    <div className="trendTweet">
      <div className="trendTweet__body">
        <div className="trendTweet__header">
          <div className="trendTweet__headerText">
            <h3>1. Trending</h3>
          </div>
          <div className="trendTweet__hashtag">
            <h4>#Loremipsum</h4>
          </div>
          <div className="trendTweet_tweetQTY">
            <p>456K Tweets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendTweet;
