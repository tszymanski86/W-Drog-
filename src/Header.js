import React from "react";
import "./App.css";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1 className="logo">W DROGĘ!</h1>

      <nav>
        <ul className="destination">
          <li>
            <a id="destination0" href="#" className="active">
              Egipt
            </a>
          </li>
          <li>
            <a id="destination1" href="#">
              Kraków
            </a>
          </li>
          <li>
            <a id="destination2" href="#">
              góry
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;