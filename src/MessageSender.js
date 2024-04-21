import React, { useState } from "react";
import "./MessageSender.css";
import Avatar from "@mui/material/Avatar";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideocamIcon from "@mui/icons-material/Videocam";
import MoodIcon from "@mui/icons-material/Mood";
import { green, yellow } from "@mui/material/colors";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      textMessage: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      avatarPic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setImageUrl("");
    setInput("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            placeholder={`Whats on your mind ${user.displayName}?`}
            className="messageSender__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            placeholder="image URL (Optional)"
            className="imageURL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit"></button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon sx={{ color: "red" }} />
          <h5>Live Video</h5>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon sx={{ color: green[700] }} />
          <h5>Photo/Video</h5>
        </div>
        <div className="messageSender__option">
          <MoodIcon sx={{ color: yellow[600] }} />
          <h5>Feeling/Activity</h5>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
