import "./header.css";
import { useState } from "react";

function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const toogleMenu = () => {
    isDisplayed ? setIsDisplayed(!isDisplayed) : setIsDisplayed(!isDisplayed);
  };

  return (
    <>
      <header>
        <h1>Aurélien Porté</h1>
        <button
          type="button"
          id="menubutton"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded={isDisplayed ? "true" : "false"}
          className="burger"
          onClick={toogleMenu}
        >
          <div className="burger__stripe"></div>
          <div className="burger__stripe"></div>
          <div className="burger__stripe"></div>
        </button>
      </header>
      <nav
        className={isDisplayed ? "menu displayed" : "menu"}
        id="menu"
        aria-labelledby="menubutton"
      >
        <ul
          className={isDisplayed ? "menu__list visible" : "menu__list"}
          role="menu"
        >
          <li role="none">
            <a
              className="menu__link"
              href="#presentation"
              role="menuitem"
              onClick={toogleMenu}
            >
              Accueil
            </a>
          </li>
          <li role="none">
            <a
              className="menu__link"
              href="#projects"
              role="menuitem"
              onClick={toogleMenu}
            >
              Projets
            </a>
          </li>
          <li role="none">
            <a
              className="menu__link"
              href="#codepen"
              role="menuitem"
              onClick={toogleMenu}
            >
              Code Pen
            </a>
          </li>
          <li role="none">
            <a
              className="menu__link"
              href="#skills"
              role="menuitem"
              onClick={toogleMenu}
            >
              Compétences
            </a>
          </li>
          <li role="none">
            <a
              className="menu__link"
              href="#education"
              role="menuitem"
              onClick={toogleMenu}
            >
              Formation
            </a>
          </li>
          <li role="none">
            <a
              className="menu__link"
              href="#contact"
              role="menuitem"
              onClick={toogleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
