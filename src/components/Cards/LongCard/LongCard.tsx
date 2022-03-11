import React from 'react'
import ViewsIcon from '../../../assets/LongCardImages/Views.png'
import LikesIcon from "../../../assets/LongCardImages/Likes.png"
import "./LongCard.css"

interface ILongCard {
    username: string,
    // tags: [],
    title: string,
    likes: number,
    views: number,
    img: string,
    description: string,
    userImage: string,
}

const LongCard = ({ username, title, likes, views, img, description, userImage }: ILongCard) => {
    return (
        <div className="long-card">
            <img src={img} className="long-card-img" />
            <span className="text-section">
                <span className="center-horizontally-user">
                    <img src={userImage} className="user-icon" />
                    <div className="username">
                        <p className="username-text">{username}</p>
                    </div>
                    <button className="tag"> Champion Guide </button>
                    <button className="tag"> Draven </button>
                </span>
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
                <span className="center-horizontally-reactions">
                    <img src={ViewsIcon} className="views" />
                    <p className="reactions">1,302,302 views</p>
                    <div className="vertical-line" />
                    <img src={LikesIcon} className="likes" />
                    <p className="reactions"> 93,039 </p>
                </span>
            </span>
        </div>
    )
}

export default LongCard
