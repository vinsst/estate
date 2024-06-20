import React from "react";
import house from "../../assets/img/house.svg";
import key from "../../assets/img/key.svg";
import video from "../../assets/img/SecSectionVideo.mp4";

function Two() {
  return (
    <div className="two container">
      <div className="two__button_container">
        <div className="two__button_btn">
          <img src={house} alt="" className="two__button_btn_img" />
        </div>
        <div className="two__button_btn">
          <img src={key} alt="" className="two__button_btn_img" />
        </div>
      </div>
      <div className="two__video_container">
        <video
          src={video}
          className="two__video_video"
          autoPlay
          loop
          muted
        ></video>
        <div className="two__video_txt_container">
          <span className="two__video_txt">
            Apartments with an initial payment from $25,000
          </span>
        </div>
      </div>
    </div>
  );
}
export default Two;
