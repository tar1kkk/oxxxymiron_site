import React from 'react';
import Section from "../Section/Section";
import SectionTitle from "../Title/SectionTitle";

function TourItems(props) {
    return (
        <Section className='tour'>
            <div className="container">
                <SectionTitle text='Концерт'/>
            </div>
        </Section>
    );
}

export default TourItems;