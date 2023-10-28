import React from 'react';
import MainBanner from "./MainBanner";
import TourItems from "../Tour/TourItems";
import TourBanner from "./TourBanner";

function Home() {
    return (
        <div className='main'>
            <MainBanner/>
            <TourItems/>
            <TourBanner/>
        </div>
    );
}

export default Home;