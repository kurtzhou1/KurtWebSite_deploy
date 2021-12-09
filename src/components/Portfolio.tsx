import React from "react";

const Portfolio:React.FC = () => {

    return (
        <div className="portfolio">
            <div className="portfolioContainer">
                <div>
                    <h4 className="title">前端技能</h4>
                    <ul className="content">
                        <li>熟悉前端網頁技術(Html5+CSS3/JS/JQuery)</li>
                        <li>熟悉響應式網頁設計 ( RWD )</li>
                        <li>擁有Material-UI及Chakra-UI框架開發經驗</li>
                        <li>理解 AJAX 並能夠介接 RESTful API</li>
                        <li>熟悉 React 前端框架、React HookRedux狀態管理，並會運用組件式開發系統</li>
                        <li>熟悉Git工具使用及Git指令</li>
                        <li>熟悉Drupal頁面呈現操作</li>
                    </ul>
                </div>
                <div>
                    <h4 className="title">後端技能</h4>
                    <ul className="content">
                        <li>熟悉 Node.js，並會使用 FireBase 來做為後端的資料庫開發</li>
                        <li>Java簡易開發及Debug處理</li>
                        <li>熟悉SQL Server操作及Store Procedure開發</li>
                        <li>略懂Linux/Unix操作</li>
                    </ul>
                </div>
                <div>
                    <h4 className="title">其他</h4>
                    <ul className="content">
                        <li>擁有Microsoft Azure證照 - Microsoft Azure Developer Associate</li>
                        <li>職業安全證照</li>
                        <li>急救人員證照</li>
                        <li>專案管理經驗</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
  
export default Portfolio;
  
