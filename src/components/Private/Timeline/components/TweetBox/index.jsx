import React, { useState } from "react";
import "../../../../../styles/tweetBox.scss";

import { Button, Avatar, TextInput } from "@mantine/core";
import { useSnackbar } from "notistack";
import { useForm } from "@mantine/hooks";
import { useTweets } from "../../../../../contexts/TweetContext";

const TweetBox = ({ setOpened }) => {
  const [creatingTweet, setCreatingTweet] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { addTweet } = useTweets();

  const form = useForm({
    initialValues: {
      tweet: "",
    },
  });

  const handleSubmit = async ({ tweet }) => {
    setCreatingTweet(true);
    try {
      await addTweet(tweet);
      enqueueSnackbar("Tweet created Successfully", {
        variant: "success",
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
      form.setFieldValue("tweet", "");
    } catch (err) {
      enqueueSnackbar("There was an error creating your tweet", {
        variant: "error",
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
    }
    if (setOpened) {
      setOpened(false);
    }
    setCreatingTweet(false);
  };

  return (
    <div className="tweetBox">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <div className="tweetBox__input">
          <Avatar
            radius="xl"
            size="md"
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          />
          <TextInput
            value={form.values.tweet}
            placeholder="What's happening?"
            onChange={(event) =>
              form.setFieldValue("tweet", event.currentTarget.value)
            }
          />
        </div>
        <Button
          className="tweetBox_tweetButton"
          type="submit"
          loading={creatingTweet}
          disabled={form.values.tweet.length === 0}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
