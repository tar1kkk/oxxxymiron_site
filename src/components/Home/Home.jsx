import React from 'react';
import MainBanner from "./MainBanner";
import TourItems from "../Tour/TourItems";

function Home() {
    return (
        <div className='main'>
            <MainBanner/>
            <TourItems/>
        </div>
    );
}

export default Home;