import React from 'react';
import Logo from "../Logo/Logo";

function Header(props) {
    return (
      <section className="header">
          <div className="container">
              <header>
                  <Logo/>
              </header>
          </div>
      </section>
    );
}

export default Header;