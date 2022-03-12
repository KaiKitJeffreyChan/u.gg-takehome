import React from 'react'
import './Banner.css'
import BannerImage from "../../assets/BannerImages/Taliyah.png"
import ViewsIcon from "../../assets/BannerImages/Views.png"
import LikesIcon from "../../assets/BannerImages/Likes.png"
import UserIcon from "../../assets/BannerImages/UserIcon.png"
import UserIconRight from "../../assets/BannerImages/UserIconRight.png"

const Banner = (props: any) => {
    return (
        <div className="banner">
            <img src={BannerImage} className="background-gradient" />
            <span className="text-section">
                <span className="center-horizontally">
                    <img src={UserIcon} className="username-icon" />
                    <p className="username">YummiZoomies</p>
                    <img src={UserIconRight} className="username-icon-right" />
                </span>
                <span className="center-horizontally">
                    <img src={ViewsIcon} className="views" />
                    <p className="reactions">1,302,302 views</p>
                    <div className="vertical-line" ></div>
                    <img src={LikesIcon} className="likes" />
                    <p className="reactions"> 93,039 </p>
                </span>
                <h1 className="title"> The Wall Mover | Top Teir Taliyah Guide for Beginners an...</h1>
                <p className="description"> Learn all you need to know about Taliyah to get started. Mid + Support roles included</p>
                <button className="banner-button">
                    Read Guide
                </button>
            </span>
        </div >
    )
}

export default Banner
