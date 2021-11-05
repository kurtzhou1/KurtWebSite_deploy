import React from "react";

const Navbar:React.FC = () => {

    const scrollToAnchor = (anchorName:string) => {
        let anchorElement:HTMLElement | null = document.getElementById(anchorName);
        if (anchorElement) {
            let currentY: number = window.pageYOffset //當前視窗距離天花板的高度
            let targetBlockY: number = anchorElement.getBoundingClientRect().y //目標點距離當前視窗高度
            let headerOffset: number = window.innerWidth >= 980 ? -0.9 : 0    //調整移動距離目標點以上/以下的距離
            let offsetPosition: number = currentY + targetBlockY - headerOffset
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
        }
    }

    return (
        <div className="navbar">
            <div onClick={()=>{scrollToAnchor('HOME')}}>HOME</div>
            <div onClick={()=>{scrollToAnchor('ABOUT')}}>ABOUT</div>
            <div onClick={()=>{scrollToAnchor('PORTFOLIO')}}>PORTFOLIO</div>
            <div onClick={()=>{scrollToAnchor('PROJECT')}}>PROJECT</div>
        </div>
    );
}
  
export default Navbar;