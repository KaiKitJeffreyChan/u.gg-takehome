import React, { useState } from 'react'
import { Interface } from 'readline'
import './SmallCard.css'
import ViewsIcon from '../../../assets/SmallCardImages/Views.png'
import LikesIcon from "../../../assets/SmallCardImages/Likes.png"

interface ISmallCard {
    username: string,
    title: string,
    likes: number,
    views: number,
    img: string,
}

const SmallCard = ({ username, title, likes, views, img }: ISmallCard) => {

    return (
        <div className="small-card">


            <img src={img} className="small-card-image" />
            <div className="gradient">
                <span className="text-section">
                    <div className="username">
                        <p className="username-text">{username}</p>
                    </div>
                    <h2 className="title">{title}</h2>
                    <span className="center-horizontally">
                        <img src={ViewsIcon} className="views" />
                        <p className="reactions">1,302,302 views</p>
                        <div className="vertical-line" />
                        <img src={LikesIcon} className="likes" />
                        <p className="reactions"> 93,039 </p>
                    </span>
                </span>
            </div>

        </div >
    )
}

export default SmallCard
