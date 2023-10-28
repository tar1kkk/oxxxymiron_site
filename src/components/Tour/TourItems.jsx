import React, {useEffect} from 'react';
import Section from "../Section/Section";
import SectionTitle from "../Title/SectionTitle";
import {useDispatch, useSelector} from "react-redux";
import {getTourItems} from "../../reducers/tourReducer";
import TourItem from "./TourItem";
import {Link} from "react-router-dom";
import {sortByDate} from "../../utils/common";

function TourItems(props) {
    const dispatch = useDispatch();
    const {items = [], isLoading} = useSelector((state)=> state.tour);
    useEffect(() => {
        dispatch(getTourItems());
    }, []);
    const filtered = sortByDate(items
        .filter(({ soldOut, ticketLink }) => !soldOut && ticketLink)
        .filter((_, i) => i < 5));

    console.log(filtered)
    return (
        <Section className='tour'>
            <div className="container">
                <SectionTitle text='Концерт'/>
                {isLoading === 'loading'
                    ? "LOADING"
                    : (
                    <ul className="tour-list">
                        {filtered.map((item,i)=>(
                            <TourItem {...item} key={item.sys.id} i={i}/>
                        ))}
                    </ul>
                )}
                <Link to="/tour" className='button-more'>
                    Все концерты
                </Link>
            </div>
        </Section>
    );
}

export default TourItems;