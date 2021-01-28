import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FaReply } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { GrMore } from "react-icons/gr";
import moment from "moment";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle />
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

var testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAM Cat Person",
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37",
};

ReactDOM.render(<Tweet />, document.querySelector("#root"));

function Avatar({ hash }) {
  var url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function NameWithHandle({ author }) {
  const { name, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle"> @{hanldle}</span>
    </span>
  );
}

function ReplyButton() {
  return <FaReply />;
}

function RetweetButton() {
  return <FaRetweet />;
}

function LikeButton() {
  return <FcLike />;
}

function MoreOptionsButton() {
  return <GrMore />;
}
