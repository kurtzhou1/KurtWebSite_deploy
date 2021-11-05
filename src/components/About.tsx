import React from "react";

const About:React.FC = () => {

    return (
        <div className="about">
            <div className="info">
                <div className="me"></div>
                <div className="me2">一個喜歡在山海中規劃旅途擔任嚮導的工程師。</div>
            </div>
            <div className="infoDetail">
                擔任過系統工程師、專案經理、前端工程師，目前擔任程式分析師，負責前端居多，
                也支援後段開發，熟悉Bootstrap、ES6，因應不同的專案負責利用jQuery、React維護以前的專案，
                寫出具備RWD的前端網頁，能理解 AJAX 並能夠介接 RESTful API，並利用Redux額外管理專案的state及function，
                也協助專案使用JAVA開發客戶新的需求，並修正Bug。此外，擅長用報表開發工具開發各式報表，並具Stored Procedure撰寫經驗，
                並維護資料庫，包含建立、測試、更新及修改，並適時針對相關參數進行調校優化。
            </div>
        </div>
    );
}
  
export default About;
  
