import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTracksItems} from "../../reducers/tracksReducer";
import Section from "../Section/Section";
import SectionTitle from "../Title/SectionTitle";
import ScrollAnimation from "react-animate-on-scroll";
import Icon from "../Icon/Icon";
import {getLocalDateString} from "../../utils/common";

function Tracks(props) {
    const dispatch = useDispatch();
    const {items = [], isLoading} = useSelector((state) => state.tracks);
    useEffect(() => {
        dispatch(getTracksItems());
    }, [dispatch]);

    return (
        <Section className="tracks-section">
            <div className="container">
                <SectionTitle text="Релизы"/>
                {isLoading  == "loading"
                    ? <h2>Loading</h2>
                    : (
                        <div className='tracks'>
                            {items.filter((_, i) => i < 3).map(({cover,date, title, sys: {id}}) => (
                        <ScrollAnimation key={id} className='track-item' anumateIn="fadeInOut" animateOut="fadeOutRight">
                            <div className="track">
                                <div className="track-image">
                                    <img src={cover.url} alt={title}/>
                                    <Icon name="pause"/>
                                </div>
                                <p className="track-date">
                                    {getLocalDateString(date,{month : "short"})}
                                </p>
                                <h3 className="track-title">{title}</h3>
                            </div>
                        </ScrollAnimation>
                        ))}
                    </div>
                    )}
            </div>
        </Section>
    );
}

export default Tracks;