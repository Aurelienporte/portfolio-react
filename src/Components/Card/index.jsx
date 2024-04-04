import htmlIcon from "../../assets/icons/html_icon.svg";
import cssIcon from "../../assets/icons/css_icon.svg";
import javascriptIcon from "../../assets/icons/javascript_icon.svg";
import sassIcon from "../../assets/icons/sass_icon.svg";
import reactIcon from "../../assets/icons/react_icon.svg";

import "../Card/card.css";

function findIcon(programmingLanguage) {
  switch (programmingLanguage) {
    case "html":
      return htmlIcon;
    case "css":
      return cssIcon;
    case "javascript":
      return javascriptIcon;
    case "sass":
      return sassIcon;
    case "react":
      return reactIcon;
    default:
      return "";
  }
}
function Card({
  backTitle,
  backImage,
  description,
  links,
  languages,
  cover,
  position,
  frontTitle,
  subtitle,
}) {
  return (
    <li className="projects__card" tabIndex={0}>
      <div
        className="back"
        style={{
          background: `linear-gradient(rgb(0,0,0,.1), rgb(0,0,0,0.1)),
        url(${backImage}) top / contain no-repeat, #fefefe`,
        }}
      >
        <div className="infos">
          <div className="text foreground">
            <h4 className="text__title">{backTitle}</h4>
            {description.map((sentence) => {
              return <p className="text__p">{sentence}</p>;
            })}
          </div>
          <div className="links">
            {links.map((link) => {
              return (
                <a href={link.url} className="links__a" key={link.url}>
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="tools foreground">
            <h4 className="tools__title">Réalisé avec</h4>
            <div className="tools__icon-container">
              {languages.map((language) => {
                return (
                  <figure key={`${frontTitle}${language}`}>
                    <img
                      height="30"
                      aspect-ratio="auto"
                      src={findIcon(language)}
                      alt={`icone ${language}`}
                      className="tools__icon"
                    />
                    <figcaption className="tools__caption">
                      {language}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="front"
        style={{
          background: `linear-gradient(rgb(0,0,0,.1), rgb(0,0,0,0.8)), url(${cover}) ${position} / cover no-repeat, cadetblue`,
        }}
      >
        <div className="front__caption foreground">
          <h3 className="front__title">{frontTitle}</h3>
          <h4 className="front__subtitle">{subtitle}</h4>
        </div>
      </div>
    </li>
  );
}

export default Card;
