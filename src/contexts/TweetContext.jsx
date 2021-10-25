import { useState, useEffect, createContext, useContext } from "react";
import {
  fetchTweets,
  createTweet,
  deleteTweet,
  addLikeToTweet,
  addCommentToTweet,
  deleteComment,
} from "../services/api";

const TweetContext = createContext();

export const useTweets = () => {
  return useContext(TweetContext);
};

export const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);

  const getTweets = async () => {
    const res = await fetchTweets().then((data) => data.data);
    setTweets(res.data);
  };

  const addTweet = async (tweet) => {
    await createTweet(tweet).then((data) => data.data);
    await getTweets();
  };

  const removeTweet = async (tweetId, userId) => {
    await deleteTweet(tweetId, userId).then((data) => data.data);
    await getTweets();
  };

  const likeTweet = async (tweetId, likeStatus) => {
    try {
      await addLikeToTweet(tweetId, likeStatus).then((data) => data.data);
      await getTweets();
    } catch (err) {
      throw new Error(err);
    }
  };

  const makeComment = async (tweetId, comment) => {
    try {
      await addCommentToTweet(tweetId, comment).then((data) => data.data);
      await getTweets();
    } catch (err) {
      throw new Error(err);
    }
  };

  const removeComment = async (commentId, userId) => {
    await deleteComment(commentId, userId).then((data) => data.data);
    await getTweets();
  };

  useEffect(() => {
    getTweets();
  }, []);

  const value = {
    tweets,
    addTweet,
    removeTweet,
    likeTweet,
    getTweets,
    makeComment,
    removeComment,
  };

  return (
    <TweetContext.Provider value={value}>{children}</TweetContext.Provider>
  );
};
