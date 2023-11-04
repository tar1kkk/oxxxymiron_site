import React from 'react';
import {SOCIALS} from "../../utils/constants";
import Icon from "../Icon/Icon";

function Socials() {
    return (
        <ul className="socials">
            {SOCIALS.map(({icon,link})=>(
                <li title={icon} className="socials-item" key={icon}>
                    <a href={link} target='__blank'>
                        <Icon name={icon}/>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Socials;