import React, { useState } from "react";
import "../../../../../styles/commentBox.scss";

import { useForm } from "@mantine/hooks";
import { Avatar, TextInput, Button } from "@mantine/core";
import { MdVerified } from "react-icons/md";
import { useTweets } from "../../../../../contexts/TweetContext";
import { useSnackbar } from "notistack";
import Tweet from "../Tweet";

const CommentBox = ({
  displayName,
  verified,
  username,
  text,
  tweetId,
  comments,
}) => {
  const { makeComment } = useTweets();
  const { enqueueSnackbar } = useSnackbar();
  const [creatingComment, setCreatingComment] = useState(false);

  const form = useForm({
    initialValues: {
      comment: "",
    },
  });

  const handleComment = async ({ comment }) => {
    setCreatingComment(true);

    try {
      await makeComment(tweetId, comment);
      form.setFieldValue("comment", "");
      enqueueSnackbar("Your comment was created", {
        variant: "success",
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
    } catch (err) {
      enqueueSnackbar("There was an error creating your comment", {
        variant: "error",
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
    }
    setCreatingComment(false);
  };

  return (
    <div>
      <div className="commentBox__tweet">
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
            </div>
          </div>
          <div className="tweet__headerDescription">
            <p>{text}</p>
          </div>
        </div>
      </div>

      {/* Comment */}

      {comments.length > 0
        ? comments.map((item) => (
            <Tweet
              key={item._id}
              username={item.user.username}
              displayName={item.user.name}
              text={item.comment}
              isComment
              commentId={item._id}
            />
          ))
        : null}

      {/* Comment Input*/}
      <div className="commentBox tweet__avatar">
        <form onSubmit={form.onSubmit((values) => handleComment(values))}>
          <Avatar
            radius="xl"
            size="md"
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          />
          <TextInput
            className="commentBox__input"
            value={form.values.comment}
            placeholder="Tweet your answer"
            onChange={(event) =>
              form.setFieldValue("comment", event.currentTarget.value)
            }
          />
          <Button
            className="commentBox_tweetButton"
            type="submit"
            disabled={form.values.comment.length === 0}
            loading={creatingComment}
          >
            Comment
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CommentBox;
