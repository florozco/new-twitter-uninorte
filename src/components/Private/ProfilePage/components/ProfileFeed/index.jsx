import React from "react";
import "../../../../../styles/profileFeed.scss";
import { Avatar } from "@mantine/core";

const ProfileFeed = ({ username, name }) => {
  return (
    <div className="profileFeed">
      <div className="profileFeed_bg"></div>
      <div className="profileFeed__header">
        <div className="profileFeed__avatarContainer">
          <Avatar
            radius="xl"
            size="md"
            className="profileFeed__avatar"
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          />
        </div>
        <div className="profileFeed__id">
          <div className="profileFeed__name">{name}</div>
          <span>@{username}</span>
        </div>
        <div className="profileFeed__stats">
          <ul className="profileFeed__arrangeDetails">
            <li className="profileFeed__details">
              <span className="profileFeed__label">Tweets</span>
              <span className="profileFeed__number">34</span>
            </li>
            <li className="profileFeed__details">
              <span className="profileFeed__label">Following</span>
              <span className="profileFeed__number">55</span>
            </li>
            <li className="profileFeed__details">
              <span className="profileFeed__label">Followers</span>
              <span className="profileFeed__number">64</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileFeed;
