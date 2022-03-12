import React from 'react';

//Components
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import SmallCard from './components/Cards/SmallCard/SmallCard'
import LongCard from './components/Cards/LongCard/LongCard'
import Footer from './components/Footer/Footer';

//Images
import img2 from "./assets/LongCardImages/heimer.png"
import userImage from "./assets/NavbarImages/UserIcon.png"
import lolLogo from "./assets/SmallCardImages/lolLogo.png"

//Data
import smallcarddata from "./Data/smallcarddata";
import longcarddata from "./Data/longcarddata";
import "./App.css"


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-banner">
        <Banner />
      </div>
      <div className="card-carosel">
        <div className="all-card-carosel">
          <span className="sub-heading">
            <img src={lolLogo} className="lolLogo" />
            <p>Trending</p>
            <p className="text-blue"> Leauge of Legends </p>
            <p>Guides</p>
          </span>
          <span className="listing-shortcards">
            {smallcarddata.map((card, i) => (
              <div className="main-small-card">
                <SmallCard username={card.username} title={card.title} views={card.views} likes={card.likes} img={card.img} />
              </div>
            ))}
          </span>
          {longcarddata.map((card, i) =>
            <div className="main-long-card">
              <LongCard username={card.username} userImage={card.userImage} description={card.description} title={card.title} likes={card.likes} views={card.views} img={img2} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
