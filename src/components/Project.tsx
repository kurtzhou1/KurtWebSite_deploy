import React from "react";
import pomodoro from "../img/Pomodoro.jpg";
import youtube from "../img/youtube.jpg";
import bingo from "../img/Bingo.jpg";
import cart from "../img/cart.jpg";

const Project:React.FC = () => {

    return (
        <div className="project">
            <div className="projectDetail">
                <img src={youtube} alt="youtube" />
                <div className="info">
                    <div className="title">仿YouTube</div>
                    <div className="detail">使用React+TypeScript串接 Youtube 的API 可實際查詢 與播放影片。</div>
                </div>
                <div className="button">
                    <div><a href="https://kurtzhou1.github.io/mySelf/">DEMO</a></div>
                    <div><a href="https://github.com/kurtzhou1/Bank4.0">Github</a></div>
                </div>
            </div>
            <div className="projectDetail">
                <img src={pomodoro} alt="pomodoro" />
                <div className="info">
                    <div className="title">番茄鐘</div>
                    <div className="detail">使用React+TypeScript搭配Redux及Hook的番茄鐘專案。</div>
                </div>
                <div className="button">
                    <div><a href="https://kurtzhou1.github.io/Pomodoro_deploy/">DEMO</a></div>
                    <div><a href="https://github.com/kurtzhou1/Pomodoro">Github</a></div>
                </div>
            </div>
            <div className="projectDetail special">
                <img src={bingo} alt="bingo" />
                <div className="info">
                    <div className="title">Bingo遊戲專案(公司尾牙使用)</div>
                    <div className="detail">參與前端使用React搭配Chakra UI切版，銜接FireBase偵測資料異動時即時傳送最新資訊至大螢幕端。</div>
                </div>
            </div>
            <div className="projectDetail special">
                <img src={cart} alt="bingo" />
                <div className="info">
                    <div className="title">家教平台專案</div>
                    <div className="detail">參與計算購物車功能；並串接API，包含購物車商品、可使用折價券、提交訂單並至藍新金流作驗證</div>
                </div>
            </div>
        </div>
    );
}
  
export default Project;
  
