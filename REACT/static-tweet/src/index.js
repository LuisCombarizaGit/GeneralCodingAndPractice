import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FaReply } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { GrMore } from "react-icons/gr";
import moment from "moment";

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar"
    />
  );
}

function Message() {
  return <div className="message">This is less than 140 char</div>;
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Your Name</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
}

const Time = () => <span className="time">3h ago</span>;

const ReplyButton = () => (
  <span className="reply-button">
    <FaReply />
  </span>
);

const RetweetButton = () => (
  <span className="retweet-button">
    <FaRetweet />
  </span>
);

const LikeButton = () => (
  <span className="LikeButton-button">
    <FcLike />
  </span>
);

const MoreOptionsButton = () => (
  <span className="MoreOptionsButton-button">
    <GrMore />
  </span>
);

ReactDOM.render(<Tweet />, document.querySelector("#root"));
