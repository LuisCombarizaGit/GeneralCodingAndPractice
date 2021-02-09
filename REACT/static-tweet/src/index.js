import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FaReply } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { GrMore } from "react-icons/gr";
import moment from "moment";

// add the {tweet} destructuring
function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar({ hash }) {
  var url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function NameWithHandle({ author }) {
  const { name, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

const ReplyButton = () => (
  <span className="reply-button">
    <FaReply />
  </span>
);

function getRetweetCount(count){
  if(count > 0){
    return(
      <span className="retweet-count">
        {count}
      </span>
    );
  }
    else{
      return null;
    }
  }


const RetweetButton = ({count}) => (
  <span className="retweet-button">
    <FaRetweet />
    {getRetweetCount(count)}
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

var testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IM CAT",
  },
  likes: 2,
  retweets: 0,
  timestamp: "2017-07-30 21:0:0",
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
