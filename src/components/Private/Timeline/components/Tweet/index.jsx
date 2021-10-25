import React, { useState } from "react";
import "../../../../../styles/tweet.scss";
import CommentBox from "../CommentBox";
import { Avatar, ActionIcon, Modal, Menu } from "@mantine/core";
import { MdVerified } from "react-icons/md";
import {
  FaRegComment,
  FaRegShareSquare,
  FaRegHeart,
  FaRetweet,
  FaRegTrashAlt,
  FaHeart,
} from "react-icons/fa";
import { useSnackbar } from "notistack";
import { useAuth } from "../../../../../contexts/AuthContext";
import { useTweets } from "../../../../../contexts/TweetContext";

const Tweet = ({
  username,
  displayName,
  verified,
  text,
  tweetId,
  userId,
  comments,
  isComment,
  commentId,
  likes,
}) => {
  const [opened, setOpened] = useState(false);
  const [liked, setLiked] = useState(false);
  const {
    currentUser: { username: currUsername },
  } = useAuth();
  const { removeTweet, likeTweet, removeComment } = useTweets();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteTweet = async () => {
    try {
      await removeTweet(tweetId, userId);
      enqueueSnackbar("Tweet deleted", {
        variant: "success",
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
    } catch (err) {
      enqueueSnackbar("There was an error deleting your tweet", {
        variant: "error",
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
    }
  };

  const handleDeleteComment = async () => {
    try {
      await removeComment(commentId, userId);
      enqueueSnackbar("Comment deleted", {
        variant: "success",
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
    } catch (err) {
      enqueueSnackbar("There was an error deleting your comment", {
        variant: "error",
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
    }
  };

  const handleTweetLike = async () => {
    setLiked(!liked);
    try {
      await likeTweet(tweetId, liked ? 1 : 0);
    } catch (err) {
      enqueueSnackbar("There was an error liking the tweet", {
        variant: "error",
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} hideCloseButton>
        <CommentBox
          displayName={displayName}
          username={username}
          text={text}
          comments={comments}
          tweetId={tweetId}
        />
      </Modal>
      <div className="tweet">
        <div className="tweet__avatar">
          <Avatar
            radius="xl"
            size="md"
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          />
        </div>
        <div className="tweet__body">
          <div className="tweet__header">
            <div className="tweet__headerText">
              <h3>
                {displayName}{" "}
                <span className="tweet__headerSpecial">
                  {verified && <MdVerified className="tweet__badge" />} @
                  {username}
                </span>
              </h3>
              {currUsername === username && !isComment && (
                <Menu className="tweet__dropdown">
                  <Menu.Item
                    color="red"
                    icon={<FaRegTrashAlt />}
                    onClick={() => handleDeleteTweet()}
                  >
                    Delete Tweet
                  </Menu.Item>
                </Menu>
              )}

              {currUsername === username && isComment && (
                <ActionIcon
                  size="lg"
                  radius="lg"
                  className="comment_iconContainer"
                  onClick={() => handleDeleteComment()}
                >
                  <FaRegTrashAlt className="tweet__icon" />
                </ActionIcon>
              )}
            </div>
            <div className="tweet__headerDescription">
              <p>{text}</p>
            </div>
            {!isComment ? (
              <div className="tweet__footer">
                <ActionIcon
                  size="lg"
                  radius="lg"
                  className="tweet__iconContainer"
                  onClick={() => setOpened(true)}
                >
                  <span style={{ marginRight: 3 }}>{comments.length}</span>
                  <FaRegComment className="tweet__icon" />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  radius="lg"
                  className="tweet__iconContainer"
                >
                  <FaRetweet className="tweet__icon" />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  radius="lg"
                  className="tweet__iconContainer"
                  onClick={() => handleTweetLike()}
                >
                  <span style={{ marginRight: 3 }}>{likes}</span>
                  {liked ? (
                    <FaHeart className="tweet__icon--red" />
                  ) : (
                    <FaRegHeart className="tweet__icon" />
                  )}
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  radius="lg"
                  className="tweet__iconContainer"
                >
                  <FaRegShareSquare className="tweet__icon" />
                </ActionIcon>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweet;
