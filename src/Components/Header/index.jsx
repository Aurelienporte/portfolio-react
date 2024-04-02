import "./header.css";
import { useState } from "react";

function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <>
      <header>
        <h1>Aurélien Porté</h1>
        <button
          className="burger"
          onClick={() =>
            isDisplayed
              ? setIsDisplayed(!isDisplayed)
              : setIsDisplayed(!isDisplayed)
          }
        >
          <div className="burger__stripe"></div>
          <div className="burger__stripe"></div>
          <div className="burger__stripe"></div>
        </button>
      </header>
      <nav className={isDisplayed ? "menu displayed" : "menu"}>
        <ul className={isDisplayed ? "menu__list visible" : "menu__list"}>
          <li>
            <a className="menu__link" href="#presentation">
              Accueil
            </a>
          </li>
          <li>
            <a className="menu__link" href="#projects">
              Projets
            </a>
          </li>
          <li>
            <a className="menu__link" href="#codepen">
              Code Pen
            </a>
          </li>
          <li>
            <a className="menu__link" href="#skills">
              Compétences
            </a>
          </li>
          <li>
            <a className="menu__link" href="#education">
              Formation
            </a>
          </li>
          <li>
            <a className="menu__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
