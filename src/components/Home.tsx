import React from "react";

const Home:React.FC = () => {

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
        <div className="home">
            <div>HI！我是Kurt&nbsp;&nbsp;&nbsp;黑黑！！</div>
            <div className="homeBanner" onClick={()=>{scrollToAnchor('PROJECT')}}>
                <div className="homeBannerInner">作品集</div>
            </div>
        </div>
    );
}
  
export default Home;
  
