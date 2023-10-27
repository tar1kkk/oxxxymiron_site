import React from 'react';
import Section from "../Section/Section";
import video from "../../images/text.webm";

function MainBanner() {
    return (
        <Section>
            <div className="container">
                <h1 style={{ fontSize : 0,lineHeight : 0}}>Oxxymiron</h1>
                <div className="banner">
                    <video className="banner-video" width={1000} height='auto' loop muted autoPlay>
                        <source src={video} type="video/webm"/>
                    </video>
                </div>
            </div>
        </Section>
    );
}

export default MainBanner;