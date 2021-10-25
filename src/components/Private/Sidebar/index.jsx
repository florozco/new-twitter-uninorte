import React, { useState } from "react";
import "../../../styles/sidebar.scss";

import { Button, Modal } from "@mantine/core";

import SidebarOption from "../SidebarOption";
import TweetBox from "../Timeline/components/TweetBox";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaRegListAlt,
  FaRegUser,
  FaEllipsisH,
} from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  const [opened, setOpened] = useState(false);
  const history = useHistory();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    history.push("/login");
  };

  return (
    <>
      <Modal hideCloseButton opened={opened} onClose={() => setOpened(false)}>
        <TweetBox setOpened={setOpened} />
      </Modal>
      <div className="sidebar">
        <FaTwitter className="sidebar_tweeterIcon" />

        {/* SidebarOptions */}
        <SidebarOption
          active
          text="Home"
          Icon={FaHome}
          onClick={() => history.push("/timeline")}
        />
        <SidebarOption text="Explore" Icon={FaHashtag} />
        <SidebarOption text="Notifications" Icon={FaRegBell} />
        <SidebarOption text="Messages" Icon={FaRegEnvelope} />
        <SidebarOption text="Bookmarks" Icon={FaRegBookmark} />
        <SidebarOption text="Lists" Icon={FaRegListAlt} />
        <SidebarOption
          text="Profile"
          Icon={FaRegUser}
          onClick={() => history.push("/profile")}
        />
        <SidebarOption text="More" Icon={FaEllipsisH} />
        <SidebarOption
          text="Logout"
          Icon={MdLogout}
          onClick={() => handleLogout()}
        />

        {/* Tweet Button */}
        <Button
          radius="xl"
          fullWidth
          className="sidebar__tweet"
          onClick={() => setOpened(true)}
        >
          Tweet
        </Button>
      </div>
    </>
  );
};

export default Sidebar;
