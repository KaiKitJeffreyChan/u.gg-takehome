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
            <span className="lc-text-section">
                <span className="lc-center-horizontally-user">
                    <img src={userImage} className="lc-user-icon" />
                    <div className="lc-username">
                        <p className="lc-username-text">{username}</p>
                    </div>
                    <button className="lc-tag"> Champion Guide </button>
                    <button className="lc-tag"> Draven </button>
                </span>
                <h2 className="lc-title">{title}</h2>
                <p className="lc-description">{description}</p>
                <span className="lc-center-horizontally-reactions">
                    <img src={ViewsIcon} className="lc-views" />
                    <p className="lc-reactions">{views} views</p>
                    <div className="vertical-line" />
                    <img src={LikesIcon} className="lc-likes" />
                    <p className="lc-reactions"> {likes} </p>
                </span>
            </span>
        </div>
    )
}

export default LongCard
