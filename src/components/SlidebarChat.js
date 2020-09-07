import React from "react";
import "./styles/SlidebarChat.scss";
import { Avatar } from "@material-ui/core";

export default function SlidebarChat() {
  return (
    <div className="slidebarChat">
      <Avatar />
      <div className="slidebarChat__info">
        <h2>Room Name</h2>
        <p>this is the last message</p>
      </div>
    </div>
  );
}
