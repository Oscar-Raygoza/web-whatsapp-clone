import React from "react";
import "./styles/Slidebar.scss";

import SlidebarChat from "../components/SlidebarChat";

import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
export default function () {
  return (
    <section className="slidebar">
      <div className="slidebar__header">
        <Avatar src="https://avatars1.githubusercontent.com/u/37164456?s=60&v=4" />
        <div className="slidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="slidebar__search">
        <div className="slidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="slidebar__chats">
        <SlidebarChat />
        <SlidebarChat />
        <SlidebarChat />
      </div>
    </section>
  );
}
