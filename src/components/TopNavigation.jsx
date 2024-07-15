import React from "react";
import arrDown from "../assets/img/arrDown.svg";
import arrow from "../assets/img/arrow.svg";
import downloadFile from "../assets/img/download-file.svg";

function TopNavigation() {
  return (
    <div className="top_nav">
      <div className="top__nav_left">
        <div className="top__nav_btns">
          <div className="top__nav_btn">
            <div className="top__nav_btn_num">10</div>
            <img src={arrDown} alt="" className="top__nav_btn_arr" />
          </div>
          <div className="top__nav_btn_gray">10 / 5466</div>
        </div>
        <div className="top__nav_switcher"></div>
        <div className="top__nav_export"></div>
      </div>
      <div className="top__nav_center">
        <img src={arrow} alt="" className="top__nav_center_btn" />
        <div className="top__nav_center_currentNumber">
          <div className="top__nav_center_num">1</div>
          <div className="top__nav_center_num non-current">2</div>
          <div className="top__nav_center_num non-current">3</div>
          <div className="top__nav_center_num non-current">...</div>
          <div className="top__nav_center_num non-current">10</div>
        </div>
        <img src={arrow} alt="" className="top__nav_center_btn_right" />
      </div>
      <div className="top__nav_right">
        <img src={downloadFile} alt="" className="top__nav_right_img" />
        <div className="top__nav_right_txt">экспорт</div>
      </div>
    </div>
  );
}

export default TopNavigation;
