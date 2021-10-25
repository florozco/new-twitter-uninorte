import React, { useEffect, useState } from "react";
import "../../../../../styles/feed.scss";

import TweetBox from "../TweetBox";
import Tweet from "../Tweet";
import { useTweets } from "../../../../../contexts/TweetContext";
import { useAuth } from "../../../../../contexts/AuthContext";
import ProfileFeed from "../../../ProfilePage/components/ProfileFeed";

const Feed = ({ profile }) => {
  const { tweets, getTweets } = useTweets();
  const { currentUser } = useAuth();

  useEffect(() => {
    getTweets();
  }, []);
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>{profile ? currentUser.name : "Home"}</h2>
      </div>
      {/* TweetBox */}
      {profile ? (
        <ProfileFeed name={currentUser.name} username={currentUser.username} />
      ) : (
        <TweetBox />
      )}
      {/* Tweet */}
      {tweets.length > 0
        ? tweets.map((tweet) => (
            <Tweet
              key={tweet.createdAt}
              username={tweet.user.username}
              displayName={tweet.user.name}
              text={tweet.content}
              tweetId={tweet._id}
              userId={tweet.user._id}
              comments={tweet.comments}
              likes={tweet.likes}
            />
          ))
        : null}
    </div>
  );
};

export default Feed;
