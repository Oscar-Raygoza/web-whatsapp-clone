import React from "react";

import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  Mic,
} from "@material-ui/icons";

import "./styles/Chat.scss";

export default function () {
  return (
    <section className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>lats seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <div className="chat__date">
          <span className="chat__date--span">
            {new Date().toLocaleString("en-US", {
              weekday: "long",
            })}
          </span>
        </div>
        <p className="chat__message">
          <span data-testid="tail-in" data-icon="tail-in" class="_2-dPL">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8 13"
              width="8"
              height="13"
            >
              <path
                opacity=".13"
                fill="#0000000"
                d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
              ></path>
              <path
                fill="currentColor"
                d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
              ></path>
            </svg>
          </span>
          <span className="chat__name">Oscar</span> this is a message
          <span className="chat__timestamp">
            {new Date().toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </span>
        </p>

        <p className="chat__message">
          <span data-testid="tail-in" data-icon="tail-in" class="_2-dPL">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8 13"
              width="8"
              height="13"
            >
              <path
                opacity=".13"
                fill="#0000000"
                d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
              ></path>
              <path
                fill="currentColor"
                d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
              ></path>
            </svg>
          </span>
          <span className="chat__name">Oscar</span> this is a message
          <span className="chat__timestamp">
            {new Date().toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </span>
        </p>

        <p className="chat__message chat__reciver">
          <span data-testid="tail-in" data-icon="tail-in" class="_2-dPL">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8 13"
              width="8"
              height="13"
            >
              <path
                opacity=".13"
                fill="#0000000"
                d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
              ></path>
              <path
                fill="currentColor"
                d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
              ></path>
            </svg>
          </span>
          <span className="chat__name">Oscar</span> this is a message
          <span className="chat__timestamp">
            {new Date().toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form action="">
          <input type="text" placeholder="Type a message" />
          <button type="submit" onClick="">
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </section>
  );
}
