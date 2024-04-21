import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://i.pinimg.com/originals/5e/7d/5b/5e7d5b944c93e7e6a85221c3668a19a4.jpg"
        title="Lebohang Mdlongwa"
        profileSrc="https://avatars.githubusercontent.com/u/141030719?s=400&u=31c254a04b7f31b7f1fc1e154fd477db35f92b42&v=4"
      />
      <Story
        image="https://e1.pxfuel.com/desktop-wallpaper/569/114/desktop-wallpaper-new-cb-background-cb-edits-background-swappy-pawar-background-cb-edits-thumbnail.jpg"
        title="Sarah Higgins"
        profileSrc="https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?cs=srgb&dl=pexels-kiyan-mirzaei-4420634.jpg&fm=jpg"
      />
      <Story
        image="https://i.pinimg.com/550x/4a/6f/59/4a6f59296f90c11d77744720ca10d1af.jpg"
        title="Brandon Rogers"
        profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Story
        image="https://cdn.cbeditz.com/cbeditz/preview/snapseed-outdoor-photo-editing-background-hd-v2jrihgmdj.webp"
        title="Michael Johns"
        profileSrc="https://www.opticalexpress.co.uk/media/1064/man-with-glasses-smiling-looking-into-distance.jpg"
      />
      <Story
        image="https://i.pinimg.com/1200x/e8/4c/c6/e84cc6af8fb7486bbf1833c9b3e403d9.jpg"
        title="Cillian Murphy"
        profileSrc="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
      />
    </div>
  );
}

export default StoryReel;
