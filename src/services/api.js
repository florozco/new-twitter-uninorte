import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const signupUser = (user) => {
  return api.post("/users", { ...user });
};

export const loginUser = (username, password) => {
  return api.post("/users/login", { username, password });
};

export const fetchTweets = () => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  const config = {
    headers: {
      "x-access-token": token,
    },
  };

  return api.get("/tweets", config);
};

export const createTweet = (content) => {
  const token = JSON.parse(localStorage.getItem("user")).token;
  const config = {
    headers: {
      "x-access-token": token,
    },
  };
  return api.post("/tweets", { content }, config);
};

export const deleteTweet = (tweetId, userId) => {
  const token = JSON.parse(localStorage.getItem("user")).token;

  const config = {
    headers: {
      "x-access-token": token,
    },
  };

  return api.delete("/tweets", { tweetId, userId }, config);
};

export const addLikeToTweet = (tweetId, like) => {
  const token = JSON.parse(localStorage.getItem("user")).token;

  const config = {
    headers: {
      "x-access-token": token,
    },
  };

  return api.post("/tweets/likes", { tweetId, like }, config);
};

export const addCommentToTweet = (tweetId, comment) => {
  const token = JSON.parse(localStorage.getItem("user")).token;

  const config = {
    headers: {
      "x-access-token": token,
    },
  };

  return api.post("/tweets/comments", { tweetId, comment }, config);
};

export const deleteComment = (commentId, userId) => {
  const token = JSON.parse(localStorage.getItem("user")).token;

  const config = {
    headers: {
      "x-access-token": token,
    },
  };

  return api.delete("/tweets/comments", { commentId, userId }, config);
};
