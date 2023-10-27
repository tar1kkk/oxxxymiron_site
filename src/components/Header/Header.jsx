import React from 'react';
import Logo from "../Logo/Logo";
import {MENU} from "../../utils/constants";
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from "react-router-dom";
import Socials from "../Socials/Socials";

function Header(props) {
    return (
      <section className="header">
          <div className="container">
              <header>
                  <Logo/>
                  <nav className='menu'>
                      {MENU.map(({link,name},i)=>
                          <ScrollAnimation key={link} className='menu-item' animateIn='fadeInDown' delay={i * 100} offset={0}>
                                <Link to={`/${link}`}>
                                    {name}
                                </Link>
                          </ScrollAnimation>
                      )}
                  </nav>
                  <Socials/>
              </header>
          </div>
      </section>
    );
}

export default Header;