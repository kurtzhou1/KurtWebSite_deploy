import React from "react";
import pomodoro from "../img/Pomodoro.jpg";
import youtube from "../img/youtube.jpg";

const Project:React.FC = () => {

    return (
        <div className="project">
            <div className="projectDetail">
                <img src={youtube} />
                <div className="info">
                    <div className="title">仿YouTube</div>
                    <div className="detail">使用React+TypeScript串接 Youtube 的API 可實際查詢 與播放影片</div>
                </div>
                <div className="button">
                    <div><a href="https://kurtzhou1.github.io/mySelf/">DEMO</a></div>
                    <div><a href="https://github.com/kurtzhou1/Bank4.0">Github</a></div>
                </div>
            </div>
            <div className="projectDetail">
                <img src={pomodoro} />
                <div className="info">
                    <div className="title">番茄鐘</div>
                    <div className="detail">使用React+TypeScript搭配Redux及Hook的番茄鐘專案</div>
                </div>
                <div className="detail"></div>
                <div className="button">
                    <div><a href="https://kurtzhou1.github.io/Pomodoro_deploy/">DEMO</a></div>
                    <div><a href="https://github.com/kurtzhou1/Pomodoro">Github</a></div>
                </div>
            </div>
        </div>
    );
}
  
export default Project;
  
