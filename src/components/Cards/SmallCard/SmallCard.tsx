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
                <span className="sc-text-section">
                    <div className="sc-username">
                        <p className="sc-username-text">{username}</p>
                    </div>
                    <h2 className="sc-title">{title}</h2>
                    <span className="sc-center-horizontally">
                        <img src={ViewsIcon} className="sc-views" />
                        <p className="sc-reactions">{views} views</p>
                        <div className="vertical-line" />
                        <img src={LikesIcon} className="sc-likes" />
                        <p className="sc-reactions"> {likes} </p>
                    </span>
                </span>
            </div>

        </div >
    )
}

export default SmallCard
