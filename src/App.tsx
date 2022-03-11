import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import SmallCard from './components/Cards/SmallCard/SmallCard'
import LongCard from './components/Cards/LongCard/LongCard'
import Footer from './components/Footer/Footer';
import { FaBeer } from 'react-icons/fa';
import img1 from "./assets/SmallCardImages/img1.png"
import img2 from "./assets/LongCardImages/heimer.png"
import userImage from "./assets/NavbarImages/UserIcon.png"



const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Banner /> */}
      {/* <Footer /> */}
      {/* <SmallCard username="TailMid9999" title="2022 COMPLETE Yummi Guide Support" likes={203028} views={93039} img={img1} /> */}
      <LongCard username="TeemoMain90210" userImage={userImage} description="Climb you way to Platinum with this #1 NA Heimer build. New player-friendly" title="2022 COMPLETE Yummi Guide Support" likes={203028} views={93039} img={img2} />
      <LongCard username="TeemoMain90210" userImage={userImage} description="Climb you way to Platinum with this #1 NA Heimer build. New player-friendly" title="2022 COMPLETE Yummi Guide Support" likes={203028} views={93039} img={img2} />
      <LongCard username="TeemoMain90210" userImage={userImage} description="Climb you way to Platinum with this #1 NA Heimer build. New player-friendly" title="2022 COMPLETE Yummi Guide Support" likes={203028} views={93039} img={img2} />
      <LongCard username="TeemoMain90210" userImage={userImage} description="Climb you way to Platinum with this #1 NA Heimer build. New player-friendly" title="2022 COMPLETE Yummi Guide Support" likes={203028} views={93039} img={img2} />
    </div>
  );
}

export default App;
