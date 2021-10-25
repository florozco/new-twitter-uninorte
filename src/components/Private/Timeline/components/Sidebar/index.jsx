import React, { useState } from "react";
import "../../../../../styles/sidebar.scss";

import { Button, Modal } from "@mantine/core";

import SidebarOption from "../SidebarOption";
import TweetBox from "../TweetBox";

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

const Sidebar = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal hideCloseButton opened={opened} onClose={() => setOpened(false)}>
        <TweetBox setOpened={setOpened} />
      </Modal>
      <div className="sidebar">
        <FaTwitter className="sidebar_tweeterIcon" />

        {/* SidebarOptions */}
        <SidebarOption active text="Home" Icon={FaHome} />
        <SidebarOption text="Explore" Icon={FaHashtag} />
        <SidebarOption text="Notifications" Icon={FaRegBell} />
        <SidebarOption text="Messages" Icon={FaRegEnvelope} />
        <SidebarOption text="Bookmarks" Icon={FaRegBookmark} />
        <SidebarOption text="Lists" Icon={FaRegListAlt} />
        <SidebarOption text="Profile" Icon={FaRegUser} />
        <SidebarOption text="More" Icon={FaEllipsisH} />

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
