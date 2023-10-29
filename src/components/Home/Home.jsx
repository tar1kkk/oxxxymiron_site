import React from 'react';
import MainBanner from "./MainBanner";
import TourItems from "../Tour/TourItems";
import TourBanner from "./TourBanner";
import Tracks from "../Tracks/Tracks";

function Home() {
    return (
        <div className='main'>
            <MainBanner/>
            <TourItems/>
            <TourBanner/>
            <Tracks/>
        </div>
    );
}

export default Home;