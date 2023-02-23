import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://i.pinimg.com/originals/6c/76/b7/6c76b70ad85d76f1bfcf4eeabd34b4fa.jpg" />
      </div>
      <div>
        Ava + description
        {/* <img src="https://c4.wallpaperflare.com/wallpaper/442/671/649/anime-original-girl-starry-sky-hd-wallpaper-preview.jpg" /> */}
      </div>
      <div>
        Posts
        <div>New posts</div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
          <div>post 3</div>
          <div>post 4</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
