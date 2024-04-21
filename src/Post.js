import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Post({ avatarPic, image, username, timestamp, textMessage }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={avatarPic} className="post__avatar" />
        <div className="post__user">
          <h6>{username}</h6>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>

        <MoreHorizIcon className="options__icon" />
      </div>
      <div className="post__middle">
        <p>{textMessage}</p>
        <img src={image} alt="" />
      </div>
      <div className="post__bottom">
        <div className="post__bottom__options">
          <ThumbUpAltIcon />
          <p>Like</p>
        </div>
        <div className="post__bottom__options">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__bottom__options">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__bottom__options">
          <AccountCircleIcon />
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
