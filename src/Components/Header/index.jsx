import "./header.css";

function Header({ state, toogleMenu }) {
  const isDisplayed = state;
  const overlayHeight = window
    .getComputedStyle(document.querySelector("body"))
    .getPropertyValue("height");

  return (
    <>
      <header>
        <h1>Aurélien Porté</h1>
        <button
          type="button"
          id="menubutton"
          aria-label="navigation"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded={isDisplayed ? "true" : "false"}
          className="burger"
          onClick={toogleMenu}
        >
          <span
            className={
              isDisplayed ? "burger__stripe x-cross" : "burger__stripe"
            }
          ></span>
          <span
            className={
              isDisplayed ? "burger__stripe x-cross" : "burger__stripe"
            }
          ></span>
          <span
            className={
              isDisplayed ? "burger__stripe x-cross" : "burger__stripe"
            }
          ></span>
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
      <div
        className={isDisplayed ? "overlay overlay--visible" : "overlay "}
        style={{ height: `${overlayHeight}` }}
        onClick={toogleMenu}
      ></div>
    </>
  );
}

export default Header;
